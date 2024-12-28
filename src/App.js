import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import ProjectShow from './components/ProjectShow/ProjectShow';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectShow />} />
      </Routes>
    </div>
  );
}

export default App;
