import React from 'react';
import Container from 'react-bootstrap/Container';
import projects from "../projects.js"

function Portfolio() {
    return (
        <>
        <section className="page-section bg-dark" id="portfolio">
            <Container>
                <div className="text=center">
                    <h2 className="section-heading text-uppercase portfoliotitle">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Visit some of my work!</h3>
                </div>
                <div className="row">
                    {projects.map(data =>
                    <div key = {data.id} className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={data.href}>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={data.img} alt={data.alt} />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">{data.heading}</div>
                            <div className="portfolio-caption-subheading text-portfolio">{data.subheading}</div>
                        </div>
                    </div>
                </div>
                )}
                </div>             
            </Container>
        </section>
        </>
    )
}

export default Portfolio;