import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import UnifiedSkills from './components/UnifiedSkills';
import Contact from './components/Contact';
import MouseCursor from './components/MouseCursor';

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <UnifiedSkills />
      <Contact />
      <MouseCursor />
    </div>
  );
}

export default App;
