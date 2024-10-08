import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import Home  from './components/pages/Home';
import Resume  from './components/pages/resume';
import Skills from './components/pages/skills';
import Projects from './components/pages/projects';
import Footer from './components/pages/footer';
import ScrollToTop from './components/pages/scrolltop';

function App() {
  return (
    <div className="App">
    <Router>
    <ScrollToTop />
     <NavBar /> 
     <Routes> 
        <Route path="/" element={<Home />} />  {/* Home Page Route */}
        <Route path="/resume" element={<Resume />} />  {/* Resume Page Route */}
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
