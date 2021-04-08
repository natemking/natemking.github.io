import React, { useState, useEffect } from 'react';
import bgImage from './nate-in-smoke.jpg';

const MainImage = () => {
    /** State for the BG img position */
    const [imgPosition, setImgPosition] = useState('absolute');
    
    /**
     * Function to check hash location of page & sets the BG img to
     * fixed on the portfolio & resume pages
     */
    const hashLocation = () => {
        window.location.hash === '#/portfolio' || window.location.hash === '#/resume' ?
        setImgPosition('fixed') :
        setImgPosition('absolute');
    };

    /** 
     * Calls hashLocation function on page load & listens for a
     * hashchange to, again, call hashLocation
     */
    useEffect(() => {
        hashLocation();
        window.addEventListener('hashchange', hashLocation)
    },[]);

    /** Render MainImage */
    return (
        <img 
            className="wrapper__img" 
            src={ bgImage } 
            alt="nate in smoke" 
            style={{ position: imgPosition }}
        />
     );
}
 
export default MainImage;