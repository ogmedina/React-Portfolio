// import React from 'react';
// import Container from 'react-bootstrap/Container';

// import Header from "../Components/Header/Header";
// import { Link } from "react-router-dom";

// function ProjectFour() {
//     return (
//         <>
//         <Header />
//         <Container>
//             <div className="row justify-content-center">
//                 <div className="col-lg-8">
//                     <div className="modal-body">                                    
//                         <h2 className="text-uppercase">Password Generator</h2>
//                             <p className="item-intro text-muted">Create unique passwords</p>
//                                 <img className="img-fluid d-block mx-auto" src="" alt="Password Generator" />
//                                     <p>Password Generator that is powered by Javascript. Creation of password includes a length of characters from 8 to 128, lowercase, uppercase, numeric, and/or special characters.</p>
//                                     <ul className="list-inline">
//                                         <li>Date: October 2020</li>
//                                         <li>Client: UTSA Full-Stack Web Development Course</li>
//                                         <li>Category: Front-End Development</li>
//                                     </ul>               
//                                     <a href = "https://ogmedina.github.io/Password-Generator/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
//                                         <i className="fas fa-broadcast-tower"></i>
//                                         Deployed Site
//                                     </button></a>
//                                     <a href = "https://github.com/ogmedina/Homework-PasswordGenerator" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
//                                         <i className="fab fa-github"></i>
//                                         Github
//                                     </button></a>
//                                     <Link to = "/"><button className="btn btn-primary" type="button">
//                                         <i className="fas fa-times mr-1"></i>
//                                         Close Project
//                                     </button></Link>
//                      </div>
//                 </div>
//             </div>
//         </Container>    
//         </>
//     )
// }

// export default ProjectFour;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Burger from "../Components/Portfolio/Images/burger.jpg"
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom"

function ProjectFour() {
    return (
        <>
        <Header />
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Eat-Da-Burger! App</h2>
                            <p className="item-intro text-muted">Manage DB of burgers, add your own, then devour them!</p>
                                <img className="img-fluid d-block mx-auto" src={Burger} alt="Burger App" />
                                    <p>Eat-Da-Burger is a restaurant app that lets users input the names of the burgers they imagine. After submitting the name of said delicous burger, the left side is filled
                                    with the name inputted. Once the button is pressed to "Devour It", it is moved to the right side and has been 'consumed'. The app will store every burger in the database, whether devoured or not.</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2021</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front & Back-End Development</li>
                                    </ul>
                                    <a href = "https://desolate-eyrie-88412.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/burger" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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