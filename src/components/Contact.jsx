import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ebenezer@example.com',
      href: 'mailto:ebenezer@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: '#0077B5'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: '#333'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#e94560]">Connect</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg opacity-80 mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-900/50 hover:bg-gray-800' 
                      : 'bg-white/80 hover:bg-white'
                  } shadow-lg hover:shadow-xl group`}
                >
                  <div className="w-12 h-12 bg-[#e94560] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{method.label}</div>
                    <div className="opacity-80">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: social.color }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${
              theme === 'dark' 
                ? 'bg-gray-900/50 backdrop-blur-lg' 
                : 'bg-white/80 backdrop-blur-lg'
            } shadow-xl`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-[#e94560]'
                        : 'bg-white border-gray-300 text-gray-800 focus:border-[#e94560]'
                    } focus:outline-none focus:ring-2 focus:ring-[#e94560] focus:ring-opacity-50`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-[#e94560]'
                        : 'bg-white border-gray-300 text-gray-800 focus:border-[#e94560]'
                    } focus:outline-none focus:ring-2 focus:ring-[#e94560] focus:ring-opacity-50`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-[#e94560]'
                      : 'bg-white border-gray-300 text-gray-800 focus:border-[#e94560]'
                  } focus:outline-none focus:ring-2 focus:ring-[#e94560] focus:ring-opacity-50`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-[#e94560]'
                      : 'bg-white border-gray-300 text-gray-800 focus:border-[#e94560]'
                  } focus:outline-none focus:ring-2 focus:ring-[#e94560] focus:ring-opacity-50`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white py-4 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;