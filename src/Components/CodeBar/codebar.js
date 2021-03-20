import React from 'react';
import Container from 'react-bootstrap/Container';

function CodeBar() {
    return (
        <>
        <div className="py-5">
            <Container>
                <div className="row text-center">
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className="fab fa-html5 fa-3x"></i>
                        <p>HTML5</p>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className = "fab fa-css3-alt fa-3x"></i>
                        <p>CSS3</p>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className = "fab fa-js-square fa-3x"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className = "fab fa-node fa-3x"></i>
                        <p>Node.js</p>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className = "fab fa-npm fa-3x"></i>
                        <p>NPM</p>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <i className = "fas fa-database fa-3x"></i>
                        <p>MySQL</p>
                    </div>
                </div>
            </Container>
        </div>   
        </>
    )
}

export default CodeBar;