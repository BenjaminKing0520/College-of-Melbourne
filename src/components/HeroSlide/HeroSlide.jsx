import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// TrueFocus Component
const TrueFocus = ({
  sentence = "Your Future Dream",
  blurAmount = 6,
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-wrap gap-2 justify-start"
    >
      {words.map((word, idx) => {
        const isActive = idx === currentIndex;
        return (
          <span
            key={idx}
            ref={(el) => (wordRefs.current[idx] = el)}
            className="relative font-extrabold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none rounded-lg border-2 border-yellow-400/60"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1,
        }}
        transition={{ duration: animationDuration }}
      />
    </div>
  );
};

// HeroSlider Component
export default function HeroSlider() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "15%"]);

  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] lg:h-[90vh] overflow-hidden">
      {/* 🌊 Parallax Background */}
      <motion.img
        src="/Carousel-1.jpg"
        alt="hero"
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 💧 Water Bubble Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-white/40 bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-100px`,
            }}
            animate={{ y: [-50, -1000], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* 🫧 Glass Content Card */}
      <div className="relative z-30 h-full flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10"
        >
          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mb-4 origin-left"
          />

          {/* Heading with TrueFocus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-left">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white">
                The Right Pathway <br />
                <TrueFocus
                  sentence="Your Future Dream"
                  blurAmount={6}
                  animationDuration={0.5}
                  pauseBetweenAnimations={0.5}
                />
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-full"
          >
            — Bright Future is Here —
          </motion.p>

          {/* ✅ Apply Now Button */}
          <Link to="/apply-now">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(223,17,17,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 rounded-full font-medium tracking-wide shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{ backgroundColor: "#df1111", color: "#F5F5F5" }}
            >
              Apply Now →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 🔽 Swipe Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-4 sm:w-5 md:w-6 h-8 sm:h-10 md:h-12 rounded-full border-2 border-white/70 flex justify-center">
          <motion.span
            className="w-1 h-1 sm:w-1.5 md:w-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 18, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[8px] sm:text-[10px] md:text-xs tracking-widest text-white/80 uppercase">
          Swipe
        </span>
      </motion.div>
    </div>
  );
}
