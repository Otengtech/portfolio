import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette } from 'lucide-react';

const Hero = ({ theme }) => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Software Engineer",
    "UI/UX Designer",
    "Mobile Developer",
    "Tech Innovator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
        }`} />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#e94560] rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-[#0f3460] rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ebenezer{' '}
            <span className="bg-gradient-to-r from-[#e94560] to-[#0f3460] bg-clip-text text-transparent">
              Oteng Siaw
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 h-12"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#e94560] font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Currently shaping the future at Facebook as a Software Engineer. 
              With 30 years of industry experience, I bridge the gap between 
              innovative design and robust engineering.
            </p>
            
            <div className="flex justify-center space-x-8 pt-6">
              {[
                { icon: Code2, label: 'Clean Code' },
                { icon: Smartphone, label: 'Mobile First' },
                { icon: Palette, label: 'Pixel Perfect' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <item.icon className="w-8 h-8 mb-2 text-[#e94560]" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 ${
                theme === 'dark' 
                  ? 'border-[#e94560] text-white' 
                  : 'border-[#0f3460] text-gray-800'
              } rounded-full font-semibold hover:bg-[#e94560] hover:border-[#e94560] hover:text-white transition-all duration-300`}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#e94560] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#e94560] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;