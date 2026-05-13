import { useEffect } from 'react';
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

const titles = [
  'Divyansh Kumar | Developer Portfolio',
  'Divyansh Kumar | Full-Stack Developer',
  'Divyansh Kumar | Creative Thinker',
  'Divyansh Kumar | Building the Future',
];

function App() {
  useEffect(() => {
    let index = 0;
    const rotate = () => {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    };
    rotate();
    const interval = setInterval(rotate, 3000);
    return () => clearInterval(interval);
  }, []);

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
