import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { SparklesCore } from './ui/sparkles';
import { TypewriterEffect } from './ui/typewriter-effect';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameWords = [
    { text: "Divyansh", className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" },
    { text: "Kumar", className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold mb-6"
          style={{
            textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)'
          }}
        >
          <TypewriterEffect words={nameWords} className="inline text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-extrabold" />
        </motion.h1>

        {/* Sparkles effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-2xl mx-auto mb-8"
        >
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[3px] w-1/2 blur-sm" />

          {/* Core sparkles */}
          <div className="relative w-full h-24">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={300}
              className="w-full h-full"
              particleColor="#ffffff"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-transparent to-transparent [mask-image:radial-gradient(200px_100px_at_top,white_40%,transparent_70%)]"></div>
          </div>
        </motion.div>

        {/* Subtitle/tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide max-w-3xl mx-auto"
        >
          Technology evolves rapidly, and so do I. Currently diving deeper into
          <span className="text-cyan-400"> AI/ML integrations</span>,
          <span className="text-purple-400"> advanced GPU acceleration</span>,
          <span className="text-pink-400"> quantum computing concepts</span>, and
          <span className="text-blue-400"> next-generation web experiences</span> with WebAssembly and edge computing.
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/Divyanshkumar62/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 text-cyan-400 border border-cyan-400 rounded-lg bg-transparent hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-110"
            style={{
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.2)';
            }}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-1-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 text-cyan-400 border border-cyan-400 rounded-lg bg-transparent hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-110"
            style={{
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.2)';
            }}
          >
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-light tracking-wider">SCROLL</span>
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 10px rgba(34, 211, 238, 0.3)',
                '0 0 20px rgba(34, 211, 238, 0.6)',
                '0 0 10px rgba(34, 211, 238, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-gray-400 hover:border-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
