import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MealMaker from "./Images/mealmaker.JPG"
import Burger from "./Images/burger.jpg"
import EmployeeM from "./Images/employeemanageredit.jpg"
import Stay from "./Images/stayin.jpg"
import Book from "./Images/googlebooksearch1.jpg"
import RC from "./Images/rcspots.jpg"
import LopzBuilder from "./Images/lopzbuilder.jpg"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >     
      <Modal.Body>       
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Meal Maker</h2>
            <p className="item-intro text-muted">A place to find recipes for your favorite dishes and adult beverages</p>
              <img className="img-fluid d-block mx-auto" src={MealMaker} alt="Meal Maker App" />
                <p className="modalText">This app uses the Edamam Recipe Search API and TheCocktailDB API to help you find great recipes and great adult beverages to make. This app was created in conjuction with two other classmates, Mr. Matthew Marchand (<a href = "https://github.com/marchandmr" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Jason McDonald.(<a href = "https://github.com/JasonMcD96" rel="noreferrer" target="_blank">Github Link</a>)</p>
                <ul className="list-inline">
                  <li>Date: November 2020</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Front-End Development</li>
                </ul>
              <div className="row buttonRow">
                
              <a href = "https://ogmedina.github.io/Meal-Maker/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
              </button></a>
              <a href = "https://github.com/ogmedina/Meal-Maker" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                Github
              </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>                            
        </div>       
        </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Stay-In-App</h2>
            <p className="item-intro text-muted">Create a plan for your indoor stay!</p>
              <img className="img-fluid d-block mx-auto" src={Stay} alt="Stay-In-App" />
                <p className="modalText">The Stay-In-App is a application that lets users find movies and create a watchlist of movies that they have watched and not watched. It features a log-in screen that saves their watchlist in a MySQL database so their data is persistent.
                   Future development of this app will allow users to follow the same process for adding different food & drink, board games, and video games. It will also include a wheel to help users determine what to do without the headache that comes with tough decision making.
                   This app was created in conjuction with two other classmates, Mr. Caleb Hopkins (<a href = "https://github.com/CalebTheCreative" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Marshall Bertschy(<a href = "https://github.com/Marshallb98" rel="noreferrer" target="_blank">Github Link</a>).</p>
                <ul className="list-inline">
                  <li>Date: February 2021</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Front & Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://stayingin.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
                </button></a>
              <a href = "https://github.com/ogmedina/Project-2" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                 Github
              </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">RC-Spots App</h2>
            <p className="item-intro text-muted">A social environment for RC Enthusiasts</p>
              <img className="img-fluid d-block mx-auto" src={RC} alt="RC Spots" />
                <p className="modalText">A social environment for RC fans to post locations, pictures, and descriptions for good spots to run or view RC vehicles.This app was created in conjuction with two other classmates, Mr. Matthew Marchand (<a href = "https://github.com/marchandmr" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Jason McDonald.(<a href = "https://github.com/JasonMcD96" rel="noreferrer" target="_blank">Github Link</a>).</p>
                <ul className="list-inline">
                  <li>Date: April 2021</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Front & Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://powerful-journey-56416.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
                </button></a>                        
              <a href = "https://github.com/ogmedina/Rc-Social-Network" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                 Github
              </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal4(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Eat-Da-Burger! App</h2>
            <p className="item-intro text-muted">Manage DB of burgers, add your own, then "devour" them!</p>
              <img className="img-fluid d-block mx-auto" src={Burger} alt="Burger App" />
                <p className="modalText">Eat-Da-Burger is a restaurant app that lets users input the names of the burgers they imagine. After submitting the name of said delicous burger, the left side is filled
                   with the name inputted. Once the button is pressed to "Devour It", it is moved to the right side and has been 'consumed'. The app will store every burger in the database, whether devoured or not.</p>
                <ul className="list-inline">
                  <li>Date: January 2021</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Front & Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://desolate-eyrie-88412.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
                </button></a>
              <a href = "https://github.com/ogmedina/burger" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                 Github
                </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal5(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Employee Management</h2>
            <p className="item-intro text-muted">Command-Line Employee Manager</p>
              <img className="img-fluid d-block mx-auto" src={EmployeeM} alt="Employee Manager" />
                <p className="modalText">A command-line application that allows the user to view and manage departments, roles and employees. It uses node.js, inquirer, and MySQL.</p>
                <ul className="list-inline">
                  <li>Date: January 2021</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://github.com/ogmedina/Homework-Employee-Tracker" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                Github
              </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal6(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Google Books Search</h2>
            <p className="item-intro text-muted">Search Books and save them!</p>
              <img className="img-fluid d-block mx-auto" src={Book} alt="Google Books Search" />
                <p className="modalText">This is a React-based Google Books Search app. It uses React components, helper/util functions, 
                   and utilizes React lifestyle methods to query and display books based on user searches. It uses a
                   MERN stack so that users can save books to review or purchase later.</p>
                <ul className="list-inline">
                  <li>Date: March 2021</li>
                  <li>Client: UTSA Full-Stack Web Development Course</li>
                  <li>Category: Front & Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://secure-shelf-07614.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
                </button></a>
              <a href = "https://github.com/ogmedina/Google-Books-Search" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
                <i className="fab fa-github"></i>
                Github
              </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

  function MyVerticallyCenteredModal7(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="modal-body">                                    
          <h2 className="text-uppercase">Lópz Builder</h2>
            <p className="item-intro text-muted">Contractor Website</p>
              <img className="img-fluid d-block mx-auto" src={LopzBuilder} alt="Google Books Search" />
                <p className="modalText">This is a contractor website for the company Lopz Building using React. It provides an about, portfolio, testimony and a contact section.</p>
                <ul className="list-inline">
                  <li>Date: June 2021</li>
                  <li>Client: Lópz Builders</li>
                  <li>Category: Front & Back-End Development</li>
                </ul>
              <div className="row buttonRow">                
              <a href = "https://www.lopzbuilder.com/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                <i className="fas fa-broadcast-tower"></i>
                 Deployed Site
                </button></a>
              <Button onClick={props.onHide}>Close</Button>    
              </div>              
        </div>
       </Modal.Body>        
      </Modal>
    );
  }

function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);
    const [modalShow6, setModalShow6] = useState(false);
    const [modalShow7, setModalShow7] = useState(false);

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
                        <div className="portfolio-link" onClick={() => {setModalShow(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={MealMaker} alt="Meal Maker App" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">The Meal Maker App</div>
                            <div className="portfolio-caption-subheading text-portfolio">An App for searching for food & drink</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow2(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={Stay} alt="Stay-In-App" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Stay-In-App</div>
                            <div className="portfolio-caption-subheading text-portfolio">Stuck Inside? Movie-Time</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow3(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={RC} alt="RC-Spots App" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">RC-Spots App</div>
                            <div className="portfolio-caption-subheading text-portfolio">A social environment for RC Enthusiasts</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow4(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={Burger} alt="Eat-Da-Burger! App" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Eat-Da-Burger! App</div>
                            <div className="portfolio-caption-subheading text-portfolio">Manage DB of eaten burgers!</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow5(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={EmployeeM} alt="Employee Management" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Employee Management</div>
                            <div className="portfolio-caption-subheading text-portfolio">Manage DB of employees</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow6(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={Book} alt="Google Book Search" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Google Books Search</div>
                            <div className="portfolio-caption-subheading text-portfolio">Search books and save them!</div>
                        </div>
                    </div>
                </div>
                {/* Empty Space for Next Project */}
                {/* <div className="col-lg-4 col-sm-6 mb-4">                    */}
                {/* </div> */}
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <div className="portfolio-link" onClick={() => {setModalShow7(true)}} data-toggle="modal">                          
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={LopzBuilder} alt="Lopz Builder" />
                        </div>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Lópz Builder</div>
                            <div className="portfolio-caption-subheading text-portfolio">Contractor Website</div>
                        </div>
                    </div>
                </div>
                {/* Empty Space for Next Project */}
                {/* <div className="col-lg-4 col-sm-6 mb-4">                    */}
                {/* </div> */}

                </div>             
            </Container>  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
         <MyVerticallyCenteredModal3
          show={modalShow3}
          onHide={() => setModalShow3(false)}
        />
         <MyVerticallyCenteredModal4
          show={modalShow4}
          onHide={() => setModalShow4(false)}
        />
         <MyVerticallyCenteredModal5
          show={modalShow5}
          onHide={() => setModalShow5(false)}
        />
         <MyVerticallyCenteredModal6
          show={modalShow6}
          onHide={() => setModalShow6(false)}
        />
         <MyVerticallyCenteredModal7
          show={modalShow7}
          onHide={() => setModalShow7(false)}
        />
        </section>
        </>
    )
}

export default Portfolio;