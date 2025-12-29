import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{
        paddingTop: '120px',
        paddingBottom: '40px',
        textAlign: 'center',
        fontSize: '22px'
      }}>
        This site is outdated. Check out my new personal website at{' '}
        <a 
          href="https://gavinsong.ca" 
          style={{
            color: '#0066cc',
            textDecoration: 'underline'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          gavinsong.ca
        </a>
      </div>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
