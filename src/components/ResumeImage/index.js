import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/** Props passed from ResumeContainer */
const ResumeImage = (props) => {
    /** Render ResumeImage w/ lazy load and blur effect */
    return ( 
        <section>
            <LazyLoadImage
                alt="Nate M Kings resume"
                effect="blur"
                src={ props.page } />
        </section>
    );
}
 
export default ResumeImage;