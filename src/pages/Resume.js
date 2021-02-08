import React from 'react';
import ResumeContainer from '../components/ResumeContainer';
import fadeChoice from '../utils/fadeChoice'

const Resume = () => {
    return (
        // Render resume w/ Fade in effect if the screen is wider than 500px.
        <>
            { fadeChoice(ResumeContainer) }
        </>
    );
}
 
export default Resume;