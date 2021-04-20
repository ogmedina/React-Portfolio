import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from "../Components/Header/Header";
import Book from "../Components/Portfolio/Images/googlebooksearch1.jpg"
import { Link } from "react-router-dom";

function ProjectSix() {
    return (
        <>
        <Header />
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Google Books Search</h2>
                            <p className="item-intro text-muted">Search Books and save them!</p>
                                <img className="img-fluid d-block mx-auto" src={Book} alt="Google Books Search" />
                                    <p>This is a React-based Google Books Search app. It uses React components, helper/util functions, 
                                        and utilizes React lifestyle methods to query and display books based on user searches. It uses a
                                         MERN stack so that users can save books to review or purchase later.
                                    </p>
                                    <ul className="list-inline">
                                        <li>Date: March 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front & Back-End Development</li>
                                    </ul>               
                                    <a href = "https://secure-shelf-07614.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/Google-Books-Search" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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

export default ProjectSix;