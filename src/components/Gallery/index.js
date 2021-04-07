import React, { useState, Suspense, lazy } from 'react';
import './style.css'
import Loading from '../Loading';
import work from '../../utils/work'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { waitForDomChange } from '@testing-library/dom';

const MyGallery = () => {
     
    const deck = work.map(work => (
        <Item 
            id={ work.id }
            original={ work.gif.default }
            thumbnail={ work.imgSmall.default } 
            alt={work.alt} 
            width='640' 
            height='430'
            title={ work.desc } 
            key={work.id}
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={work.imgSmall.default} alt={work.alt} id={ work.idName } />
            )}
            
        </Item>
     ));

   return ( 
       <section className='container col-9-md mt-3 gallery'>
            <h3>
                Work.
            </h3>

            <Gallery>
                {/* <Item
                    original="https://placekitten.com/1024/768?image=1"
                    thumbnail="https://placekitten.com/80/60?image=1"
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                    )}
                </Item>
                <Item
                    original="https://placekitten.com/1024/768?image=2"
                    thumbnail="https://placekitten.com/80/60?image=2"
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
                    )}
                </Item> */}
                <section className='gallery__deck-container'>
                    { deck }
                </section>
            </Gallery>
         </section>
    );
}

export default MyGallery;