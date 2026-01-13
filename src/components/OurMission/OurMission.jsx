import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaBullseye } from "react-icons/fa";

// Mission text for typewriter
const missionText =
  "  At College of Melbourne, our mission is to empower students to become leaders, innovators, and critical thinkers who make a difference in the world. We provide a dynamic educational experience that emphasizes creativity, colloboration, and global awareness, preparing graduates to thrive in a rapidly evolving world.";

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

const OurMission = () => {
  // Parallax glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useTransform(x, [-100, 100], [-40, 40]);
  const glowY = useTransform(y, [-100, 100], [-40, 40]);

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
        className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-72 sm:h-72 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          backgroundColor: "rgba(223,17,17,0.1)",
        }}
        className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 rounded-full blur-3xl"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto bg-white rounded-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(223,17,17,0.25)]
        p-8 sm:p-10 md:p-14 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(223,17,17,0.15)",
            color: "#df1111",
          }}
        >
          <FaBullseye size={26} />
        </motion.div>

        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          style={{ color: "#df1111" }}
        >
          Our Mission
        </h2>

        {/* Divider */}
        <div
          className="w-16 sm:w-20 h-1 mx-auto mb-4 sm:mb-6 rounded-full"
          style={{ backgroundColor: "#df1111" }}
        />

        {/* Typewriter Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg md:text-lg leading-relaxed text-justify sm:text-center md:text-justify"
          style={{ color: "#353535" }}
        >
          <Typewriter text={missionText} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurMission;
