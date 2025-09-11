import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MouseCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const mouseTimeout = useRef<number>();

  useEffect(() => {
    let lastTime = Date.now();
    let lastPosition = mousePosition;

    const updateMousePosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime;
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPosition.x, 2) +
        Math.pow(e.clientY - lastPosition.y, 2)
      );

      // Calculate mouse speed to detect movement
      const speed = distance / timeDelta;
      setIsMoving(speed > 0.5);

      lastPosition = mousePosition;
      lastTime = currentTime;

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Clear existing timeout and set new one
      if (mouseTimeout.current) {
        clearTimeout(mouseTimeout.current);
      }

      setIsMoving(true);

      mouseTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const updateHoverState = (isHoveringState: boolean) => {
      setIsHovering(isHoveringState);
    };

    document.addEventListener('mousemove', updateMousePosition);

    // Hook detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');

    const handleMouseEnter = () => updateHoverState(true);
    const handleMouseLeave = () => updateHoverState(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      if (mouseTimeout.current) {
        clearTimeout(mouseTimeout.current);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorSize = isHovering ? '28px' : isMoving ? '22px' : '18px';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
      }}
      transition={{
        duration: 0,
        type: "linear",
      }}
      style={{
        width: cursorSize,
        height: cursorSize,
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          duration: isMoving ? 0.1 : 0.3,
          type: "spring",
          stiffness: isMoving ? 500 : 300,
          damping: isMoving ? 25 : 30,
        }}
        className={`relative w-full h-full ${!isMoving ? 'blur-sm' : ''}`}
        style={{
          filter: !isMoving ? 'blur(1px)' : 'blur(0px)',
        }}
      >
        {/* Main cursor orb - cosmic blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full opacity-90 shadow-2xl">
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 opacity-50" />
        </div>

        {/* Glow effect - steady cosmic blue */}
        <motion.div
          animate={{
            boxShadow: isHovering
              ? '0 0 20px rgba(30, 64, 175, 0.8), 0 0 30px rgba(6, 182, 212, 0.6)'
              : isMoving
              ? '0 0 15px rgba(30, 64, 175, 0.6), 0 0 25px rgba(6, 182, 212, 0.4)'
              : '0 0 10px rgba(30, 64, 175, 0.4), 0 0 15px rgba(6, 182, 212, 0.3)'
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
          className="absolute inset-0 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default MouseCursor;
