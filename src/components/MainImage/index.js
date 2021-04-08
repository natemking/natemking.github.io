import React, { useState, useEffect } from 'react';
import bgImage from './nate-in-smoke.jpg';

const MainImage = () => {
    const [imgPosition, setImgPosition] = useState('absolute');
    
    const hashLocation = () => {
        window.location.hash === '#/portfolio' || window.location.hash === '#/resume' ?
        setImgPosition('fixed') :
        setImgPosition('absolute');
    };

    useEffect(() => {
        hashLocation();
        window.addEventListener('hashchange', hashLocation)
    },[]);

    // Render main bg image
    return (
        <img 
            className="wrapper__img" 
            src={ bgImage } 
            alt="nate in smoke" 
            style={{position: imgPosition }}
        />
     );
}
 
export default MainImage;