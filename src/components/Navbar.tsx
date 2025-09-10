import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: 'Home', href: '#hero', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'About', href: '#about', gradient: 'from-purple-400 to-pink-500' },
    { name: 'Projects', href: '#projects', gradient: 'from-pink-400 to-red-500' },
    { name: 'Skills', href: '#skills', gradient: 'from-green-400 to-cyan-500' },
    { name: 'Contact', href: '#contact', gradient: 'from-yellow-400 to-orange-500' },
  ];

  // Mouse tracking for glow effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = navbarRef.current?.getBoundingClientRect();
    if (rect) {
      setMouseX(e.clientX - rect.left);
    }
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / totalHeight) * 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      ref={navbarRef}
      onMouseMove={handleMouseMove}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/25 backdrop-blur-3xl border-b border-white/10 shadow-2xl'
          : 'bg-black/5 backdrop-blur-sm'
      }`}
    >
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix-style falling particles */}
        {isScrolled && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: -10,
            }}
            animate={{
              y: [0, window.innerHeight + 20],
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}

        {/* Holographic grid overlay */}
        {isScrolled && (
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0 0', '40px 40px'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Mouse tracking glow effect */}
        {isScrolled && mouseX > 0 && (
          <motion.div
            className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
            style={{
              left: mouseX - 40,
              filter: 'blur(8px)'
            }}
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Dynamic gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-purple-400/3 to-pink-400/3"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-yellow-400 rounded-r-full"
        style={{ width: `${scrollProgress}%` }}
        animate={{
          boxShadow: [
            '0 0 8px rgba(6, 182, 212, 0.4)',
            '0 0 16px rgba(6, 182, 212, 0.8)',
            '0 0 8px rgba(6, 182, 212, 0.4)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Magnetic Field Effect */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 border border-cyan-400/15 rounded-b-2xl"
          animate={{
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.15)',
              '0 0 40px rgba(6, 182, 212, 0.3)',
              '0 0 20px rgba(6, 182, 212, 0.15)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}

      {/* Navigation Border Glow */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 rounded-b-2xl"
          style={{
            boxShadow: 'inset 0 1px 0 rgba(6, 182, 212, 0.1), inset 0 1px 2px rgba(6, 182, 212, 0.05)'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo placeholder - removed */}
          <div className="w-0"></div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 group overflow-hidden ${
                    isActive
                      ? 'text-white scale-105'
                      : 'text-gray-300 hover:text-white hover:scale-105'
                  }`}
                  whileHover={{
                    y: -2,
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  {/* Background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated border gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ring-1 ring-inset transition-all duration-300 ${
                      isActive
                        ? `ring-${item.gradient.split('-')[1]}-400/50`
                        : 'ring-gray-700/50 group-hover:ring-cyan-400/50'
                    }`}
                    animate={{
                      boxShadow: isActive
                        ? [`0 0 0 rgba(6, 182, 212, 0.3)`, `0 0 20px rgba(6, 182, 212, 0.3)`]
                        : [`0 0 0 rgba(6, 182, 212, 0)`, `0 0 20px rgba(6, 182, 212, 0.1)`]
                    }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  />

                  {/* Text container */}
                  <span className="relative z-10 font-medium">{item.name}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionGlow"
                      className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl blur-lg`}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Hover shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-400/0 rounded-xl"
                whileHover={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))'
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="relative z-10 text-xs font-semibold uppercase tracking-wider">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Close
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Menu
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Shimmer effect on button */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0 }}
            animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-gradient-to-b from-slate-900/98 via-gray-900/98 to-black/98 backdrop-blur-2xl border-t-2 border-gradient-to-r from-cyan-400/40 via-purple-400/40 to-pink-400/40 overflow-hidden"
            style={{
              transformOrigin: 'top',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Mobile menu background effects */}
            <div className="absolute inset-0">
              {/* Holographic lines */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                  style={{ width: '100%', top: `${20 + i * 30}%` }}
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="relative px-6 py-8 space-y-6">
              {/* Menu header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4"/>
                <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  Navigation
                </span>
              </motion.div>

              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative block px-6 py-4 rounded-2xl font-semibold transition-all duration-400 ${
                      isActive
                        ? 'text-white scale-105'
                        : 'text-gray-300 hover:text-white'
                    } overflow-hidden`}
                  >
                    {/* Mobile item background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 rounded-2xl`}
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Mobile item glow border */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ring-2 transition-all duration-300 ${
                        isActive
                          ? `ring-${item.gradient.split('-')[1]}-400/60 shadow-lg shadow-${item.gradient.split('-')[1]}-400/20`
                          : 'ring-gray-700/60 group-hover:ring-cyan-400/60 group-hover:shadow-lg group-hover:shadow-cyan-400/20'
                      }`}
                    />

                    {/* Mobile item content */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg relative z-10">{item.name}</span>
                      </div>

                      {/* Active indicator dot */}
                      <AnimatePresence mode="wait">
                        {isActive ? (
                          <motion.div
                            key="activeDot"
                            layoutId="mobileActiveIndicator"
                            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                '0 0 0 rgba(6, 182, 212, 0.4)',
                                '0 0 12px rgba(6, 182, 212, 0.4)',
                                '0 0 0 rgba(6, 182, 212, 0.4)'
                              ]
                            }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          />
                        ) : (
                          <motion.div
                            key="inactiveDot"
                            className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                      animate={{
                        x: ['-150%', '150%'],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
