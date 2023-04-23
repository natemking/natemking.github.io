import React, { useState, useEffect } from 'react';
import bgImage from './nate-in-smoke.jpg';

const MainImage = () => {
    /** State for the BG img position */
    const [imgPosition, setImgPosition] = useState('fixed');
    
    /**
     * Function to check hash location of page & sets the BG img to
     * fixed on the portfolio & resume pages unless the screen width
     * is < 768px, then BG img is fixed on all.
     */
    const hashLocation = () => {
        if (window.innerWidth > 767){
            window.location.hash === '#/portfolio' || window.location.hash === '#/resume' ?
            setImgPosition('fixed') :
            setImgPosition('absolute');
        }
    };

    /** 
     * Calls hashLocation function on page load & listens for a
     * hashchange to, again, call hashLocation
     */
    useEffect(() => {
        hashLocation();
        window.addEventListener('hashchange', hashLocation)
        return () => window.removeEventListener('hashchange', hashLocation);
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