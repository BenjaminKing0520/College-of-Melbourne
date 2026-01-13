import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUsers,
  FaMoneyBillWave,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ================= FEATURES ================= */
const features = [
  {
    title: "Quality Courses",
    desc: "Industry-oriented curriculum designed to build strong knowledge and practical skills.",
    icon: FaGraduationCap,
  },
  {
    title: "Experienced Lecture Panel",
    desc: "Highly qualified and experienced lecturers guiding students towards academic excellence.",
    icon: FaUsers,
  },
  {
    title: "Low Cost Education",
    desc: "Affordable course fees ensuring quality education is accessible to everyone.",
    icon: FaMoneyBillWave,
  },
];

/* ================= COURSE HIGHLIGHTS ================= */
const courses = [
  "Foundation Programs",
  "Diploma Courses",
  "Higher National Diploma (HND)",
  "Degree Programs",
  "Professional Certifications",
  "International Programs",
];

/* ================= IMAGE SLIDER ================= */
const images = ["/feature.jpg", "/portfolio-1.jpg", "/portfolio-2.jpg"];

const WhyChooseUs = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  /* Auto image slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  /* Auto course carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      nextCourse();
    }, 3000);
    return () => clearInterval(timer);
  }, [courseIndex]);

  const nextCourse = () => {
    setCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-red-600">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Quality education, expert guidance, and affordable learning —
            shaping your future with excellence.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== Image Slider ===== */}
          <div className="relative h-[240px] sm:h-[320px] md:h-[360px]">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="College"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImg ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>

          {/* ===== Features ===== */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-xl
                  bg-white/60 backdrop-blur-lg
                  border border-white/40
                  shadow-lg hover:shadow-2xl transition"
              >
                <item.icon size={34} className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= COURSE HIGHLIGHTS CAROUSEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            🎓 Course <span className="text-red-600">Highlights</span>
          </h3>

          <div className="relative max-w-xl mx-auto">
            {/* Course Card */}
            <motion.div
              key={courseIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-lg
                border border-white/40
                rounded-2xl p-8 shadow-xl
                flex items-center justify-center gap-4"
            >
              <FaBookOpen className="text-red-600 text-2xl" />
              <p className="text-gray-800 font-semibold text-base sm:text-lg text-center">
                {courses[courseIndex]}
              </p>
            </motion.div>

            {/* Controls */}
            <button
              onClick={prevCourse}
              className="absolute left-0 top-1/2 -translate-y-1/2
                bg-white/80 p-3 rounded-full shadow hover:bg-white"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextCourse}
              className="absolute right-0 top-1/2 -translate-y-1/2
                bg-white/80 p-3 rounded-full shadow hover:bg-white"
            >
              <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {courses.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === courseIndex ? "bg-red-600" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
