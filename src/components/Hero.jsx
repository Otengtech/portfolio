import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Github,
  Download,
  ArrowRight,
} from "lucide-react";
import HeroImage from "../assets/HeroImage.png";

const Hero = ({ theme }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const canvasRef = useRef(null);

  const dynamicMessages = [
    "CODE. CREATE. INSPIRE.",
    "BUILDING BETTER TECH.",
    "DESIGN WITH IMPACT.",
    "INNOVATE WITH PURPOSE.",
  ];

  const skills = [
    { icon: Code2, label: "Full Stack" },
    { icon: Smartphone, label: "Mobile" },
    { icon: Palette, label: "UI/UX" },
    { icon: Github, label: "Open Source" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % dynamicMessages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Bouncing balls animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const balls = [];
    const colors =
      theme === "dark"
        ? ["#e94560", "#0f3460", "#533483", "#1a1a2e"]
        : ["#e94560", "#0f3460", "#6366f1", "#8b5cf6"];

    class Ball {
      constructor() {
        this.radius = Math.random() * 20 + 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = (Math.random() - 0.5) * 4;
        this.dy = (Math.random() - 0.5) * 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      balls.length = 0;
      for (let i = 0; i < 15; i++) balls.push(new Ball());
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach((ball) => ball.update());
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [theme]);

  return (
    <section
      id="home"
      className={`min-h-screen w-full flex items-center justify-center relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]"
          : "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"
      }`}
    >
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-left lg:text-left order-2 lg:order-1"
        >
          {/* Dynamic Message */}
          <div className="mb-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentMessage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#e94560] to-[#0f3460] bg-clip-text text-transparent">
                  {dynamicMessages[currentMessage]}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-gray-400">
            Senior Software Engineer at Facebook with 10+ years of experience
            specializing in full-stack development, mobile applications, and
            user-centered design. Passionate about creating impactful digital
            solutions that bridge technology and human needs.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`p-3 rounded-2xl shadow-lg ${
                    theme === "dark"
                      ? "bg-white/10 backdrop-blur-sm"
                      : "bg-white/80 backdrop-blur-sm"
                  }`}
                >
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#e94560]" />
                </div>
                <span className="text-xs sm:text-sm mt-2 font-medium text-gray-600 dark:text-gray-400">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex flex-col items-center lg:items-start space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={HeroImage}
                alt="Ebenezer Oteng"
                className="w-56 md:w-72 object-cover"
              />
            </div>

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 rounded-2xl bg-[#e94560] shadow-lg"
            >
              <Code2 className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* CTA Section — Clean Version */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#e94560]">
                Let’s Build Something Amazing
              </h3>
              <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 leading-relaxed max-w-sm lg:max-w-md">
                Ready to bring your ideas to life? I’m passionate about turning
                innovative concepts into real, powerful digital experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  theme === "dark"
                    ? "border-[#e94560] text-white hover:bg-[#e94560]"
                    : "border-[#0f3460] text-gray-800 hover:bg-[#0f3460] hover:text-white"
                }`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
