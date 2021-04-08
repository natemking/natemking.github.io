import React from 'react';

/** Props passed from FormContainer */
const FormRow = (props) => {
    /** Render FormRow */
    return (  
        <section className = "form-row mt-3" >
            { props.children }
        </ section>        
    );
}
 
export default FormRow;