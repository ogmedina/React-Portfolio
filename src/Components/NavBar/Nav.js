import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { scroller } from 'react-scroll';
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import Logo from '../NavBar/newlogo2.png'

function Navigation() {
    return (
        <>
        {/* <img className="navbar-brand" src={Logo} alt="?"/> */}
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" id="mainNav">
            <Container>
            <Navbar.Brand className="navbar-brand" href="/React-Portfolio/">Oscar Medina</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav navbarResponsive" >
                <Nav className="ml-auto navbar-nav text-uppercase">
                    <Nav.Link className="nav-item nav-link" onClick={() => scroller.scrollTo('services', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })} >Services</Nav.Link>
                    <Nav.Link className="nav-item nav-link" onClick={() => scroller.scrollTo('portfolio', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })} >Portfolio</Nav.Link>
                    <Nav.Link className="nav-item nav-link" onClick={() => scroller.scrollTo('experience', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })} >Experience</Nav.Link>
                    <Nav.Link className="nav-item nav-link" onClick={() => scroller.scrollTo('about', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })} >About</Nav.Link>
                    <Nav.Link className="nav-item nav-link" onClick={() => scroller.scrollTo('contact', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })} >Contact</Nav.Link>   
                    <Nav.Link className="nav-item nav-link" href="https://github.com/ogmedina" target="_blank">Github</Nav.Link>   
                    <Nav.Link className="nav-item nav-link" href="https://bit.ly/2JlFV88" target="_blank">Resume</Nav.Link>   
                </Nav>    
            </Navbar.Collapse>
            </Container>
        </Navbar>  
        </>
    )
}
export default Navigation;