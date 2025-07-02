import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface EquipmentItem {
  id: string;
  name: string;
  image: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
  delay: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
  zIndex: number;
}

const StudioEquipment: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Start animation after hero text loads

    return () => clearTimeout(timer);
  }, []);

  const equipment: EquipmentItem[] = [
    {
      id: 'microphone',
      name: 'Studio Condenser Microphone',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'top',
      delay: 0,
      position: { top: '10%', right: '15%' },
      size: { width: '120px', height: '180px' },
      zIndex: 4
    },
    {
      id: 'speakers',
      name: 'Monitor Speakers',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'left',
      delay: 0.5,
      position: { top: '20%', left: '8%' },
      size: { width: '140px', height: '160px' },
      zIndex: 3
    },
    {
      id: 'mixing-console',
      name: 'Mixing Console',
      image: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'bottom',
      delay: 1.0,
      position: { bottom: '15%', left: '20%' },
      size: { width: '200px', height: '120px' },
      zIndex: 2
    },
    {
      id: 'headphones',
      name: 'Professional Headphones',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'right',
      delay: 1.5,
      position: { bottom: '25%', right: '12%' },
      size: { width: '130px', height: '140px' },
      zIndex: 5
    },
    {
      id: 'audio-interface',
      name: 'Audio Interface',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'top',
      delay: 2.0,
      position: { top: '60%', right: '25%' },
      size: { width: '110px', height: '80px' },
      zIndex: 1
    },
    {
      id: 'studio-monitor',
      name: 'Studio Monitor',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
      direction: 'left',
      delay: 2.5,
      position: { top: '45%', left: '5%' },
      size: { width: '100px', height: '120px' },
      zIndex: 3
    }
  ];

  const getInitialTransform = (direction: string) => {
    switch (direction) {
      case 'top':
        return { y: -200, x: 0 };
      case 'bottom':
        return { y: 200, x: 0 };
      case 'left':
        return { x: -200, y: 0 };
      case 'right':
        return { x: 200, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const equipmentVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      scale: 0.8,
      ...getInitialTransform(direction),
    }),
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // cubic-bezier(0.4, 0, 0.2, 1)
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(232, 76, 61, 0.3)",
        "0 0 40px rgba(232, 76, 61, 0.5)",
        "0 0 20px rgba(232, 76, 61, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Reduced motion alternative */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .equipment-item {
            animation: none !important;
            transform: none !important;
            opacity: 0.6 !important;
          }
        }
      `}</style>

      {equipment.map((item, index) => (
        <motion.div
          key={item.id}
          className="equipment-item absolute"
          style={{
            ...item.position,
            width: item.size.width,
            height: item.size.height,
            zIndex: item.zIndex,
          }}
          custom={item.direction}
          variants={equipmentVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{
            delay: item.delay,
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            z: 50,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
        >
          {/* Equipment Image Container */}
          <motion.div
            className="relative w-full h-full group"
            variants={glowVariants}
            animate="animate"
          >
            {/* Main Equipment Image */}
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              style={{
                filter: 'contrast(1.1) saturate(1.2) brightness(0.9)',
                clipPath: index % 2 === 0 
                  ? 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)' 
                  : 'polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 70%)'
              }}
              loading="lazy"
              aria-label={item.name}
            />

            {/* Accent Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-500/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Glowing Border */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-red-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: item.delay + 0.5, duration: 0.5 }}
            />

            {/* Floating Particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item.delay + 1
              }}
            />

            {/* Equipment Label (Hidden by default, shown on hover) */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {item.name}
            </motion.div>
          </motion.div>

          {/* Reflection Effect */}
          <motion.div
            className="absolute top-full left-0 w-full h-1/2 opacity-20"
            style={{
              background: `linear-gradient(to bottom, rgba(245, 245, 245, 0.1), transparent)`,
              transform: 'scaleY(-1)',
              filter: 'blur(1px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: item.delay + 0.8, duration: 0.5 }}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              style={{
                clipPath: index % 2 === 0 
                  ? 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)' 
                  : 'polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 70%)'
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Ambient Light Effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Performance Optimization: Hardware Acceleration */}
      <style jsx>{`
        .equipment-item {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        .equipment-item img {
          will-change: transform;
          transform: translateZ(0);
        }

        /* Responsive Scaling */
        @media (max-width: 768px) {
          .equipment-item {
            transform: scale(0.7) !important;
          }
        }

        @media (max-width: 480px) {
          .equipment-item {
            transform: scale(0.5) !important;
          }
        }

        /* High DPI Displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .equipment-item img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </div>
  );
};

export default StudioEquipment;