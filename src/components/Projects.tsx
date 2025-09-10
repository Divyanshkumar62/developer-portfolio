import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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
    title: "Project Pilot",
    description: "Comprehensive project management platform with team collaboration, task tracking, and real-time updates for efficient workflow management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Express", "Redux"],
    liveUrl: "https://project-pilot-wine.vercel.app/",
    githubUrl: "https://github.com/Divyanshkumar62/project-pilot",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Skill Forge",
    description: "Full-stack learning management platform with personalized skill development paths, progress tracking, and mentor connections.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Jest", "Recharts"],
    liveUrl: "https://skill-forge-gamma.vercel.app/login",
    githubUrl: "https://github.com/Divyanshkumar62/Skill_Forge",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Smart Digest",
    description: "AI-powered content summarization system that processes and analyzes text to provide concise insights and key information extraction.",
    tech: ["DOM Manipulation", "AI", "Manifest", "React", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/smart-digest",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "AI Interview System",
    description: "Intelligent interview platform with AI-driven question generation, candidate assessment, and automated feedback systems.",
    tech: ["React", "Python", "AI/ML", "FastAPI", "WebRTC"],
    liveUrl: "#",
    githubUrl: "https://github.com/Divyanshkumar62/ai-interview-system",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
    featured: false
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a
              href={project.liveUrl}
              className="p-3 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-400/30 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              className="p-3 bg-purple-400/20 backdrop-blur-sm border border-purple-400/50 rounded-full text-purple-400 hover:bg-purple-400/30 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-800/60 border border-gray-700 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <Github size={16} />
            <span className="text-sm">Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Where <span className="text-cyan-400 font-semibold">cutting-edge algorithms</span> meet
            <span className="text-purple-400 font-semibold"> human creativity</span> to forge
            <span className="text-pink-400 font-semibold"> revolutionary solutions</span> that redefine what's possible.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Open Source & NPM Packages Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Open Source & NPM Packages
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Code Commentor */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1 hover:text-purple-400 transition-colors duration-300">
                    Code Commentor
                  </h4>
                  <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                    NPM Package
                  </span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.npmjs.com/package/codecommentor"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/Divyanshkumar62/code-commentor"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                An AI-powered tool that automatically generates intelligent and
                contextual code comments.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  Static Analysis
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  NPM
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  CLI
                </span>
              </div>
            </div>

            {/* Env Check TS */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1 hover:text-cyan-400 transition-colors duration-300">
                    Env Check TS
                  </h4>
                  <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                    NPM Package
                  </span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.npmjs.com/package/env-check-ts?activeTab=readme"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/Divyanshkumar62/env-check-ts-npm-package"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                TypeScript utility package for environment variable validation
                with runtime type safety.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  Validation
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  NPM
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded-full">
                  Developer tool
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
