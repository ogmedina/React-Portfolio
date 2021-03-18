import './App.css';
import Navigation from './Components/NavBar/Nav';
import Masthead from './Components/Masthead/Masthead';
import Services from './Components/ServBar/servbar';
import Portfolio from './Components/Portfolio/portfolio';
import Experience from './Components/ExpBar/experience';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Masthead />
          <Services />
            <Portfolio />
              <Experience />
    
    </div>
  );
}

export default App;
