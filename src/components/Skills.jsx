import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Zap 
} from 'lucide-react';

const Skills = ({ theme }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 }
      ],
      color: "#e94560"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 92 },
        { name: "Flutter", level: 88 },
        { name: "iOS Development", level: 80 },
        { name: "Android Development", level: 85 }
      ],
      color: "#0f3460"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "Design Systems", level: 92 }
      ],
      color: "#e94560"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "GraphQL", level: 90 },
        { name: "REST APIs", level: 92 }
      ],
      color: "#0f3460"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "Firebase", level: 90 }
      ],
      color: "#e94560"
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Agile/Scrum", level: 90 }
      ],
      color: "#0f3460"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-[#e94560]">Expertise</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Comprehensive skill set honed over 30 years in the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-6 ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 backdrop-blur-lg' 
                  : 'bg-white/80 backdrop-blur-lg'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm opacity-70">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                    } overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "30+", label: "Years Experience" },
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "15+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 backdrop-blur-lg' 
                  : 'bg-white/80 backdrop-blur-lg'
              } shadow-lg`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#e94560] mb-2">
                {stat.number}
              </div>
              <div className="font-medium opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;