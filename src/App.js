import './App.css';
import Navigation from './Components/NavBar/Nav';
import Masthead from './Components/Masthead/Masthead';
import Services from './Components/ServBar/servbar';
import Portfolio from './Components/Portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Masthead />
          <Services />
    
    </div>
  );
}

export default App;
