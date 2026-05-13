import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center px-6">
        {/* Greeting - mb-X controls space below */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text-tertiary text-lg md:text-xl font-medium mb-4"
        >
          Hello! I'm
        </motion.p>

        {/* Name - mb-X controls space below */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-text-primary mb-6 tracking-tight"
        >
          Divyansh Kumar
        </motion.h1>

        {/* Subtitle + underline - mb-X controls space to buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative inline-block mb-20"
        >
          <p className="text-xl md:text-2xl text-text-secondary font-light">
            Full-Stack Developer & Creative Thinker
          </p>
          {/* Underline: w-X controls width, h-X controls thickness */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-text-primary/50 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-primary flex items-center gap-2 group w-full sm:w-auto px-8 py-4 text-lg">
            <FileText size={20} className="transition-transform group-hover:scale-110" />
            View Resume
          </button>
          <button className="btn-outline flex items-center gap-2 group w-full sm:w-auto px-8 py-4 text-lg">
            <Mail size={20} className="transition-transform group-hover:scale-110" />
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
