import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Management App",
    description: "Full-featured project management application with task tracking, team collaboration, and real-time updates. Built with modern web technologies for seamless project workflow.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/Project_Management_App",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Skill Forge",
    description: "Comprehensive skill development platform that helps users track learning progress, discover new skills, and connect with mentors. Features personalized learning paths and achievement system.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/Skill_Forge",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "AI Summarizer Chrome Extension",
    description: "Intelligent Chrome extension that uses AI to summarize web content, articles, and documents. Provides quick insights and key points extraction for enhanced productivity.",
    tech: ["JavaScript", "Chrome APIs", "AI/ML", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/AI_Summarizer_Chrome_Extension",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Skill Path Finder",
    description: "Smart career guidance tool that analyzes skills and suggests personalized learning paths. Helps users identify skill gaps and provides roadmaps for career advancement.",
    tech: ["React", "Node.js", "Machine Learning", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/skill-path-finder",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
    featured: false
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-400/30 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-purple-400/20 backdrop-blur-sm border border-purple-400/50 rounded-full text-purple-400 hover:bg-purple-400/30 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs font-semibold rounded-full"
            >
              Featured
            </motion.div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <motion.h3
          className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              viewport={{ once: true }}
              className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex space-x-4 pt-2">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
          >
            <Github size={16} />
            <span>Source</span>
          </motion.a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-8"
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
            A collection of projects showcasing my expertise in modern web technologies, 
            from full-stack applications to innovative solutions that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* NPM Packages & Open Source Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Open Source & NPM Packages
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Contributing to the developer community with useful tools and packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Code Comment AI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Code Comment AI
                  </h4>
                  <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                    NPM Package
                  </span>
                </div>
                <motion.a
                  href="https://github.com/Divyanshkumar62/code-comment-ai"
                  whileHover={{ scale: 1.1 }}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                AI-powered tool that automatically generates intelligent comments for your code, improving readability and documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "AI/ML", "Node.js", "NPM"].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Env Check TS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    Env Check TS
                  </h4>
                  <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    NPM Package
                  </span>
                </div>
                <motion.a
                  href="https://github.com/Divyanshkumar62/env-check-ts-npm-package"
                  whileHover={{ scale: 1.1 }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                TypeScript utility package for validating and managing environment variables with type safety and runtime checks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Node.js", "Validation", "NPM"].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 text-lg font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg bg-transparent hover:bg-cyan-400/10 transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
            }}
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
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
            className="flex flex-col items-center text-gray-500 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2 font-light tracking-wider">EXPLORE SKILLS</span>
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.3)',
                  '0 0 20px rgba(6, 182, 212, 0.6)',
                  '0 0 10px rgba(6, 182, 212, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-gray-500 hover:border-cyan-400 transition-colors duration-300"
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
