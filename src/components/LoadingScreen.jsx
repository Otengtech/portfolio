import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0f0f1a] flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1,
              repeat: Infinity,
            }
          }}
          className="mb-4"
        >
          <Code2 className="w-16 h-16 text-[#e94560] mx-auto" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Ebenezer Oteng Siaw
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400"
        >
          Loading Portfolio...
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-[#e94560] to-[#0f3460] rounded-full mx-auto mt-4"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;