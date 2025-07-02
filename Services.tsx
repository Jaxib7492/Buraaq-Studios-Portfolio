import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Youtube, Film, Instagram, Briefcase, Scissors, Zap, ArrowRight, Star, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const services = [
    {
      icon: Youtube,
      title: 'YouTube Video Editing',
      description: 'Engaging YouTube content with seamless transitions, dynamic graphics, and optimized pacing to maximize viewer retention.',
      features: ['Thumbnail Design', 'Color Grading', 'Audio Enhancement', 'SEO Optimization'],
      color: 'from-red-500 to-red-600',
      iconColor: 'text-red-400',
      glowColor: 'rgba(239, 68, 68, 0.3)'
    },
    {
      icon: Film,
      title: 'Cinematic Trailers',
      description: 'High-impact movie-style trailers with dramatic effects, professional color grading, and compelling storytelling.',
      features: ['Epic Transitions', 'Sound Design', 'Visual Effects', 'Color Grading'],
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400',
      glowColor: 'rgba(139, 92, 246, 0.3)'
    },
    {
      icon: Instagram,
      title: 'Instagram Reels',
      description: 'Short-form content optimized for social media with trending effects, quick cuts, and mobile-first design.',
      features: ['Trend Integration', 'Quick Cuts', 'Mobile Optimization', 'Hashtag Strategy'],
      color: 'from-pink-500 to-purple-500',
      iconColor: 'text-pink-400',
      glowColor: 'rgba(236, 72, 153, 0.3)'
    },
    {
      icon: Briefcase,
      title: 'Business Promos',
      description: 'Professional corporate videos that effectively communicate your brand message and drive business growth.',
      features: ['Brand Integration', 'Professional Voice-over', 'Corporate Graphics', 'Call-to-Action'],
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      icon: Scissors,
      title: 'Green Screen Editing',
      description: 'Seamless background replacement and compositing for creative and professional video productions.',
      features: ['Background Removal', 'Realistic Compositing', 'Lighting Correction', 'Motion Tracking'],
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-400',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    {
      icon: Zap,
      title: 'Motion Graphics',
      description: 'Eye-catching animated graphics and visual effects to enhance your video content and brand identity.',
      features: ['Logo Animation', 'Text Effects', 'Infographics', '2D Animation'],
      color: 'from-yellow-500 to-orange-500',
      iconColor: 'text-yellow-400',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1,
        duration: 0.8
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: index * 0.1
      }
    })
  };

  return (
    <section ref={ref} id="services" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
            conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(20, 184, 166, 0.1) 60deg, transparent 120deg)
          `,
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-12 h-12 text-teal" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive video editing solutions tailored to your unique needs and platform requirements
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="card group cursor-pointer relative overflow-hidden perspective-1000"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.02,
                rotateY: 3,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Dynamic Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5`}
                initial={{ scale: 0, rotate: 45 }}
                animate={{ 
                  scale: hoveredCard === index ? 1.2 : 0,
                  rotate: hoveredCard === index ? 0 : 45
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Enhanced Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ 
                  boxShadow: "0 0 0 0 rgba(20, 184, 166, 0)" 
                }}
                animate={{ 
                  boxShadow: hoveredCard === index 
                    ? `0 0 30px 5px ${service.glowColor}` 
                    : "0 0 0 0 rgba(20, 184, 166, 0)"
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Enhanced Icon Animation */}
                <motion.div 
                  className="mb-6"
                  variants={iconVariants}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className={`w-12 h-12 ${service.iconColor} group-hover:text-white transition-colors duration-300 relative z-10`} />
                    
                    {/* Icon Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 w-12 h-12 ${service.iconColor} opacity-0 group-hover:opacity-30 blur-lg`}
                      animate={{
                        scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Enhanced Title Animation */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description with Better Typography */}
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Enhanced Features List */}
                <motion.ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-400"
                      custom={featureIndex}
                      variants={featureVariants}
                      initial="hidden"
                      animate={hoveredCard === index ? "visible" : "hidden"}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-teal rounded-full mr-3 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        animate={{
                          scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                          backgroundColor: hoveredCard === index ? "#14B8A6" : "#6B7280"
                        }}
                        transition={{ 
                          scale: { duration: 0.5, delay: featureIndex * 0.1 },
                          backgroundColor: { duration: 0.3 }
                        }}
                      />
                      <motion.span
                        whileHover={{ x: 5, color: "#14B8A6" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {feature}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Enhanced CTA Button */}
                <motion.div 
                  className="pt-6 border-t border-dark-accent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button 
                    className="flex items-center text-teal font-semibold hover:text-cyan transition-colors group-hover:translate-x-2 transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <motion.div
                      className="ml-2"
                      animate={{ 
                        x: hoveredCard === index ? 8 : 0,
                        rotate: hoveredCard === index ? 45 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>

                {/* Enhanced Quality Badge */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ 
                    scale: hoveredCard === index ? 1 : 0,
                    rotate: hoveredCard === index ? 0 : -45
                  }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-1 bg-teal/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-white font-medium">Premium</span>
                  </div>
                </motion.div>

                {/* Floating Particles on Hover */}
                {hoveredCard === index && (
                  <motion.div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + i * 10}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-2xl border border-teal/20 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal/5 to-cyan/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <motion.button
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;