import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
        theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400' 
          : 'bg-yellow-400 text-gray-800'
      } shadow-lg hover:shadow-xl transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;