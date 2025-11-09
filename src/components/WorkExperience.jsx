import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Calendar } from 'lucide-react';

const WorkExperience = ({ theme }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Facebook",
      position: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading mobile development initiatives for core Facebook applications.",
      achievements: [
        "Improved app performance by 40% through advanced optimization techniques",
        "Led a team of 8 developers in implementing new features",
        "Reduced crash rate by 60% across all mobile platforms"
      ],
      technologies: ["React Native", "TypeScript", "GraphQL", "Node.js"],
      color: "#1877F2"
    },
    {
      company: "Google",
      position: "Software Engineer",
      period: "2020 - 2022",
      description: "Worked on Google's mobile ecosystem and developer tools.",
      achievements: [
        "Developed key features for Google Play Store",
        "Contributed to open-source Android libraries",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["Kotlin", "Java", "Firebase", "Google Cloud"],
      color: "#4285F4"
    },
    {
      company: "Microsoft",
      position: "UI/UX Engineer",
      period: "2018 - 2020",
      description: "Bridged design and engineering for Microsoft's product suite.",
      achievements: [
        "Designed and implemented Fluent Design System components",
        "Created interactive prototypes for stakeholder presentations",
        "Improved accessibility compliance across all products"
      ],
      technologies: ["Figma", "React", "C#", "Azure"],
      color: "#0078D4"
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-[#e94560]">Experience</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            30 years of shaping digital experiences across leading tech companies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-6 rounded-2xl overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 backdrop-blur-lg' 
                  : 'bg-white/80 backdrop-blur-lg'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: exp.color }}
                    >
                      {exp.company[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-[#e94560] font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm opacity-70">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4"
                    >
                      <p className="text-lg leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-[#e94560]">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-[#e94560] rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-[#e94560]">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                theme === 'dark' 
                                  ? 'bg-gray-800 text-white' 
                                  : 'bg-gray-200 text-gray-800'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;