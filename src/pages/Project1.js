import React from 'react';
import Container from 'react-bootstrap/Container';
import MealMaker from "../Components/Portfolio/Images/mealmaker.JPG"

function ProjectOne() {
    return (
        <>
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">                                    
                        <h2 className="text-uppercase">Meal Maker</h2>
                            <p className="item-intro text-muted">A place to find recipes for your favorite dishes and adult beverages</p>
                                <img className="img-fluid d-block mx-auto" src={MealMaker} alt="Meal Maker App" />
                                    <p>This app uses the Edamam Recipe Search API and TheCocktailDB API to help you find great recipes and great adult beverages to make. This app was created in conjuction with two other classmates, Mr. Matthew Marchand (<a href = "https://github.com/marchandmr" rel="noreferrer" target="_blank">Github Link</a>) and Mr. Jason McDonald.(<a href = "https://github.com/JasonMcD96" rel="noreferrer" target="_blank">Github Link</a>)</p>
                                    <ul className="list-inline">
                                        <li>Date: November 2020</li>
                                        <li>Client: UTSA Full-Stack Web Development Course</li>
                                        <li>Category: Front-End Development</li>
                                    </ul>
                                    <a href = "https://ogmedina.github.io/Meal-Maker/" rel="noreferrer" target="_blank"><button className="btn btn-success" type="button">
                                        <i className="fas fa-broadcast-tower"></i>
                                        Deployed Site
                                    </button></a>
                                    <a href = "https://github.com/ogmedina/Meal-Maker" rel="noreferrer" target="_blank"><button className="btn btn-dark" type="button">
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

export default ProjectOne;