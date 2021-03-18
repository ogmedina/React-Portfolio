import React from 'react';
import Container from 'react-bootstrap/Container';
import portfolio1 from '../Portfolio/Images/mealmaker.JPG'
import portfolio2 from '../Portfolio/Images/passwordgenerator.JPG'
import portfolio3 from '../Portfolio/Images/workday1.jpg'
import portfolio4 from '../Portfolio/Images/readmegenerator.jpg'
import portfolio5 from '../Portfolio/Images/employeetemplate.jpg'
import portfolio6 from '../Portfolio/Images/employeemanager.jpg'
import portfolio7 from '../Portfolio/Images/burger.jpg'
import portfolio8 from '../Portfolio/Images/stayinapp.jpg'
import portfolio9 from '../Portfolio/Images/BudgetTracker1.jpg'

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
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio1} alt="Meal Maker App" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">The Meal Maker App</div>
                                <div className="portfolio-caption-subheading text-portfolio">An app for searching for food & drink</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio2} alt="Password Generator" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Password Generator</div>
                                <div className="portfolio-caption-subheading text-portfolio">Create unique passwords!</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio3} alt="Work Day Scheduler" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Day Agenda</div>
                                <div className="portfolio-caption-subheading text-portfolio">Organize your day</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio4} alt="GitHub Readme Generator" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Readme Generator</div>
                                <div className="portfolio-caption-subheading text-portfolio">Creates README files</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio5} alt="Employee Template" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Employee Template</div>
                                <div className="portfolio-caption-subheading text-portfolio">Creates employee HTML file</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio6} alt="Employee Management" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Employee Management</div>
                                <div className="portfolio-caption-subheading text-portfolio">Manage DB of employees</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal7">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio7} alt="Eat-DaBurger-App!" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Eat-Da-Burger! App</div>
                                <div className="portfolio-caption-subheading text-portfolio">Manage DB of eaten burgers!</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal8">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio8} alt="Stay-In-App" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Stay-In App</div>
                                <div className="portfolio-caption-subheading text-portfolio">Stuck Inside? Movie-Time</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal9">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={portfolio9} alt="Budget Tracker" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Budget Tracker</div>
                                <div className="portfolio-caption-subheading text-portfolio">Organize your $$$</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Portfolio;