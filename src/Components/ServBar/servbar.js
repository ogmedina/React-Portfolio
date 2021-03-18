import React from 'react';
import Container from 'react-bootstrap/Container';

function Services() {
    return (
        <>
        <section className="page-section" id="services">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">How can I help you create awesome products?</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fab fa-connectdevelop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Front-End</h4>
                        <p className="text-muted">HTML, CSS, Javascript, Bootstrap, React</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-mobile-alt fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Android, iPhone/iPad, Tablet</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop-code fa-stack-1x fa-inverse"></i>                        
                        </span>
                        <h4 className="my-3">Back-End</h4>
                        <p className="text-muted">Node.js, Express.js, MySQL, MongoDB</p>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Services;