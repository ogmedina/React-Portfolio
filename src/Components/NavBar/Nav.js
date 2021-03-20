import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import Logo from '../NavBar/newlogo2.png'

function Navigation() {
    return (
        <>
        {/* <img className="navbar-brand" src={Logo} alt="?"/> */}
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" id="mainNav">
            <Container>
            <Navbar.Brand className="navbar-brand js-scroll-trigger" href="/main">Oscar Medina</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav navbarResponsive" >
                <Nav className="ml-auto navbar-nav text-uppercase">
                    <Nav.Link className="nav-item nav-link js-scroll-trigger" href="/main/#services">Services</Nav.Link>
                    <Nav.Link className="nav-item nav-link" href="/main/#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="nav-item nav-link" href="/main/#experience">Experience</Nav.Link>
                    <Nav.Link className="nav-item nav-link" href="/main/#about">About</Nav.Link>
                    <Nav.Link className="nav-item nav-link" href="/main/#contact">Contact</Nav.Link>   
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