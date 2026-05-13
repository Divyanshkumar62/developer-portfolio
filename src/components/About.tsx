import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define exactly what files are in each folder and their scroll speeds.
// Higher speed number = slower movement. Speed 0 = static sky/background.
const themeConfigs = [
  {
    folder: 'nature_1',
    layers: [
      { file: '1.png', speed: 0 },    // Sky
      { file: '2.png', speed: 60 },   // Clouds
      { file: '3.png', speed: 45 },   // Mountains
      { file: '5.png', speed: 30 },   // Bushes
      { file: '6.png', speed: 20 },   // Back Tree
      { file: '7.png', speed: 15 },   // Front Tree
      { file: '8.png', speed: 10 },   // Grass
      { file: '10.png', speed: 5 },   // Foreground
    ]
  },
  {
    folder: 'nature_2', // From your screenshot, this has 1.png through 5.png
    layers: [
      { file: '1.png', speed: 0 },    
      { file: '2.png', speed: 45 },   
      { file: '3.png', speed: 30 },   
      { file: '4.png', speed: 15 },     
    ]
  },
  {
    folder: 'nature_3', // From your screenshot, this has 1.png through 5.png
    layers: [
      { file: '1.png', speed: 0 },    
      { file: '2.png', speed: 45 },   
      { file: '3.png', speed: 30 },   
      { file: '4.png', speed: 15 },      
    ]
  },
  {
    folder: 'nature_4', // From your screenshot, this has 1.png through 5.png
    layers: [
      { file: '1.png', speed: 0 },    
      { file: '2.png', speed: 45 },   
      { file: '3.png', speed: 30 },   
      { file: '4.png', speed: 15 },      
    ]
  },
  {
    folder: 'nature_5', // From your screenshot, this has 1.png through 5.png
    layers: [
      { file: '1.png', speed: 0 },    
      { file: '2.png', speed: 45 },   
      { file: '3.png', speed: 30 },   
      { file: '4.png', speed: 15 },   
      { file: '5.png', speed: 5 },    
    ]
  },
  {
    folder: 'nature_6', // From your screenshot, this has 1.png through 5.png
    layers: [
      { file: '1.png', speed: 0 },    
      { file: '2.png', speed: 45 },   
      { file: '3.png', speed: 30 },    
    ]
  },
  {
    folder: 'nature_7', // From your screenshot, this only has 1.png and 2.png
    layers: [
      { file: '1.png', speed: 0 },    // Background
      { file: '2.png', speed: 10 },   // Foreground
    ]
  }
  // Add nature_2, nature_3, etc., here!
];

// 2. Helper to transform the config into actual src paths
const allThemes = themeConfigs.map((theme) => {
  return theme.layers.map((layer, index) => ({
    src: `/${theme.folder}/${layer.file}`,
    speed: layer.speed,
    zIndex: index + 1
  }));
});

const AnimatedImage: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % allThemes.length);
    }, 10000); // Cycles every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  const currentLayers = allThemes[themeIndex];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card border-text-primary/30 p-2 group shimmer-container">
      <div className="shimmer-effect" />
      <div className="w-full h-full rounded-xl overflow-hidden bg-surface-muted/20 relative">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={themeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className="absolute inset-0 w-full h-full"
          >
            {currentLayers.map((layer, index) => (
              <div 
                key={`${themeIndex}-${index}`}
                className="parallax-layer"
                style={{ 
                  zIndex: layer.zIndex,
                  animation: layer.speed > 0 ? `parallaxScroll ${layer.speed}s linear infinite` : 'none'
                }}
              >
                {/* I added an onError failsafe here! 
                  If you accidentally misspell a file name in the config, 
                  it will safely hide it instead of showing broken text. 
                */}
                <img 
                  src={layer.src} 
                  alt={`Layer ${index}`} 
                  className="parallax-image" 
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <img 
                  src={layer.src} 
                  alt={`Layer ${index} clone`} 
                  className="parallax-image"
                  onError={(e) => (e.currentTarget.style.display = 'none')} 
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const stats = [
    { label: "Projects Built", value: "15+" },
    { label: "Experience", value: "1+ Years" },
    { label: "Lines of Code", value: "∞" },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full aspect-[4/3] max-w-[450px]">
              {/* Decorative Circles */}
              <div className="absolute -inset-4 border border-text-primary/20 rounded-[2rem] animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 border border-text-primary/10 rounded-[3rem] animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* The Parallax Component */}
              <AnimatedImage />

              {/* Glowing Corner */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-text-primary/20 blur-xl rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-text-primary/20 blur-xl rounded-full" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-xl mb-8">About Me</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                I'm a passionate <span className="text-text-primary font-medium">Full-Stack Developer</span> with a knack for building clean, efficient, and user-friendly applications. I love exploring new technologies and solving complex problems with creative solutions.
              </p>
              <p>
                My journey in tech is driven by a desire to create impact through code. Whether it's architecting robust backends or crafting immersive frontends, I strive for excellence and performance in every project I undertake.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-tertiary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;