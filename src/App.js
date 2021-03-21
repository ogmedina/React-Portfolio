import './App.css';
import { HashRouter, Route, Switch} from "react-router-dom";
import Navigation from './Components/NavBar/Nav';
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import ProjectOne from "./pages/Project1";
// import Masthead from './Components/Masthead/Masthead';
//import Services from './Components/ServBar/servbar';
// import Portfolio from './Components/Portfolio/portfolio';
// import Experience from './Components/ExpBar/experience';
// import About from './Components/About/about';
// import CodeBar from './Components/CodeBar/codebar';
// import ContactBar from './Components/ContactBar/contactbar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <HashRouter hashType="noslash" basename="/React-Portfolio">
    <div className="App">
    <Navigation />
      <Switch>
        
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/React-Portfolio/projectone" component={ProjectOne}/>
        
        <Route component={NoMatch} />
        
      </Switch>
    <Footer />
    </div>
    </HashRouter>
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