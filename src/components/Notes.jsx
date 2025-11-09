import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaFlask } from 'react-icons/fa';

const Notes = () => {
  const notes = [
    {
      icon: <FaUser className="text-2xl" />,
      title: "About",
      content: "Passionate about creating digital experiences that make a difference in people's lives."
    },
    {
      icon: <FaFlask className="text-2xl" />,
      title: "Lab", 
      content: "Exploring new technologies and design patterns to push the boundaries of digital innovation."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#16213e] p-8 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="text-[#e94560] mr-3">
                {note.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#e94560]">{note.title}</h4>
            </div>
            <p className="text-[#e6e6e6] leading-relaxed">{note.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Notes;