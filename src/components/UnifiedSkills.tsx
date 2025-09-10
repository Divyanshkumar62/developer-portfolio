import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Server,
  Settings,
  Brain,
  ChevronDown,
  Zap,
  Globe,
  Layers,
  Database
} from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  category: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

// Enhanced skill connections for neural network visualization
interface SkillConnection {
  from: string;
  to: string;
  strength: number;
}

const skillsData: Skill[] = [
  { name: "React", percentage: 95, icon: <Code size={16} />, category: "Frontend", proficiency: "Expert" },
  { name: "TypeScript", percentage: 90, icon: <Code size={16} />, category: "Language", proficiency: "Expert" },
  { name: "Node.js", percentage: 88, icon: <Server size={16} />, category: "Backend", proficiency: "Expert" },
  { name: "MongoDB", percentage: 85, icon: <Database size={16} />, category: "Database", proficiency: "Advanced" },
  { name: "Next.js", percentage: 85, icon: <Layers size={16} />, category: "Frontend", proficiency: "Advanced" },
  { name: "Tailwind CSS", percentage: 92, icon: <Code size={16} />, category: "Frontend", proficiency: "Expert" },
  { name: "Python", percentage: 82, icon: <Code size={16} />, category: "Language", proficiency: "Advanced" },
  { name: "AWS", percentage: 78, icon: <Globe size={16} />, category: "Cloud", proficiency: "Advanced" },
  { name: "Docker", percentage: 80, icon: <Settings size={16} />, category: "DevOps", proficiency: "Advanced" },
  { name: "GraphQL", percentage: 75, icon: <Zap size={16} />, category: "API", proficiency: "Advanced" },
  { name: "Three.js", percentage: 78, icon: <Layers size={16} />, category: "Graphics", proficiency: "Advanced" },
  { name: "Machine Learning", percentage: 70, icon: <Brain size={16} />, category: "AI", proficiency: "Intermediate" },
  { name: "PostgreSQL", percentage: 85, icon: <Database size={16} />, category: "Database", proficiency: "Advanced" },
  { name: "Git", percentage: 95, icon: <Settings size={16} />, category: "DevOps", proficiency: "Expert" },
  { name: "Jest", percentage: 85, icon: <Zap size={16} />, category: "Testing", proficiency: "Advanced" },
  { name: "CI/CD", percentage: 80, icon: <Zap size={16} />, category: "DevOps", proficiency: "Advanced" }
];

// Skill connections for neural network
const skillConnections: SkillConnection[] = [
  { from: "React", to: "TypeScript", strength: 0.9 },
  { from: "TypeScript", to: "Node.js", strength: 0.8 },
  { from: "React", to: "Next.js", strength: 0.8 },
  { from: "Next.js", to: "Tailwind CSS", strength: 0.7 },
  { from: "Node.js", to: "MongoDB", strength: 0.7 },
  { from: "Node.js", to: "PostgreSQL", strength: 0.7 },
  { from: "Node.js", to: "GraphQL", strength: 0.6 },
  { from: "Node.js", to: "AWS", strength: 0.8 },
  { from: "AWS", to: "Docker", strength: 0.7 },
  { from: "Docker", to: "CI/CD", strength: 0.6 },
  { from: "CI/CD", to: "Git", strength: 0.8 },
  { from: "React", to: "Three.js", strength: 0.5 },
  { from: "Three.js", to: "TypeScript", strength: 0.6 },
  { from: "Python", to: "Machine Learning", strength: 0.6 },
  { from: "Git", to: "Jest", strength: 0.5 }
];

