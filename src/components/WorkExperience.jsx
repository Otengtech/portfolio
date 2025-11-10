import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Calendar, Code, Palette, Database, Smartphone } from 'lucide-react';

const WorkExperience = ({ theme }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Codeink Technologies",
      position: "Full Stack Developer & UI/UX Designer",
      period: "2022 - Present",
      description: "Leading end-to-end development of web applications, from concept to deployment, while crafting intuitive user experiences that drive engagement and conversion.",
      achievements: [
        "Developed 15+ responsive web applications with modern tech stack",
        "Improved website performance scores by 45% through optimization",
        "Reduced development time by 30% using component-based architecture",
        "Increased user engagement by 60% with improved UI/UX designs",
        "Implemented RESTful APIs serving 10,000+ monthly requests"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Figma", "Git"],
      color: "#ec4899",
      icons: [Code, Palette, Database, Smartphone]
    }
  ];

  const roles = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and experiences",
      color: "#8b5cf6"
    },
    {
      title: "Frontend Development", 
      description: "Building responsive and interactive web interfaces",
      color: "#06b6d4"
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs",
      color: "#10b981"
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web application development",
      color: "#f59e0b"
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
            Work <span className="text-[#ec4899]">Experience</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Crafting digital solutions with modern technologies and user-centered design
          </p>
        </motion.div>

        {/* Roles Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
                    className={`p-6 rounded-2xl text-center backdrop-blur-lg bg-transparent border-2 border-[#e94560] transition-all duration-300`}
            >
              <div 
                className="w-16 h-16 rounded-full bg-[#e94560] mx-auto mb-4 flex items-center justify-center text-gray-900"
              >
                <Code size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
              <p className="text-sm opacity-70">{role.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6 rounded-2xl overflow-hidden"
            >
              {/* Pink Background Card */}
              <div 
                className="p-1 rounded-2xl"
              >
                <div className={`rounded-2xl p-8 border-2 border-[#e94560]`}>
                  <div
                    className="cursor-pointer"
                    onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex items-center space-x-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                          style={{ backgroundColor: exp.color }}
                        >
                          <Code size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{exp.position}</h3>
                          <p className="text-[#ec4899] text-xl font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-lg font-medium opacity-80">
                          <Calendar size={20} />
                          <span>{exp.period}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center"
                        >
                          <ChevronDown size={20} className="text-[#ec4899]" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 space-y-8"
                        >
                          {/* Description */}
                          <div>
                            <p className="text-lg leading-relaxed opacity-90">{exp.description}</p>
                          </div>
                          
                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-bold text-xl mb-4 text-[#ec4899] flex items-center gap-2">
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {exp.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className={`p-4 rounded-xl ${
                                    theme === 'dark' 
                                      ? 'bg-gray-800/50' 
                                      : 'bg-[#e94560]'
                                  } border-l-4 border-[#ec4899]`}
                                >
                                  <p className="font-medium">{achievement}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-bold text-xl mb-4 text-[#ec4899] flex items-center gap-2">
                              Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="px-4 py-2 rounded-full font-semibold text-white shadow-lg"
                                  style={{
                                    background: 'linear-gradient(135deg, #ec4899, #db2777)'
                                  }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Visualization */}
                          <div className="pt-4">
                            <h4 className="font-bold text-xl mb-4 text-[#ec4899]">Tech Stack Mastery</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {[
                                { category: "Frontend", tech: "HTML/CSS/JS, React, Next.js" },
                                { category: "Backend", tech: "Node.js, APIs, MongoDB" },
                                { category: "Styling", tech: "Tailwind CSS, Responsive Design" },
                                { category: "Tools", tech: "Figma, Git, VS Code" }
                              ].map((item, i) => (
                                <motion.div
                                  key={item.category}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                  className={`p-4 rounded-xl text-center ${
                                    theme === 'dark' 
                                      ? 'bg-gray-800/30' 
                                      : 'bg-pink-50/50'
                                  } border border-pink-200/30`}
                                >
                                  <h5 className="font-bold text-[#ec4899] mb-2">{item.category}</h5>
                                  <p className="text-sm opacity-80">{item.tech}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
            theme === 'dark' 
              ? 'bg-gray-800/50' 
              : 'bg-pink-50'
          }`}>
            <div className="w-2 h-2 bg-[#ec4899] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Currently accepting new projects and opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;