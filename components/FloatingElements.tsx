'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const elements = [
    {
      id: 1,
      size: 'w-16 h-16',
      position: 'top-1/4 left-1/4',
      delay: 0,
      color: 'bg-[#f9ba01]/10',
    },
    {
      id: 2,
      size: 'w-8 h-8',
      position: 'top-1/3 right-1/4',
      delay: 1,
      color: 'bg-blue-500/10',
    },
    {
      id: 3,
      size: 'w-12 h-12',
      position: 'bottom-1/3 left-1/3',
      delay: 2,
      color: 'bg-purple-500/10',
    },
    {
      id: 4,
      size: 'w-6 h-6',
      position: 'bottom-1/4 right-1/3',
      delay: 0.5,
      color: 'bg-green-500/10',
    },
    {
      id: 5,
      size: 'w-10 h-10',
      position: 'top-1/2 left-1/6',
      delay: 1.5,
      color: 'bg-pink-500/10',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.position} ${element.color} rounded-full blur-sm`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay,
          }}
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${
              (mousePosition.y - window.innerHeight / 2) * 0.02
            }px)`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-24 h-24 border border-[#f9ba01]/20 rounded-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/5 left-1/5 w-16 h-16 border border-blue-500/20"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default FloatingElements;