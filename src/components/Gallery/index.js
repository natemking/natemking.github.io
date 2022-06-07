import React, { useRef, Suspense } from 'react';
import Loading from '../Loading';
import work from '../../utils/work';
import { CustomGallery, Item, DefaultLayout } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import './style.css';

/** By default Photoswipe locks scrolling when closeOnScroll &
* closeOnVerticalDrag are set to false. Fix found here: 
* https://github.com/dimsemenov/PhotoSwipe/issues/1291
*/

const Gallery = () => {
    /** Ref for the CustomGallery */
    const layoutRef = useRef()

    /** HTML for the focus gallery */
    const deck = work.map(work => (
        <Item
            key={ work.id }
            html={`
                <section class='gallery__jumbo-container modal-scroll'>
                    <section class='gallery__jumbo'>
    
                        <section class='gallery__jumbo-img-container'>
                            <img src='${ work.gif.default }'></img>
                        </section>
    
                        <section class='gallery__jumbo-text' >
                            <h4 class='text-right'>${ work.name }</h4>
                            <hr />

                            <h5>
                                About.
                            </h5>
                            <p>
                                ${ work.desc }
                            </p>
                            <hr />

                            <h5>
                                Tools.
                            </h5>
                            <p>
                                ${ work.tools }
                            </p>
                            <hr />

                            <p>
                                ${ work.url ? 
                                `<a href=${ work.url } target='_blank' rel='noreferrer'>Deployed App</a>`:
                                '' }
                            </p>
                            ${work.gitHub && 
                                `<p>
                                    <a href=${ work.gitHub } target='_blank' rel='noreferrer'>
                                        Git Repo
                                    </a>
                                </p>`
                            }
                        </section>
                    </section>
                </section>
            `}
        >
            {({ ref, open }) => (
                <div id={ work.idName } className='gallery__deck-tooltip'>
                        <img 
                            ref={ ref } 
                            onClick={ open } 
                            src={ work.imgSmall.default } 
                            alt={ work.alt } 
                        />
                        <span className='gallery__deck-tooltip-text'>{ work.name }</span>
                    </div>
            )}

        </Item>
    ));

    /** Render Gallery */
    return (
        <section className='container col-9-md mt-3 gallery'>
            <h3>
                Work.
            </h3>

            <Suspense fallback={ <Loading /> }>
                <CustomGallery 
                    layoutRef={ layoutRef } 
                    ui={ PhotoswipeUIDefault }
                    options={{
                        closeOnScroll: false,
                        closeOnVerticalDrag: false,
                        preload: [1,3]
                    }}
                >
                    <section className='gallery__deck-container'>
                        { deck }
                    </section>
                </CustomGallery>
           </Suspense>

            <DefaultLayout
                shareButton={ false }
                fullscreenButton={ false }
                zoomButton={ false }
                ref={ layoutRef }
            />

        </section>
    );
}

export default Gallery;