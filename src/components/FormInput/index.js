import React from 'react';

/** Props passed from FormContainer */
const FormInput = ({ type, label, placeholder, onChange }) => {
    /** Render FormInput */
    return ( 
        <>
            <label className='mt-3'>
                { label }
            </label>

            <input type={ type } className="form-control" name={ label } placeholder={ placeholder } onChange={ onChange } required />
        </>
    );
}
 
export default FormInput;