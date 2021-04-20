import React from 'react';
import Container from 'react-bootstrap/Container';
import RC from "../Components/Portfolio/Images/rcspots.jpg"
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom"

function ProjectThree() {
    return (
        <>
        <Header />
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">RC-Spots App</h2>
                            <p className="item-intro text-muted">A social environment for RC enthusiasts</p>
                                <img className="img-fluid d-block mx-auto" src={RC} alt="RC Spots login" />
                                    <p>A social environment for RC fans to post locations, pictures, and descriptions for good spots to run or view RC vehicles.This app was created in conjuction with two other classmates, Mr. Matthew Marchand (<a href = "https://github.com/marchandmr" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Jason McDonald.(<a href = "https://github.com/JasonMcD96" rel="noreferrer" target="_blank">Github Link</a>)</p>
                                    <ul className="list-inline">
                                        <li>Date: April 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front & Back-End Development</li>
                                    </ul>       
                                    <a href = "https://powerful-journey-56416.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>                        
                                    <a href = "https://github.com/ogmedina/Rc-Social-Network" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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

export default ProjectThree;