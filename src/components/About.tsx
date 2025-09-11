import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Code,
  Globe,
  Layers,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";





// Dynamic Storytelling Timeline Component - Responsive Optimized
const StoryTimeline: React.FC = () => {
  const milestones = [
    {
      year: "2022",
      title: "Journey Begins",
      description:
        "Started coding journey with HTML, CSS, and JavaScript fundamentals.",
      icon: <Code />,
      color: "cyan",
    },
    {
      year: "2023",
      title: "Web Development",
      description:
        "Mastered React, Node.js, and built first full-stack applications.",
      icon: <Rocket />,
      color: "purple",
    },
    {
      year: "2024",
      title: "Advanced Tech Stack",
      description: "Dived into TypeScript, Docker, and Learned about testing.",
      icon: <Layers />,
      color: "pink",
    },
    {
      year: "2025",
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
        className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12 md:mb-20"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Development Journey
      </motion.h3>

      {/* Desktop Timeline - Hidden on Mobile */}
      <div className="hidden md:block relative">
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

              {/* Content card with responsive positioning */}
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

      {/* Mobile Timeline - Vertical Stack */}
      <div className="md:hidden space-y-6">
        <div className="relative">
          {/* Vertical timeline line on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-4"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 shadow-xl"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-cyan-400/20 border border-cyan-400/40 rounded-lg text-cyan-400"
                    >
                      {milestone.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-white">{milestone.title}</h4>
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Stats Component
const StatsCard: React.FC<{
  stat: {
    number: string | number | undefined;
    label: string;
  };
  index: number;
  fallbackNumber?: string;
}> = ({ stat, index, fallbackNumber = "15+" }) => {
  let safeNumber = stat.number;
  if (safeNumber === undefined) safeNumber = fallbackNumber;
  else if (typeof safeNumber !== 'string') safeNumber = `${safeNumber}+`;

  return (
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
        {stat.number === undefined ? fallbackNumber : typeof stat.number !== 'string' ? `${stat.number}+` : stat.number}
      </motion.div>
      <div className="text-gray-400 text-sm font-medium">
        {stat.label}
      </div>
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
            {/* The Digital Craftsman - Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Catchy Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  🎯 THE DIGITAL CRAFTSMAN
                </motion.h2>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-cyan-400 font-semibold">
                  I forge digital dreams into tangible reality,
                </span>{" "}
                <span className="text-gray-300">transforming</span>{" "}
                <span className="text-purple-400 font-semibold">complex visions</span>{" "}
                <span className="text-gray-300">
                  into intuitive experiences that captivate and inspire users
                  worldwide.
                </span>
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-cyan-300">Every character I type carries purpose,</span>{" "}
                <span className="text-gray-400">
                  every algorithm I architect bridges the gap between imagination and
                  innovation, crafting solutions that don't just work—they resonate.
                </span>
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
                Innovation distinguishes between a follower and a leader. I don't just build applications - I architect digital experiences that inspire, engage, and transform how people interact with technology.
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
                { number: "15+", label: "Projects Built" },
                { number: "3+", label: "Years of hands-on Experience" },
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
{stat.number === undefined ? fallbackNumber : typeof stat.number !== 'string' ? `${stat.number}+` : stat.number}
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
