import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryJumboImg = ({ state }) => {
    const { gif, alt } = state
    return ( 
        <LazyLoadImage
            src={gif.default}
            alt={alt}
            key={Date.now()}
            className='img-fluid'
            effect='blur'
        />
    );
}
 
export default GalleryJumboImg;