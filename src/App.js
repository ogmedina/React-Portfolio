import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import Navigation from './Components/NavBar/Nav';
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch"
// import Masthead from './Components/Masthead/Masthead';
//import Services from './Components/ServBar/servbar';
// import Portfolio from './Components/Portfolio/portfolio';
// import Experience from './Components/ExpBar/experience';
// import About from './Components/About/about';
// import CodeBar from './Components/CodeBar/codebar';
// import ContactBar from './Components/ContactBar/contactbar';
// import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
      
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        
        <Route component={NoMatch} />
        
      </Switch>
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