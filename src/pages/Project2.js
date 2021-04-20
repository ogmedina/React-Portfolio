// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Burger from "../Components/Portfolio/Images/burger.jpg"
// import Header from "../Components/Header/Header";
// import { Link } from "react-router-dom"

// function ProjectTwo() {
//     return (
//         <>
//         <Header />
//         <Container>
//             <div className="row justify-content-center">
//                 <div className="col-lg-8">
//                     <div className="modal-body">                                    
//                         <h2 className="text-uppercase">Eat-Da-Burger! App</h2>
//                             <p className="item-intro text-muted">Manage DB of burgers, add your own, then devour them!</p>
//                                 <img className="img-fluid d-block mx-auto" src={Burger} alt="Burger App" />
//                                     <p>Eat-Da-Burger is a restaurant app that lets users input the names of the burgers they imagine. After submitting the name of said delicous burger, the left side is filled
//                                     with the name inputted. Once the button is pressed to "Devour It", it is moved to the right side and has been 'consumed'. The app will store every burger in the database, whether devoured or not.</p>
//                                     <ul className="list-inline">
//                                         <li>Date: January 2021</li>
//                                         <li>Client: UTSA Full-Stack Web Development Course</li>
//                                         <li>Category: Front & Back-End Development</li>
//                                     </ul>
//                                     <a href = "https://desolate-eyrie-88412.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
//                                         <i className="fas fa-broadcast-tower"></i>
//                                         Deployed Site
//                                     </button></a>
//                                     <a href = "https://github.com/ogmedina/burger" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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

// export default ProjectTwo;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Stay from "../Components/Portfolio/Images/stayinapp.jpg"
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom"

function ProjectTwo() {
    return (
        <>
        <Header />
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Stay-In-App</h2>
                            <p className="item-intro text-muted">Create a plan for your indoor stay!</p>
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

export default ProjectTwo;