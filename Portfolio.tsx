import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Eye, Heart, Share2 } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  views: string;
  likes: string;
}

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [filter, setFilter] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'Epic Cinematic Trailer',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Cinematic',
      views: '2.5M',
      likes: '45K'
    },
    {
      id: '2',
      title: 'YouTube Content Creation',
      thumbnail: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'YouTube',
      views: '1.2M',
      likes: '28K'
    },
    {
      id: '3',
      title: 'Business Promotional Video',
      thumbnail: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Business',
      views: '890K',
      likes: '15K'
    },
    {
      id: '4',
      title: 'Instagram Reel Collection',
      thumbnail: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Social Media',
      views: '3.1M',
      likes: '67K'
    },
    {
      id: '5',
      title: 'Green Screen Magic',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'VFX',
      views: '1.8M',
      likes: '32K'
    },
    {
      id: '6',
      title: 'Corporate Presentation',
      thumbnail: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Corporate',
      views: '654K',
      likes: '12K'
    }
  ];

  const categories = ['All', 'Cinematic', 'YouTube', 'Business', 'Social Media', 'VFX', 'Corporate'];

  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(video => video.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section ref={ref} id="portfolio" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
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
            conic-gradient(from 0deg at 50% 50%, 
              rgba(20, 184, 166, 0.3) 0deg, 
              transparent 60deg, 
              rgba(6, 182, 212, 0.3) 120deg, 
              transparent 180deg, 
              rgba(139, 92, 246, 0.3) 240deg, 
              transparent 300deg, 
              rgba(20, 184, 166, 0.3) 360deg)
          `,
          backgroundSize: '400px 400px'
        }}
      />

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
            Our <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our latest video editing projects across different platforms and styles
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={filterVariants}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-teal to-cyan text-white shadow-lg shadow-teal/25'
                  : 'bg-dark-accent text-gray-300 hover:bg-teal/20 hover:text-teal'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                className="portfolio-item relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-video relative">
                  <motion.img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Enhanced Overlay - Fixed visibility */}
                  <motion.div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredVideo === video.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredVideo === video.id ? 1 : 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border border-white/30"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(20, 184, 166, 0.8)"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredVideo === video.id ? 0 : 20, 
                          opacity: hoveredVideo === video.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.2 }}
                      >
                        {video.title}
                      </motion.h3>
                      
                      <motion.span 
                        className="px-3 py-1 bg-teal text-white text-sm rounded-full"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredVideo === video.id ? 0 : 20, 
                          opacity: hoveredVideo === video.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.3 }}
                      >
                        {video.category}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Stats Overlay - Fixed visibility */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredVideo === video.id ? 0 : 20, 
                      opacity: hoveredVideo === video.id ? 1 : 0 
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-center text-white text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                      <Share2 className="w-4 h-4 hover:text-teal transition-colors cursor-pointer" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-teal transition-colors z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-8 h-8" />
                </motion.button>
                
                <motion.div 
                  className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                  layoutId={selectedVideo.id}
                >
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </motion.div>
                
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                  <div className="flex items-center justify-center gap-6">
                    <span className="px-4 py-2 bg-teal text-white text-sm rounded-full">
                      {selectedVideo.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{selectedVideo.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{selectedVideo.likes} likes</span>
                      </div>
                    </div>
                    <motion.a 
                      href={selectedVideo.videoUrl.replace('/embed/', '/watch?v=')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal hover:text-cyan transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch on YouTube
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;