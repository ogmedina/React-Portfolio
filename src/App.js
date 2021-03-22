import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import ProjectOne from "./pages/Project1";
import ProjectTwo from "./pages/Project2";
import ProjectThree from "./pages/Project3";
import ProjectFour from "./pages/Project4";
import ProjectFive from "./pages/Project5";
import ProjectSix from "./pages/Project6";
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
    <div className="App">    
      <Switch>        
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/projectone" component={ProjectOne} />
        <Route exact path="/projecttwo" component={ProjectTwo} /> 
        <Route exact path="/projectthree" component={ProjectThree} /> 
        <Route exact path="/projectfour" component={ProjectFour} /> 
        <Route exact path="/projectfive" component={ProjectFive} /> 
        <Route exact path="/projectsix" component={ProjectSix} />         
        <Route exact component={NoMatch} />    
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Navigation />
//         <Masthead />
//           <Services />
//             <Portfolio />
//               <Experience />
//                 <About />
//                   <CodeBar />
//                     <ContactBar />
//       <Footer />    
//     </div>
//     </Router>
//   );
// }