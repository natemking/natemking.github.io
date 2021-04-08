import FadeIn from '../utils/FadeIn'

/**
 * Due to the FadeIn effect the z-index of the about & resume pages
 * were not applying correctly at page load on mobile devices. This
 * function only allows the components to render with the FadeIn effect
 * if the screen is wider than 500px
 * 
 * @param {Object} Page the component page that is to be checked
 * @returns a fade effect if the page is > 500px wide
 */
const fadeChoice = (Page) => {
    let width = window.innerWidth

    if (width < 500) {
        return (<Page />)
    } else {
        return (
            // Render about page w/ fad in effect
            <FadeIn delay={250} duration={450}>
                <Page />
            </FadeIn>
        );
    }
}

export default fadeChoice;