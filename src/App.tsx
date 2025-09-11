import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import UnifiedSkills from './components/UnifiedSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <UnifiedSkills />
      <Contact />
    </div>
  );
}

export default App;
