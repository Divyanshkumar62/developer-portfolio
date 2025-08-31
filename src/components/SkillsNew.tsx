import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Settings, 
  Brain,
  ChevronDown
} from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code size={24} />,
    skills: [
      { name: "React", percentage: 90, icon: <Code size={16} /> },
      { name: "TypeScript", percentage: 85, icon: <Code size={16} /> },
      { name: "TailwindCSS", percentage: 85, icon: <Code size={16} /> },
      { name: "Redux", percentage: 80, icon: <Code size={16} /> }
    ]
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", percentage: 85, icon: <Server size={16} /> },
      { name: "Express", percentage: 80, icon: <Server size={16} /> },
      { name: "MongoDB", percentage: 80, icon: <Server size={16} /> },
      { name: "SQL", percentage: 75, icon: <Server size={16} /> }
    ]
  },
  {
    title: "Tools/Cloud",
    icon: <Settings size={24} />,
    skills: [
      { name: "Git", percentage: 90, icon: <Settings size={16} /> },
      { name: "GitHub", percentage: 90, icon: <Settings size={16} /> },
      { name: "Docker", percentage: 70, icon: <Settings size={16} /> },
      { name: "AWS", percentage: 65, icon: <Settings size={16} /> }
    ]
  },
  {
    title: "Other",
    icon: <Brain size={24} />,
    skills: [
      { name: "Problem-Solving", percentage: 95, icon: <Brain size={16} /> },
      { name: "DSA", percentage: 85, icon: <Brain size={16} /> },
      { name: "Clean Architecture", percentage: 80, icon: <Brain size={16} /> },
      { name: "System Design", percentage: 75, icon: <Brain size={16} /> }
    ]
  }
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
            {skill.icon}
          </div>
          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-cyan-400 font-mono font-bold">
          {skill.percentage}%
        </span>
      </div>
      
      <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative"
          style={{
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
      }}
    >
      {/* Category Header */}
      <div className="flex items-center space-x-3 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="p-3 bg-cyan-400/20 border border-cyan-400/40 rounded-lg text-cyan-400 group-hover:bg-cyan-400/30 transition-all duration-300"
          style={{
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
          }}
        >
          {category.icon}
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {category.title}
          </h3>
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-1"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            style={{
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
            }}
          />
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-1">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>

      {/* Hover Glow Effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
        }}
      />
      
      {/* Corner Accents */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-400/30 group-hover:border-purple-400/60 transition-colors duration-300" />
    </motion.div>
  );
};

const SkillsNew: React.FC = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
            }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
            }}
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise across the full development stack, 
            with proficiency levels that reflect real-world experience and continuous learning.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="flex justify-center cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2 font-light tracking-wider">GET IN TOUCH</span>
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(147, 51, 234, 0.3)',
                  '0 0 20px rgba(147, 51, 234, 0.6)',
                  '0 0 10px rgba(147, 51, 234, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-gray-500 hover:border-purple-400 transition-colors duration-300"
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNew;
