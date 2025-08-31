import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name with neon glow effect */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)'
          }}
        >
          Divyansh Kumar
        </motion.h1>

        {/* Subtitle/tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide"
        >
          <span className="text-cyan-400">Full Stack Developer</span>
          <span className="text-gray-500 mx-3">|</span>
          <span className="text-purple-400">React</span>
          <span className="text-gray-500 mx-2">•</span>
          <span className="text-blue-400">Node.js</span>
          <span className="text-gray-500 mx-2">•</span>
          <span className="text-pink-400">TypeScript</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 text-lg font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg bg-transparent hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.3)';
            }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
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
