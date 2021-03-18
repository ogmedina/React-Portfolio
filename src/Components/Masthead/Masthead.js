import React from 'react';
import Container from 'react-bootstrap/Container';

function Masthead() {
    return (
        <>
        <header className="masthead">
            <Container>
                <div className="masthead-heading text-uppercase">Oscar G. Medina</div>
                <div className="masthead-subheading">Full-Stack Web Developer</div>
                <a className="btn btn-primary btn-x1 text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </Container>
        </header>    
        </>
    )
}

export default Masthead;