import FadeIn from '../utils/FadeIn'

// Due to the FadeIn effect, the z-index of the about & resume pages we not applying correctly
// at page load on mobile devices. This function only allows the components to render with the
// FadeIn effect only if the screen is wider that 500px

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