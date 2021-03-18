import React from 'react';
import Container from 'react-bootstrap/Container';
import TAMUK from './Images/TAMUK.png'
import Palmview from './Images/palmviewedit.png'
import Morris from './Images/morrisms.jpg'
import UTSA from './Images/utsa2.jpg'

function Experience() {
    return (
        <>
        <section className="page-section" id="experience">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Experience</h2>
                    <br />
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={TAMUK} alt="Texas A&M University-Kingsville" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>May 2010</h4>
                                <h4 className="subheading">Bachelor of Music</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Texas A&M University - Kingsville</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={Palmview} alt="Palmview HS"/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>September 2010</h4>
                                <h4 className="subheading">Head Orchestra Director</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Taught guitar and orchestra classes in La Joya ISD at Palmview HS from 2010-2014</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={Morris} alt="Morris MS" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Band Director</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Taught brass beginners, concert band, marching band and jazz band in McAllen ISD at Morris MS and McAllen HS from 2014-2020.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={UTSA} alt="UTSA" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>October 2020</h4>
                                <h4 className="subheading">UTSA Full-Stack Web Development Course</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Enrolled in an intensive program focused on gaining technical
                            programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express.js, Handlebars.js & React.js.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>More<br />to<br />Come!</h4>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>       
        </>
    )
}

export default Experience;