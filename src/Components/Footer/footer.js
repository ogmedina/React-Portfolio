import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <>
        <footer className="footer py-4">
            <Container>
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Oscar G. Medina 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://github.com/ogmedina" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/ogmdeveloper0" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/oscargmedina" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </Container>
        </footer>
        </>
    )
}

export default Footer;