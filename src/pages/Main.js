//import '../App.css';
//import Navigation from '../Components/NavBar/Nav';
import Masthead from '../Components/Masthead/Masthead';
import Services from '../Components/ServBar/servbar';
import Portfolio from '../Components/Portfolio/portfolio';
import Experience from '../Components/ExpBar/experience';
import About from '../Components/About/about';
import CodeBar from '../Components/CodeBar/codebar';
import ContactBar from '../Components/ContactBar/contactbar';
//import Footer from '../Components/Footer/footer';

function Main() {
    return (
      <>
        {/* <Navigation /> */}
          <Masthead />
            <Services />
              <Portfolio />
                <Experience />
                  <About />
                    <CodeBar />
                      <ContactBar />
        {/* <Footer />     */}
      </>
    );
  }
  
  export default Main;
  