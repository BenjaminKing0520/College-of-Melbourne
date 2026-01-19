import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

/* ===================== TrueFocus Component ===================== */
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
    <div ref={containerRef} className="relative flex flex-wrap gap-2">
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
        }}
        transition={{ duration: animationDuration }}
      />
    </div>
  );
};

/* ===================== HeroSlider Component ===================== */
export default function HeroSlider() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "15%"]);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] lg:h-[90vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.img
        src="/Carousel-1.jpg"
        alt="hero"
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Water Bubble Effect */}
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

      {/* Glass Content */}
      <div className="relative z-30 h-full flex items-center px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 max-w-xl"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mb-4" />

          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The Right Pathway <br />
            <TrueFocus
              sentence="Your Future Dream"
              blurAmount={6}
              animationDuration={0.5}
              pauseBetweenAnimations={0.5}
            />
          </div>

          <p className="mt-3 text-gray-200 text-base sm:text-lg">
            — Bright Future is Here —
          </p>

          {/* Apply Now Button */}
          <Link to="/apply-now">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 rounded-full bg-red-600 text-white shadow-lg"
            >
              Apply Now →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Swipe Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <motion.span
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        {/* Swipe Text */}
        <p className="mt-2 text-white/80 text-sm font-medium">Swipe</p>
      </motion.div>
      {/* Phone Button & Half-Circle Contact Popup */}
      <div className="relative">
        <motion.button
          onClick={() => setShowContact(!showContact)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-red-600 shadow-xl flex items-center justify-center"
        >
          <FaPhoneAlt className="text-white text-xl sm:text-2xl" />
        </motion.button>

        {/* Half-Circle Contact Popup */}
        <AnimatePresence>
          {showContact && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-20 z-50 w-48 h-32 rounded-l-full bg-white/90 backdrop-blur-lg shadow-xl p-4 flex flex-col justify-center items-start"
            >
              <h4 className="font-bold text-gray-800 mb-1">Contact</h4>
              <p className="text-sm text-gray-700 mb-1">📅 Sat – Thu</p>
              <p className="text-sm text-gray-700 mb-1">⏰ 9:00 AM – 5:00 PM</p>
              <p className="text-sm text-gray-700">
                📞{" "}
                <a href="tel:761613232" className="text-red-600 font-semibold">
                  761613232
                </a>
              </p>

              <button
                onClick={() => setShowContact(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
