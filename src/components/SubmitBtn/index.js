import React from 'react';

/** Props passed from FormContainer */
const SubmitBtn = ({ btnDisable }) => {
    return (
        /** Render form submit button */
        <button className="btn btn-lg btn-dark btn-block mt-4" type="submit" disabled={ btnDisable }>
            Submit
        </button>
    );
}
 
export default SubmitBtn;