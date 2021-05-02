import React from 'react';
import Container from 'react-bootstrap/Container';
import { scroller } from 'react-scroll'

function Masthead() {
    return (
        <>
        <header className="masthead">
            <Container>
                <div className="masthead-heading text-uppercase">Oscar G. Medina</div>
                <div className="typingwrapper">
                <div className="masthead-subheading typing">Full-Stack Web Developer</div>
                </div>                
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