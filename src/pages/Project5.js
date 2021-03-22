import React from 'react';
import Container from 'react-bootstrap/Container';
import Stay from "../Components/Portfolio/Images/stayinapp.jpg"

function ProjectFive() {
    return (
        <>
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Password Generator</h2>
                            <p className="item-intro text-muted">Create unique passwords</p>
                                <img className="img-fluid d-block mx-auto" src={Stay} alt="Stay-In-App" />
                                    <p>The Stay-In-App is a application that lets users find movies and create a watchlist of movies that they have watched and not watched. It features a log-in screen that saves their watchlist in a MySQL database so their data is persistent.
                                    Future development of this app will allow users to follow the same process for adding different food & drink, board games, and video games. It will also include a wheel to help users determine what to do without the headache that comes with tough decision making.
                                    This app was created in conjuction with two other classmates, Mr. Caleb Hopkins (<a href = "https://github.com/CalebTheCreative" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Marshall Bertschy(<a href = "https://github.com/Marshallb98" rel="noreferrer" target="_blank">Github Link</a>)</p>
                                    <ul className="list-inline">
                                        <li>Date: February 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front & Back-End Development</li>
                                    </ul>               
                                    <a href = "https://stayingin.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/Project-2" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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