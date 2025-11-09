import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#e94560",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />
      <style jsx>{`
        .cursor {
          background-color: #e94560;
          height: 32px;
          width: 32px;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
      `}</style>
    </>
  );
};

export default Cursor;