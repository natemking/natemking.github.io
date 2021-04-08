import React from 'react';

/** Props passed from FormContainer */
const FormTextArea = ({ type, label, placeholder, onChange}) => {
    /** Render FormTextArea */
    return (
       <>
            <label>
                { label }
            </label>

            <textarea type={ type } className="form-control" rows="6" name={ label } placeholder={ placeholder } onChange={ onChange }>
            </textarea>
       </>
    );
}
 
export default FormTextArea;