import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white'
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 text-gray-800'
      }`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="w-full overflow-hidden">
        <Hero theme={theme} />
        <WorkExperience theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
