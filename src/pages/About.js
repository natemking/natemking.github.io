import React from 'react';
import About from '../components/About';
import fadeChoice from '../utils/fadeChoice'

const AboutPage = () => {
      // Render resume w/ Fade in effect if the screen is wider than 500px.
    return ( 
        <>
            { fadeChoice(About) }
        </>
    );
}
 
export default AboutPage;