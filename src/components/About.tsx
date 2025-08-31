import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Code, Zap, Cpu, Globe, Brain, Layers, Sparkles, Rocket, Target } from 'lucide-react';

// Skill Tag Component
interface SkillTagProps {
  icon: React.ReactNode;
  label: string;
  delay: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ icon, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
      }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:border-cyan-400/60"
    >
      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const skills = [
    { icon: <Layers size={20} />, label: "Full-Stack", delay: 0.1 },
    { icon: <Code size={20} />, label: "React/Next.js", delay: 0.2 },
    { icon: <Globe size={20} />, label: "Node.js", delay: 0.3 },
    { icon: <Cpu size={20} />, label: "TypeScript", delay: 0.4 },
    { icon: <Zap size={20} />, label: "Performance", delay: 0.5 },
    { icon: <Brain size={20} />, label: "AI/ML", delay: 0.6 },
    { icon: <Rocket size={20} />, label: "DevOps", delay: 0.7 },
    { icon: <Target size={20} />, label: "UX/UI", delay: 0.8 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
              >
                Crafting Digital
                <br />
                <span className="relative">
                  Experiences
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>
            </motion.div>

            {/* Inspiring Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I'm a <span className="text-cyan-400 font-semibold">visionary developer</span> who transforms 
                complex ideas into <span className="text-purple-400 font-semibold">elegant digital solutions</span>. 
                With a passion for cutting-edge technology and user-centric design.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Every line of code I write is crafted with <span className="text-cyan-300">precision</span> and 
                <span className="text-purple-300"> innovation</span>, building bridges between imagination and reality 
                through the power of modern web technologies.
              </p>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-cyan-400" size={32} />
                </motion.div>
              </div>
              <blockquote className="text-lg md:text-xl text-center text-gray-300 italic leading-relaxed">
                "Innovation distinguishes between a follower and a leader. I don't just build applications—
                I architect <span className="text-cyan-400 font-semibold">digital experiences</span> that 
                inspire, engage, and transform how people interact with technology."
              </blockquote>
            </motion.div>

            {/* Enhanced Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <SkillTag
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    delay={skill.delay}
                  />
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "50+", label: "Projects Built" },
                { number: "3+", label: "Years Experience" },
                { number: "∞", label: "Lines of Code" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
