import React from "react";
//import Container from "react-bootstrap/Container";
import Navigation from '../Components/NavBar/Nav';
import Masthead from '../Components/Masthead/Masthead';
import Footer from '../Components/Footer/footer';



const NoMatch = () => {
  return (
      <>
    <Navigation />
        <Masthead />
        <br />
        <br />
        <h1>404 Page Not Found</h1>
        <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
                
        </span>
        
        </h1>
        
        <br />
        <br />
        <br />
    <Footer />
    </>
  );
};

export default NoMatch;