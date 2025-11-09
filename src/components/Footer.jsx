import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      theme === 'dark' 
        ? 'bg-gray-900/50 backdrop-blur-lg' 
        : 'bg-white/80 backdrop-blur-lg'
    } border-t ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <span className="opacity-80">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[#e94560] fill-current" />
            </motion.div>
            <span className="opacity-80">by Ebenezer Oteng Siaw</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <span className="opacity-80">© 2024 All rights reserved</span>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100 shadow-md'
              } transition-all duration-300`}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;