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
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden bg-surface-strong/30 hover:border-text-primary/30 transition-all duration-300 group shimmer-container flex flex-col h-full"
    >
      <div className="shimmer-effect" />
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base/90 to-transparent opacity-80" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:translate-x-1 transition-transform">
          {project.title}
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-surface-muted/30 text-text-primary rounded-full border border-text-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors text-sm font-medium group/link"
          >
            View Live <ExternalLink size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
          <a
            href={project.githubUrl}
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl inline-block relative">
            Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-text-primary/30 rounded-full" />
          </h2>
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
