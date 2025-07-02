import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Clock, Video, Target, Zap, Camera, Film, Mail, Phone, Linkedin, MapPin, Monitor, Clapperboard } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const achievements = [
    { icon: Award, title: '5+ Years', description: 'Professional Experience', color: 'text-yellow-400' },
    { icon: Users, title: '100+ Projects', description: 'Successfully Completed', color: 'text-blue-400' },
    { icon: Clock, title: '24/7', description: 'Support Available', color: 'text-green-400' },
    { icon: Video, title: '500+', description: 'Videos Delivered', color: 'text-purple-400' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@buraaqstudios.com',
      link: 'mailto:contact@buraaqstudios.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/company/buraaq-studios',
      link: 'https://linkedin.com/company/buraaq-studios'
    },
    {
      icon: MapPin,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      link: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const achievementVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Professional Studio Background */}
      <div className="absolute inset-0">
        {/* Main Professional Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Studio Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Professional Equipment Silhouettes */}
        <motion.div
          className="absolute top-20 left-10 opacity-5"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Monitor className="w-24 h-24 text-teal" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 opacity-5"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Clapperboard className="w-28 h-28 text-cyan" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4 opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Camera className="w-20 h-20 text-purple" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3 opacity-5"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Film className="w-16 h-16 text-yellow-400" />
        </motion.div>

        {/* Professional Light Beams */}
        <motion.div
          className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-teal/20 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cyan/20 via-transparent to-transparent"
          animate={{
            opacity: [0.5, 0.2, 0.5],
            scaleX: [1.5, 1, 1.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Subtle Particle System */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Professional Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Meet Our Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Meet Our <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            We are a team of professional video editors dedicated to bringing your vision to life
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Team Info and Achievements */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Crafting Visual Stories That Matter
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              With over 5 years of experience in the video editing industry, Buraaq Studios has established itself as a premier destination for professional video production services. We specialize in transforming raw footage into compelling visual narratives that resonate with audiences and drive meaningful engagement.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Our team of skilled editors combines technical expertise with creative vision to deliver exceptional results across various platforms including YouTube, Instagram, corporate presentations, and cinematic productions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              variants={containerVariants}
            >
              {[
                { text: 'Professional Quality', color: 'bg-teal/20 text-teal' },
                { text: 'Fast Turnaround', color: 'bg-cyan/20 text-cyan' },
                { text: 'Creative Excellence', color: 'bg-purple/20 text-purple' }
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2 ${tag.color} rounded-full text-sm font-medium`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(20, 184, 166, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}
                className="card text-center group cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredAchievement(index)}
                onMouseLeave={() => setHoveredAchievement(null)}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal/10 to-cyan/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredAchievement === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: hoveredAchievement === index ? 360 : 0,
                      scale: hoveredAchievement === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                  </motion.div>
                  <motion.h4 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {achievement.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {achievement.description}
                  </motion.p>
                </motion.div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl"
                  animate={{ 
                    borderColor: hoveredAchievement === index ? "rgba(20, 184, 166, 0.5)" : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Contact our team for professional video editing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                className="card text-center group hover:border-teal/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <contact.icon className="w-8 h-8 text-teal mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-2">{contact.label}</h4>
                <p className="text-gray-400 text-sm group-hover:text-teal transition-colors">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-full border border-teal/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Target className="w-6 h-6 text-teal" />
            <span className="text-white font-medium">Our Mission: Bringing Your Vision to Life</span>
            <Zap className="w-6 h-6 text-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;