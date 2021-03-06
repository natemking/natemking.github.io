import React, { useState, Suspense, lazy } from 'react';
import './style.css'
import Loading from '../../src/components/Loading';
import work from '../../src/utils/work'

const GalleryJumbo = lazy(() => import('../GalleryJumbo'));
const GalleryDeck = lazy(() => import('../GalleryDeck'));

const Gallery = () => {
    // State for project the user chooses
    const [ selectedWork, setSelectedWork ] = useState({
        gif:'',
        alt: '',
        name: '',
        desc: '',
        tools: '',
        url: '',
        gitHub: '',
        about: false
    })

    // On click set state to the project the user chose
    const handleClickEvent = (e) => {
        
        let userPick = work.filter(work => (
            work.id.toString() === e.target.id
        ));

        setSelectedWork({
            gif: userPick[0].gif,
            alt: userPick[0].alt,
            name: userPick[0].name,
            desc: userPick[0].desc,
            tools: userPick[0].tools,
            url: userPick[0].url,
            gitHub: userPick[0].gitHub,
            about: true
        })
    }

    // Map all works and send to gallery deck for display
    const deck= work.map(work => (
        <GalleryDeck key={ work.id } id={ work.id } img={ work.img } alt={ work.alt } onClick={ handleClickEvent }/>
    ))

    // Render the gallery
    return (
        <section className='container col-9 mt-3 gallery'>
            <h3>
                Work.
            </h3>
            <Suspense fallback={ <Loading /> }>
                <GalleryJumbo state={ selectedWork } />
            </Suspense>

            
                <section className='row mt-5 gallery__deck justify-content-around'>
                    <Suspense fallback={ <Loading /> }>
                        { deck }
                    </Suspense>
                </section>
            
            
        </section>
    );
}
 
export default Gallery;