import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Footer from './Components/Footer/footer';

function App() {
  return (
    <HashRouter>
    <div className="App">    
      <Switch>        
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />         
        <Route exact component={NoMatch} />    
      </Switch>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;