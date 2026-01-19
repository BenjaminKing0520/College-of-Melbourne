import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Particles = () => {
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCount(8); // fewer particles for mobile
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#df1111]/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{ y: "-=200", opacity: [0, 1, 0] }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const StrengthCard = ({ icon: Icon, value, label, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value]);

  const throttle = (func, limit = 16) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleMouseMove = throttle((e) => {
    if (isTouch) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set((y / rect.height - 0.5) * -12);
    rotateY.set((x / rect.width - 0.5) * 12);
  }, 16);

  const resetTilt = () => {
    if (isTouch) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        group
        backdrop-blur-xl bg-[#F5F5F5]/20
        border border-[#df1111]/30
        rounded-2xl p-6 text-center
        shadow-lg hover:shadow-2xl
        transition
        transform-gpu
      "
    >
      {/* Icon */}
      <motion.div
        whileHover={!isTouch ? { scale: 1.15 } : {}}
        className="
          mx-auto mb-4 w-fit p-4 rounded-full
          bg-[#df1111]/20
          group-hover:shadow-[0_0_30px_#df1111]
          transition
        "
      >
        <Icon className="text-[#df1111] text-3xl" />
      </motion.div>

      {/* Counter */}
      <h3 className="text-4xl font-bold text-[#353535] drop-shadow">
        <motion.span>{rounded}</motion.span>
        <motion.span
          className="text-[#df1111]"
          animate={isInView ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          {suffix}
        </motion.span>
      </h3>

      <p className="mt-2 text-[#353535]/80 font-medium">{label}</p>
    </motion.div>
  );
};

const OurStrengths = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F5F5F5]">
      {/* Background */}
      <Particles />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-[#353535]"
        >
          Our <span className="text-[#df1111]">Strengths</span>
        </motion.h2>

        <p className="text-center text-[#353535]/80 mt-4 max-w-xl mx-auto">
          Empowering students with excellence, knowledge, and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <StrengthCard
            icon={FaGraduationCap}
            value={15}
            suffix="+"
            label="Years of Education Excellence"
          />
          <StrengthCard
            icon={FaUserGraduate}
            value={2500}
            suffix="+"
            label="Students"
          />
          <StrengthCard
            icon={FaBookOpen}
            value={45}
            suffix="+"
            label="Courses"
          />
          <StrengthCard
            icon={FaChalkboardTeacher}
            value={120}
            suffix="+"
            label="Lecturers"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
