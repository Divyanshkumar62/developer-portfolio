import React, { useRef, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import {
  Code,
  Zap,
  Cpu,
  Globe,
  Brain,
  Layers,
  Sparkles,
  Rocket,
  Target,
  ChevronDown,
} from "lucide-react";



// Optimized 2D Tech Stack Visualization (Performance Friendly)
const TechStackVisualization: React.FC = () => {
  const skills = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6" },
    { name: "Node.js", icon: "🟢", color: "#68C947" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Python", icon: "🐍", color: "#FFD43B" },
  ];

  return (
    <div className="w-full h-96 md:h-[400px] bg-gradient-to-br from-slate-900/60 to-gray-900/60 rounded-xl border border-cyan-400/20 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>

      <div className="text-center text-cyan-400 p-8 relative z-10">
        {/* Central globe representation */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full flex items-center justify-center relative mx-auto mb-4">
            <Globe size={32} className="text-cyan-300" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg"
          />
        </motion.div>

        <h3 className="text-lg font-semibold text-white mb-6">Core Technologies</h3>

        {/* Simplified tech stack grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
          {skills.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 border border-cyan-400/40 transition-all duration-300"
                style={{
                  backgroundColor: `${tech.color}20`,
                }}
              >
                <span className="text-lg">{tech.icon}</span>
              </motion.div>
              <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Loading fallback for 3D globe
const GlobeFallback = () => (
  <div className="w-full h-96 md:h-[500px] bg-gray-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center">
    <div className="text-center text-cyan-400">
      <Globe size={48} className="mx-auto mb-4" />
      <p className="text-lg font-semibold">Interactive 3D Globe</p>
      <p className="text-sm text-gray-400">Loading advanced visualization...</p>
    </div>
  </div>
);

// Dynamic Storytelling Timeline Component
const StoryTimeline: React.FC = () => {
  const milestones = [
    {
      year: "2021",
      title: "Journey Begins",
      description:
        "Started coding journey with HTML, CSS, and JavaScript fundamentals.",
      icon: <Code />,
      color: "cyan",
    },
    {
      year: "2022",
      title: "Web Development",
      description:
        "Mastered React, Node.js, and built first full-stack applications.",
      icon: <Rocket />,
      color: "purple",
    },
    {
      year: "2023",
      title: "Advanced Tech Stack",
      description: "Dived into TypeScript, GraphQL, and cloud architectures.",
      icon: <Layers />,
      color: "pink",
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description:
        "Specialized in AI integrations, 3D web experiences, and modern frameworks.",
      icon: <Target />,
      color: "green",
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-6xl mx-auto px-4">
      <motion.h3
        className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-20"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Development Journey
      </motion.h3>
      <div className="relative">
        {/* Timeline line with animated gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-lg">
          <motion.div
            className="h-full bg-gradient-to-b from-cyan-400/60 to-purple-500/60 rounded-full"
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/30 rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-64 md:h-80 mb-16 md:mb-24"
            >
              {/* Enhanced Timeline dot - perfectly centered vertically */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 z-10 shadow-2xl">
                <div className="absolute inset-2 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Content card with absolute positioning for precise alignment */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-full max-w-md ${
                  isEven ? "left-0 pr-16 md:pr-20" : "right-0 pl-16 md:pl-20"
                } ${isEven ? "text-left" : "text-right"}`}
              >
                {/* Enhanced connector line from card center to timeline */}
                <div
                  className={`absolute top-1/2 -translate-y-0.5 ${
                    isEven
                      ? "right-8 md:right-4 w-16 md:w-20"
                      : "left-8 md:left-4 w-16 md:w-20"
                  } h-1 bg-gradient-to-r ${
                    isEven
                      ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                      : "bg-gradient-to-l from-cyan-400 via-purple-400 to-pink-400"
                  } rounded-full shadow-lg z-10`}
                >
                  <motion.div
                    className={`absolute top-0 ${
                      isEven ? "left-0" : "right-0"
                    } h-full bg-white/30 rounded-full`}
                    animate={{
                      width: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-400/40 rounded-2xl p-6 md:p-8 hover:border-cyan-400/60 transition-all duration-500 shadow-2xl hover:shadow-cyan-400/30 hover:shadow-2xl"
                  style={{
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.1)",
                  }}
                >
                  <div
                    className={`flex items-center justify-center mb-6 ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 5 }}
                      className={`p-4 md:p-5 bg-gradient-to-r ${
                        isEven
                          ? "from-cyan-400/20 to-purple-400/20"
                          : "from-purple-400/20 to-pink-400/20"
                      } border border-${
                        milestone.color
                      }-400/50 rounded-2xl text-${
                        milestone.color
                      }-400 shadow-lg`}
                      style={{
                        boxShadow: `0 0 20px rgba(6, 182, 212, 0.3)`,
                      }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-cyan-400 mb-4 md:mb-6 font-semibold bg-cyan-400/10 px-3 py-1 rounded-full inline-block">
                    {milestone.year}
                  </p>
                  <p
                    className={`text-gray-300 leading-relaxed pl-2 ${
                      isEven ? "text-left" : "text-right"
                    }`}
                  >
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Typewriter Hook
const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    if (!text) return;

    const chars = text.split("");
    const timeout = setTimeout(() => {
      let currentIndex = 0;

      const timer = setInterval(() => {
        if (currentIndex < chars.length) {
          setDisplayText((prev) => prev + chars[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// Typewriter Component
const TypewriterText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}> = ({ text, className, delay = 0, speed = 50, cursor = false }) => {
  const { displayText, isComplete } = useTypewriter(text, speed, delay);
  return (
    <span className={className}>
      {displayText}
      {cursor && !isComplete && (
        <span className="animate-pulse text-cyan-400 ml-1">|</span>
      )}
    </span>
  );
};

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

// Main About Component
const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
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
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden py-20"
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
          <div className="max-w-4xl mx-auto text-center space-y-16">
            {/* Optimized Tech Stack Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <TechStackVisualization />
              <motion.p
                className="text-xl text-gray-300 mt-8 leading-relaxed max-w-2xl mx-auto"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <TypewriterText
                  text="Core technologies that power my development stack"
                  className="text-cyan-400 font-semibold"
                  delay={1000}
                  speed={80}
                />
                {
                  " - the essential tools and frameworks I master."
                }
              </motion.p>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Crafting Digital
                <br />
                <span className="relative">
                  Experiences
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>
            </motion.div>

            {/* Inspiring Description with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <TypewriterText
                  text="I'm a visionary developer"
                  className="text-cyan-400 font-semibold"
                  delay={1500}
                  speed={80}
                  cursor
                />
                {" who transforms "}
                <span className="text-purple-400 font-semibold">
                  complex ideas
                </span>
                {" into "}
                <span className="text-pink-400 font-semibold">
                  elegant digital solutions
                </span>
                {
                  " with a passion for cutting-edge technology and user-centric design."
                }
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <TypewriterText
                  text="Every line of code I write is crafted with precision and innovation,"
                  className="text-cyan-300"
                  delay={3000}
                  speed={60}
                />
                {" building bridges between "}
                <span className="text-purple-300">imagination and reality</span>
                {" through the power of modern web technologies."}
              </motion.p>
            </motion.div>

            {/* Dynamic Storytelling Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <StoryTimeline />
            </motion.div>

            {/* Mobile Timeline (Simplified) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:hidden"
            >
              <div className="space-y-6">
                <motion.h3
                  className="text-2xl font-bold text-center text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Development Journey
                </motion.h3>
                <div className="space-y-4">
                  {[
                    {
                      year: "2021",
                      title: "Journey Begins",
                      description:
                        "Started coding journey with HTML, CSS, and JavaScript fundamentals.",
                    },
                    {
                      year: "2022",
                      title: "Web Development",
                      description:
                        "Mastered React, Node.js, and built first full-stack applications.",
                    },
                    {
                      year: "2023",
                      title: "Advanced Tech",
                      description:
                        "Dived into TypeScript, GraphQL, and cloud architectures.",
                    },
                    {
                      year: "2024",
                      title: "Innovation Focus",
                      description:
                        "Specialized in AI integrations and 3D web experiences.",
                    },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {milestone.title}
                        </h4>
                        <span className="text-sm text-cyan-400">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
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
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="text-cyan-400" size={32} />
                </motion.div>
              </div>
              <blockquote className="text-lg md:text-xl text-center text-gray-300 italic leading-relaxed">
                <TypewriterText
                  text="Innovation distinguishes between a follower and a leader. I don't just build applications - I architect digital experiences that inspire, engage, and transform how people interact with technology."
                  delay={5000}
                  speed={40}
                />
              </blockquote>
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
                { number: "∞", label: "Lines of Code" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.5 }}
                    viewport={{ once: true }}
                  >
                    <TypewriterText
                      text={stat.number}
                      delay={8000 + index * 300}
                      speed={100}
                    />
                  </motion.div>
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
