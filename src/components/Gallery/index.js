import React, { useState, Suspense, lazy } from 'react';
import './style.css'
import Loading from '../Loading';
import work from '../../utils/work'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
  

const MyGallery = () => {
    const deck = work.map(work => (
       
        
        <Item
            key={work.id}
            // id={work.id}
            // original={work.gif.default}
            // thumbnail={work.imgSmall.default}
            // alt={work.alt}
            // width='640'
            // height='430'
            // title={work.name}
            html={`
                <section class='gallery__jumbo-container'>
                    <section class='mt-3 gallery__jumbo'>
    
                        <section className='mt-5'>
                            <img src='${work.gif.default}'></img>
                        </section>
    
                        <section class='gallery__jumbo-text' >
                            <h4 class='text-right'>${work.name}</h4>
                            <hr />
                            <h5>
                                About.
                            </h5>
                            <p>
                                ${work.desc}
                            </p>
                            <hr />
                            <h5>
                                Tools.
                            </h5>
                            <p>
                                ${work.tools}
                            </p>
                            <hr />
                            <p>
                                <a href=${ work.url } target='_blank' rel='noreferrer'>
                                    Deploy
                                </a> 
                            </p>
                            <p>
                                <a href=${work.gitHub} target='_blank' rel='noreferrer'>
                                    Git Repo
                                </a>
                            </p>
                        </section>
                    </section>
                </section>
            `}
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={work.imgSmall.default} alt={work.alt} id={work.idName} />
            )}

        </Item>
    ));

    return (
        <section className='container col-9-md mt-3 gallery'>
            <h3>
                Work.
            </h3>

            <Gallery>
                <section className='gallery__deck-container'>
                    {deck}
                </section>
            </Gallery>

        </section>
    );
}

export default MyGallery;