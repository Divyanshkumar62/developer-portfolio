import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Palette, 
  TestTube, 
  Settings, 
  ChevronDown,
  Layers,
  Globe,
  Cpu,
  Zap,
  Brain
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    color: "cyan",
    skills: [
      { name: "React", level: 95, icon: <Code size={16} />, color: "cyan" },
      { name: "TypeScript", level: 90, icon: <Cpu size={16} />, color: "blue" },
      { name: "Next.js", level: 85, icon: <Layers size={16} />, color: "purple" },
      { name: "Tailwind CSS", level: 92, icon: <Palette size={16} />, color: "teal" },
      { name: "Vue.js", level: 80, icon: <Code size={16} />, color: "green" },
      { name: "Three.js", level: 75, icon: <Zap size={16} />, color: "orange" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    color: "purple",
    skills: [
      { name: "Node.js", level: 90, icon: <Server size={16} />, color: "green" },
      { name: "Express.js", level: 88, icon: <Globe size={16} />, color: "gray" },
      { name: "Python", level: 82, icon: <Code size={16} />, color: "yellow" },
      { name: "GraphQL", level: 78, icon: <Database size={16} />, color: "pink" },
      { name: "REST APIs", level: 92, icon: <Globe size={16} />, color: "blue" },
      { name: "Microservices", level: 75, icon: <Layers size={16} />, color: "indigo" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: <Database size={24} />,
    color: "blue",
    skills: [
      { name: "PostgreSQL", level: 85, icon: <Database size={16} />, color: "blue" },
      { name: "MongoDB", level: 88, icon: <Database size={16} />, color: "green" },
      { name: "Redis", level: 80, icon: <Zap size={16} />, color: "red" },
      { name: "AWS", level: 82, icon: <Globe size={16} />, color: "orange" },
      { name: "Docker", level: 85, icon: <Settings size={16} />, color: "blue" },
      { name: "Firebase", level: 78, icon: <Zap size={16} />, color: "yellow" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <Settings size={24} />,
    color: "green",
    skills: [
      { name: "Git", level: 95, icon: <Settings size={16} />, color: "orange" },
      { name: "CI/CD", level: 80, icon: <Zap size={16} />, color: "green" },
      { name: "Linux", level: 85, icon: <Cpu size={16} />, color: "gray" },
      { name: "Webpack", level: 78, icon: <Settings size={16} />, color: "blue" },
      { name: "Vite", level: 88, icon: <Zap size={16} />, color: "purple" },
      { name: "Nginx", level: 75, icon: <Server size={16} />, color: "green" }
    ]
  },
  {
    title: "Testing & Quality",
    icon: <TestTube size={24} />,
    color: "red",
    skills: [
      { name: "Jest", level: 85, icon: <TestTube size={16} />, color: "red" },
      { name: "Cypress", level: 80, icon: <TestTube size={16} />, color: "green" },
      { name: "Unit Testing", level: 88, icon: <TestTube size={16} />, color: "blue" },
      { name: "Integration Testing", level: 82, icon: <TestTube size={16} />, color: "purple" },
      { name: "ESLint", level: 90, icon: <Settings size={16} />, color: "yellow" },
      { name: "Prettier", level: 92, icon: <Palette size={16} />, color: "pink" }
    ]
  },
  {
    title: "Emerging Tech",
    icon: <Brain size={24} />,
    color: "pink",
    skills: [
      { name: "AI Integration", level: 75, icon: <Brain size={16} />, color: "purple" },
      { name: "Machine Learning", level: 70, icon: <Brain size={16} />, color: "blue" },
      { name: "WebAssembly", level: 65, icon: <Cpu size={16} />, color: "orange" },
      { name: "Blockchain", level: 60, icon: <Layers size={16} />, color: "yellow" },
      { name: "PWA", level: 85, icon: <Globe size={16} />, color: "green" },
      { name: "WebRTC", level: 70, icon: <Globe size={16} />, color: "red" }
    ]
  }
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`text-${skill.color}-400 group-hover:text-${skill.color}-300 transition-colors duration-300`}>
            {skill.icon}
          </div>
          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-500 font-mono">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full relative`}
          style={{
            boxShadow: `0 0 10px rgba(6, 182, 212, 0.5)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
    >
      {/* Category Header */}
      <div className="flex items-center space-x-3 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`p-3 bg-${category.color}-400/20 border border-${category.color}-400/30 rounded-lg text-${category.color}-400`}
        >
          {category.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {category.title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Skills: React.FC = () => {
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

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise across the full development stack, 
            from cutting-edge frontend frameworks to scalable backend architectures.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and methodologies to stay at the forefront of web development. 
            Currently diving deeper into AI integrations, WebAssembly, and advanced cloud architectures.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 cursor-pointer"
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

export default Skills;
