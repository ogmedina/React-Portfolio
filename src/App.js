import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
// import Blog from "./pages/blog";
import NoMatch from "./pages/NoMatch";
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
    <div className="App">    
      <Switch>        
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route exact component={NoMatch} />    
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;