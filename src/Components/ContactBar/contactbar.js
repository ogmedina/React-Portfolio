import React from 'react';
import Container from 'react-bootstrap/Container';

function ContactBar() {
    return (
        <>
        <section className="page-section" id="contact">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact</h2>
                    <i className="fas fa-phone-square"> (210) 906-8276</i>
                <br />
                <i className="fas fa-envelope"></i><a href="mailto: ogmdeveloper0@gmail.com"> ogmdeveloper0@gmail.com</a>
                <hr />                
                </div>
                <form id="contactForm" action="https://formspree.io/f/xqkgqwyn" method="POST">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className = "form-control" name="username" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" name="telephone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" name="message" placeholder="Your Message *" required="required" data-valdiation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>                            
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercse" id="sendMessageButton" type="submit">Send Message</button>                        
                    </div>
                </form>
            </Container>
        </section>      
        </>
    )
}

export default ContactBar;