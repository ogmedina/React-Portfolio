import React from "react";

const NoMatch = () => {
  return (
      <>      
        <br />
        <br />
        <h1>404 Page Not Found</h1>
        <br />
        <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">🙄</span>        
        </h1>
        <br />
        <br />
        <a href = "/"><button className="btn btn-danger" type="button">
        <i className="far fa-hand-point-left mr-3"></i>
        Go Back
        </button></a>        
        <br />
        <br />
        <br />    
    </>
  );
};

export default NoMatch;