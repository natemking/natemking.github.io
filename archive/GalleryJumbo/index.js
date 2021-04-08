import React, { useState, useEffect }from 'react';
import '../../index.css'
import Loading from '../Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryJumbo = ({ state }) => {
    const { gif, alt, name, desc, tools, url, gitHub, about } = state
    // State for loading component
    const [loading, setLoading] = useState(true)

    // Set loading state on render and every time gif changes
    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    },[ gif ])

    // Render the gallery as per users choice. Lazy load the jumbo w/ a blur effect
    return (
        <section className='row mt-3 gallery__jumbo' style={about ? { display: 'flex' } : { display: 'none' }}>

            <section className='col-lg-8 mt-5'>
                { 
                    loading === false ?
                    <LazyLoadImage
                        src={gif.default}
                        alt={ alt }
                        key={Date.now()}
                        className='img-fluid'
                        effect='blur'
                    /> :
                    <Loading />
                }
            </section>
            
            <section className='col-lg-4 gallery__jumbo-text' >
                <h4 className='text-right'>{ name }</h4>
                <hr />
                <h5>
                    About.
                </h5>
                <p>
                    { desc }
                </p>
                <hr />
                <h5>
                    Tools.
                </h5>
                <p>
                    { tools }
                </p>
                <hr />
                <p>
                    {url !== null ? <a href={ url } target='_blank' rel='noreferrer'>
                        Deploy
                    </a> : null}
                </p>
                <p>
                    <a href={ gitHub } target='_blank' rel='noreferrer'>
                        Git Repo
                    </a>
                </p>
            </section>
        </section>
    );
}
 
export default GalleryJumbo;