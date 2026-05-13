import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import UnifiedSkills from './components/UnifiedSkills';
import Contact from './components/Contact';
import MouseCursor from './components/MouseCursor';
import NodeBackground from './components/NodeBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <NodeBackground />
      <div className="min-h-screen selection:bg-text-primary/30 selection:text-text-primary relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <About />
        <UnifiedSkills />
        <Contact />
      </div>
      <ScrollToTop />
      <MouseCursor />
    </>
  );
}

export default App;
