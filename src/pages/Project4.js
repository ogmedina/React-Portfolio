import React from 'react';
import Container from 'react-bootstrap/Container';
import Password from "../Components/Portfolio/Images/passwordgenerator.JPG"
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

function ProjectFour() {
    return (
        <>
        <Header />
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Password Generator</h2>
                            <p className="item-intro text-muted">Create unique passwords</p>
                                <img className="img-fluid d-block mx-auto" src={Password} alt="Password Generator" />
                                    <p>Password Generator that is powered by Javascript. Creation of password includes a length of characters from 8 to 128, lowercase, uppercase, numeric, and/or special characters.</p>
                                    <ul className="list-inline">
                                        <li>Date: October 2020</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front-End Development</li>
                                    </ul>               
                                    <a href = "https://ogmedina.github.io/Password-Generator/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/Homework-PasswordGenerator" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                                        <i className="fab fa-github"></i>
                                        Github
                                    </button></a>
                                    <Link to = "/"><button className="btn btn-primary" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button></Link>
                     </div>
                </div>
            </div>
        </Container>    
        </>
    )
}

export default ProjectFour;