import React from 'react';
import Container from 'react-bootstrap/Container';
import Budget from "../Components/Portfolio/Images/BudgetTracker1.jpg"

function ProjectFive() {
    return (
        <>
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Budget Tracker</h2>
                            <p className="item-intro text-muted">Online/Offline Budget Tracking</p>
                                <img className="img-fluid d-block mx-auto" src={Budget} alt="Budget Tracker" />
                                    <p>An online/offline budget tracker that allows users to track expenses and deposits. Application caches files for 
                                        users who are always on the go and an internet connection is scarce. Great way to keep track of all transactions.
                                    </p>
                                    <ul className="list-inline">
                                        <li>Date: March 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front & Back-End Development</li>
                                    </ul>               
                                    <a href = "https://serene-badlands-10244.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/Budget-Tracker" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                                        <i className="fab fa-github"></i>
                                        Github
                                    </button></a>
                                    <a href = "/"><button className="btn btn-primary" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                        Close Project
                                    </button></a>
                     </div>
                </div>
            </div>
        </Container>    
        </>
    )
}

export default ProjectFive;