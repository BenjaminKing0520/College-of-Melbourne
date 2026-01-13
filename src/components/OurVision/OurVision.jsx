import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaEye } from "react-icons/fa";

// Vision text for typewriter
const visionText =
  " Our vision is to become a global leader in higher education, known for cutting-edge research, innovative teaching, and social impact initiatives. We aim to create diverse community of learners who are equipped to address the world's most pressing challenges with integrity, resilience, and expertise.";

// Typewriter effect
const Typewriter = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [text]);
  return <p>{displayed}</p>;
};

const OurVision = () => {
  // Parallax glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useTransform(x, [-100, 100], [-30, 30]);
  const glowY = useTransform(y, [-100, 100], [-30, 30]);

  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#F5F5F5" }}
      onMouseMove={(e) => {
        x.set(e.clientX - window.innerWidth / 2);
        y.set(e.clientY - window.innerHeight / 2);
      }}
    >
      {/* Parallax Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          backgroundColor: "rgba(223,17,17,0.15)",
        }}
        className="absolute top-1/4 left-1/4 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          backgroundColor: "rgba(223,17,17,0.1)",
        }}
        className="absolute bottom-0 right-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full blur-3xl"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(223,17,17,0.25)]
        p-6 sm:p-10 md:p-14 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(223,17,17,0.15)",
            color: "#df1111",
          }}
        >
          <FaEye size={24} className="sm:text-2xl md:text-3xl" />
        </motion.div>

        {/* Title */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4"
          style={{ color: "#df1111" }}
        >
          Our Vision
        </h2>

        {/* Divider */}
        <div
          className="w-12 sm:w-16 md:w-20 h-1 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"
          style={{ backgroundColor: "#df1111" }}
        />

        {/* Typewriter Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-justify sm:text-center md:text-justify"
          style={{ color: "#353535" }}
        >
          <Typewriter text={visionText} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurVision;