// Neural Network Node Component
const NetworkNode: React.FC<{
  skill: Skill;
  connections: SkillConnection[];
  allSkills: Skill[];
  index: number;
}> = ({ skill, connections, allSkills, index }) => {
  const connectedSkills = connections
    .filter(conn => conn.from === skill.name || conn.to === skill.name)
    .map(conn => conn.from === skill.name ? conn.to : conn.from);

  const getSkillPosition = (skillName: string) => {
    const skillIndex = allSkills.findIndex(s => s.name === skillName);
    const angle = (skillIndex / allSkills.length) * 2 * Math.PI;
    const radius = 150 + (skill.percentage / 100) * 80;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const proficiencyColors = {
    Beginner: 'rgb(252, 165, 165)', // red
    Intermediate: 'rgb(251, 191, 36)', // yellow
    Advanced: 'rgb(34, 197, 94)', // green
    Expert: 'rgb(6, 182, 212)' // cyan
  };

  const nodePos = getSkillPosition(skill.name);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.2 }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `calc(50% + ${nodePos.x}px)`,
        top: `calc(50% + ${nodePos.y}px)`
      }}
    >
      {/* Neural Network Connections */}
      <svg
        className="absolute inset-0 w-[300px] h-[300px] pointer-events-none"
        style={{ left: -150, top: -150 }}
      >
        {connectedSkills.map((connectedSkill) => {
          const connectionStrength = connections.find(
            c => (c.from === skill.name && c.to === connectedSkill) ||
                 (c.from === connectedSkill && c.to === skill.name)
          )?.strength || 0.3;

          const connectedPos = getSkillPosition(connectedSkill);
          const opacity = 0.3 + connectionStrength * 0.7;

          return (
            <motion.line
              key={connectedSkill}
              x1={150 + nodePos.x}
              y1={150 + nodePos.y}
              x2={150 + connectedPos.x}
              y2={150 + connectedPos.y}
              stroke={`rgba(6, 182, 212, ${opacity})`}
              strokeWidth={connectionStrength * 3}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>

      {/* Skill Node */}
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            borderWidth: [2, 4, 2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
          style={{
            background: `radial-gradient(circle, ${proficiencyColors[skill.proficiency]}22 0%, transparent 70%)`
          }}
        />

        {/* Main node */}
        <div
          className="w-16 h-16 rounded-full border border-cyan-400/50 flex items-center justify-center backdrop-blur-sm shadow-lg"
          style={{
            background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))`,
            boxShadow: `0 0 20px ${proficiencyColors[skill.proficiency]}40`
          }}
        >
          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
            {skill.icon}
          </div>
        </div>

        {/* Skill info tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        >
          <div className="text-white text-sm font-semibold">{skill.name}</div>
          <div className="text-cyan-400 text-xs">{skill.percentage}%</div>
          <div className="text-gray-400 text-xs">{skill.proficiency}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyan-400/30" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Unified Skill Category Card with Progress Bars
const SkillCategoryCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  gradient: string;
  delay: number;
}> = ({ title, icon, skills, gradient, delay }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
      style={{
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 bg-cyan-400/20 border border-cyan-400/40 rounded-lg text-cyan-400"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
            }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{skills.length} skills</p>
          </div>
        </div>
      </div>

      {/* Skills with Progress Bars */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="group"
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
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-sm font-mono">
                  {skill.percentage}%
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${skill.proficiency === 'Expert' ? 'bg-green-500/20 text-green-400' : skill.proficiency === 'Advanced' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {skill.proficiency}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, delay: delay + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-cyan-400/60 to-purple-500/60 rounded-full relative overflow-hidden"
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Unified Skills Component
const UnifiedSkills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const neuralNetworkRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Group skills by category for category cards
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort categories by number of skills and importance
  const categoryOrder = ['Frontend', 'Language', 'Backend', 'Database', 'DevOps', 'Graphics', 'AI', 'API', 'Cloud', 'Testing'];
  const sortedCategories = categoryOrder.filter(cat => skillsByCategory[cat]).concat(
    Object.keys(skillsByCategory).filter(cat => !categoryOrder.includes(cat))
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

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
            style={{ textShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Interactive neural network visualization of core competencies combined with detailed skill progression indicators.
          </motion.p>
        </motion.div>

        {/* Neural Network Visualization */}
        <motion.div
          ref={neuralNetworkRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[600px] mb-20 relative"
        >
          <div className="absolute inset-0">
            {skillsData.map((skill, index) => (
              <NetworkNode
                key={skill.name}
                skill={skill}
                connections={skillConnections}
                allSkills={skillsData}
                index={index}
              />
            ))}
          </div>

          {/* Central hub info */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <motion.div
              className="w-32 h-32 rounded-full border-4 border-cyan-400 bg-gray-900/50 backdrop-blur-xl flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(6, 182, 212, 0.3)',
                  '0 0 60px rgba(6, 182, 212, 0.6)',
                  '0 0 30px rgba(6, 182, 212, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <Brain className="text-cyan-400 mx-auto mb-1" size={24} />
                <div className="text-xs text-cyan-400 font-semibold">Tech Network</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Unified Skill Categories Grid with Progress Bars */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {sortedCategories.map((category, index) => (
            <SkillCategoryCard
              key={category}
              title={category}
              icon={
                category === 'Frontend' ? <Code /> :
                category === 'Backend' ? <Server /> :
                category === 'Database' ? <Database /> :
                category === 'Cloud' ? <Globe /> :
                category === 'Language' ? <Code /> :
                category === 'Graphics' ? <Layers /> :
                category === 'AI' ? <Brain /> :
                category === 'DevOps' ? <Settings /> :
                category === 'API' ? <Zap /> :
                category === 'Testing' ? <Zap /> :
                <Settings />
              }
              skills={skillsByCategory[category]}
              gradient="from-cyan-400 to-blue-500"
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Enhanced Expert Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-cyan-400/20 border border-cyan-400/40 rounded-lg text-cyan-400 mr-4"
            >
              <Brain size={24} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">Continuous Evolution</h3>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto text-center">
            Technology evolves rapidly, and so do I. Currently diving deeper into AI/ML integrations,
            advanced GPU acceleration, quantum computing concepts, and next-generation web experiences
            with WebAssembly and edge computing.
          </p>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "95%", label: "Frontend", icon: <Code size={20} /> },
            { value: "88%", label: "Backend", icon: <Server size={20} /> },
            { value: "80%", label: "DevOps", icon: <Settings size={20} /> },
            { value: "70%", label: "AI/ML", icon: <Brain size={20} /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Smooth scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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

export default UnifiedSkills;
