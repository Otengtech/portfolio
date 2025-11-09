import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = ({ theme }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Mobile Assistant",
      description: "An intelligent mobile assistant that uses machine learning to predict user needs and automate tasks.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["React Native", "TensorFlow", "Node.js", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform Redesign",
      description: "Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Cross-platform mobile app for tracking health metrics with AI-powered insights and recommendations.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase", "ML Kit"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Design System Framework",
      description: "Comprehensive design system used by multiple teams across the organization for consistent UI/UX.",
      image: "/api/placeholder/600/400",
      category: "design",
      technologies: ["Figma", "Storybook", "React", "SASS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'web', name: 'Web' },
    { id: 'design', name: 'UI/UX' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#e94560]">Projects</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in software engineering and design
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-[#e94560] text-white shadow-lg'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl overflow-hidden group ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 backdrop-blur-lg' 
                    : 'bg-white/80 backdrop-blur-lg'
                } shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-[#e94560] to-[#0f3460] flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-20" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    >
                      <Github className="w-5 h-5 text-gray-800" />
                    </motion.a>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#e94560] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#e94560] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="opacity-80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-sm font-semibold text-[#e94560] hover:underline"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-sm font-semibold text-[#e94560] hover:underline"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;