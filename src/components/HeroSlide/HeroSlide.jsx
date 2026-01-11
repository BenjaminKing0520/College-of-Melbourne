import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
            className="relative font-extrabold text-white
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
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
    <div className="relative w-full h-[90vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
      {/* 🌊 Parallax Background */}
      <motion.img
        src="/Carousel-1.jpg"
        alt="hero"
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 💧 Water Bubble Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-white/40"
            style={{
              width: `${10 + i * 2}px`,
              height: `${10 + i * 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-100px`,
            }}
            animate={{ y: [-50, -1000], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* 🫧 Glass Content Card - Left Aligned */}
      <div className="relative z-10 h-full flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            rounded-2xl
            max-w-full
            sm:max-w-md
            md:max-w-lg
            lg:max-w-xl
            p-4 sm:p-6 md:p-8 lg:p-10
          "
        >
          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mb-4 origin-left"
          />

          {/* Heading with TrueFocus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white">
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
            className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-full"
          >
            — Bright Future is Here —
          </motion.p>

          {/* Apply Now Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255,0,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="
              mt-4 sm:mt-5 md:mt-6
              px-4 sm:px-5 md:px-6
              py-2 sm:py-2.5 md:py-3
              rounded-full
              font-bold
              text-white
              bg-gradient-to-r from-red-600 via-pink-600 to-orange-500
              hover:from-orange-500 hover:to-red-600
              transition-all duration-500
              text-sm sm:text-base md:text-lg
            "
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>

      {/* 🔽 Swipe Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 sm:w-7 h-10 sm:h-12 rounded-full border-2 border-white/70 flex justify-center">
          <motion.span
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 18, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-[10px] sm:text-xs tracking-widest text-white/80 uppercase">
          Swipe
        </span>
      </motion.div>
    </div>
  );
}
