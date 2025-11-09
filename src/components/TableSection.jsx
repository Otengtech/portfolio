import React from 'react';
import { motion } from 'framer-motion';

const TableSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#16213e] rounded-lg overflow-hidden max-w-4xl mx-auto"
      >
        <div className="bg-[#0f3460] px-6 py-4">
          <h3 className="text-xl font-semibold">An online account</h3>
        </div>
        <div className="p-6">
          <p className="text-[#e6e6e6] mb-4">
            A change was made to improve user engagement and platform performance.
          </p>
          <p className="text-[#e6e6e6]">
            Judges a book by its cover - focusing on creating visually appealing interfaces 
            that enhance user experience and drive conversion.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TableSection;