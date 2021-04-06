import React from 'react';
import Container from 'react-bootstrap/Container';
import EmployeeM from "../Components/Portfolio/Images/employeemanager.jpg"
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
                        <h2 className="text-uppercase">Employee Management</h2>
                            <p className="item-intro text-muted">Command-Line Employee Manager</p>
                                <img className="img-fluid d-block mx-auto" src={EmployeeM} alt="Employee Manager" />
                                    <p>A command-line application that allows the user to view and manage departments, roles and employees. It uses node.js, inquirer, and MySQL.</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Back-End Development</li>
                                    </ul>                               
                                    <a href = "https://github.com/ogmedina/Homework-Employee-Tracker" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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