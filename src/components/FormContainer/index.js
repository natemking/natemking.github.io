import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './style.css'
import emailjs from 'emailjs-com';
import FormInput from '../FormInput';
import FormRow from '../FormRow';
import FormTextArea from '../FormTextArea';
import SubmitBtn from '../SubmitBtn';
import Alert from '../Alert';


const ContactFormContainer = () => {
    /** State for user inputs */
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    /** State for email send status for status alert */
    const [emailAlert, setEmailAlert] = useState({ 
        alert: false, 
        type: false, 
        msg:''
    });
    /**  State for btn availability */
    const [btnDisable, setBtnDisable] = useState(true)

    /** 
     * Setup email template per state of users inputs 
     * @type {Object}
     */
    const templateParams = {
        from_name: userName,
        reply_to: userEmail,
        message: userMessage
    }

    /**
     * Function to set the state of the user inputs
     * 
     * @param {Object} e event object
     * @returns {string} the users input to state
     */
    const handleInputChange = e => {
        const  { name, value } = e.target;
        switch ( name ) {
            case 'Name':
                setUserName(value);
                break;
            case 'Email':
                setUserEmail(value);
                break;
            case 'Message':
                setUserMessage(value);
                break;
            default:
                break;
        }
    }

    /** 
     * Function to set the btn availability state when the captcha 
     * is passed
     */
    const  captchaOnChange = () => {
        setBtnDisable(false)
    };


    /** 
     * Function that sends email via emailjs and alerts the user 
     * of the send status. Formatting docs:
     * https://www.emailjs.com/docs/examples/reactjs/
     * 
     * @returns {string} console.log with the status of the email
     */
    const sendEmail = async () => {
        try {
            const response = await emailjs.send(
                process.env.REACT_APP_EMJS_SID,
                process.env.REACT_APP_EMJS_TID,
                templateParams,
                process.env.REACT_APP_EMJS_UID
            );
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector('form').reset();
            setEmailAlert({ alert: true, type: true, msg: 'Thanks for reaching out. I\'ll be in touch shortly.' })

        } catch (err) {
            console.error('FAILED...', err)
            document.querySelector('form').reset();
            setEmailAlert({ alert: true, type: false, msg: 'Aw $hit. Somethings broke. Please send me an email to natemking@gmail.com' })
        }
    };

    /**
     * Function that on form submit call the sendEmail function 
     * 
     * @param {Object} e  event object
     */
    const handleFormSubmit = e => {
        e.preventDefault();
        sendEmail();
    }

    /** Render the FormContainer */
    return ( 
        <section className="container-sm col-md-8 col-lg-6 mt-3 form__container">

            <h3>Communicate.</h3>

            <form className="form-group" onSubmit={ handleFormSubmit }>
                
                <FormRow>
                    <section className="col-md-6" >
                        <FormInput type='text' label='Name' placeholder='name' onChange={ handleInputChange } />
                    </section>
                    <section className="col-md-6" >
                        <FormInput type='email' label='Email' placeholder='name@email.com' onChange={ handleInputChange } />
                    </section>
                </FormRow>

                <FormRow>
                    <FormTextArea type='text' label='Message' placeholder='message' onChange={ handleInputChange } />
                </FormRow>

                <FormRow>
                    <section className="col-md-4">
                        <ReCAPTCHA
                            sitekey={ process.env.REACT_APP_GOOG_RECAP_KEY }
                            onChange={ captchaOnChange }
                        />
                        <SubmitBtn btnDisable={ btnDisable }/>
                    </section>
                </FormRow>

            </form>
            
                <Alert alertState={ emailAlert }/>
            
        </section>
    );
}
 
export default ContactFormContainer;