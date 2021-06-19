import React from 'react';
import Container from 'react-bootstrap/Container';
import { scroller } from 'react-scroll'
import Typed from 'typed.js';


const TypedReactHooks = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'I\'m a Musician',
                'I\'m a Full-Stack Web Developer',
                'I\'m an Educator',
                'I\'m a Bassist',
                'I\'m a Hornist',
            ],
            typeSpeed: 55,
            backSpeed: 100,
            smartBackspace: true,
            loop: true,
            // loopCount: Infinity,
            cursorChar: '|',
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="typingwrapper">
            <span className="masthead-subheading" ref={el} />
        </div>
    );
}

function Masthead() {
    return (
        <>
        <header className="masthead">
            <Container>
                <div className="masthead-heading text-uppercase">Oscar G. Medina</div>
                {/* <div className="typingwrapper"> */}
                {/* <div className="masthead-subheading typing">Full-Stack Web Developer</div> */}
                {/* </div>                 */}
                <TypedReactHooks />
                <button className="btn btn-primary btn-x1 text-uppercase" onClick={() => scroller.scrollTo('services', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })} >Tell Me More</button>
            </Container>
        </header>    
        </>
    )
}

export default Masthead;