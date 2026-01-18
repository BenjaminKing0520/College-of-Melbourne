import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import EnglishImg from "../../assets/Images/cer_eng.png";
import ITImg from "../../assets/Images/cer_it.jpg";

const coursesData = [
  {
    id: 1,
    title: "Certificate in English",
    image: EnglishImg,
    duration: "3 Months",
    credits: "No credits",
    studyMode: "Blended (Physical and Online)",
    entry: "Open to all",
    modules: ["English Grammar", "Writing Skills", "Listening and Speaking"],
  },
  {
    id: 2,
    title: "Certificate in IT",
    image: ITImg,
    duration: "6 Months",
    credits: "No credits",
    studyMode: "Online",
    entry: "Basic computer knowledge",
    modules: ["Computer Basics", "Programming Fundamentals", "Web Development"],
  },
  {
    id: 3,
    title: "Certificate in Business Studies",
    image: "/business.jpg",
    duration: "4 Months",
    credits: "No credits",
    studyMode: "Physical",
    entry: "Open to all",
    modules: [
      "Introduction to Business",
      "Marketing Basics",
      "Entrepreneurship",
    ],
  },
  {
    id: 4,
    title: "Certificate in Graphic Design",
    image: "/design.jpg",
    duration: "5 Months",
    credits: "No credits",
    studyMode: "Blended (Physical and Online)",
    entry: "Basic computer knowledge",
    modules: [
      "Design Principles",
      "Photoshop & Illustrator",
      "Creative Projects",
    ],
  },
  {
    id: 5,
    title: "Certificate in Digital Marketing",
    image: "/digital-marketing.jpg",
    duration: "4 Months",
    credits: "No credits",
    studyMode: "Online",
    entry: "Open to all",
    modules: ["SEO Basics", "Social Media Marketing", "Online Advertising"],
  },
  {
    id: 6,
    title: "Certificate in Accounting",
    image: "/accounting.jpg",
    duration: "6 Months",
    credits: "No credits",
    studyMode: "Physical",
    entry: "Basic math knowledge",
    modules: ["Financial Accounting", "Bookkeeping", "Basic Taxation"],
  },
];

const menuVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, x: 5 },
  tap: { scale: 0.95 },
};

const detailVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const Masters = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleApplyNow = () => navigate("/apply-now");

  return (
    <>
      <section className="py-12 px-4 sm:px-8 md:px-16 bg-gray-50 min-h-screen">
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Master's Programs
        </h1>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6 md:gap-8">
          {/* Left Menu */}
          <div className="md:w-1/4 flex flex-col gap-3 sm:gap-4">
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`cursor-pointer p-3 sm:p-4 rounded-lg text-base sm:text-lg font-semibold transition-all border-l-4 ${
                  selectedCourse?.id === course.id
                    ? "border-red-600 bg-red-100 text-red-700 shadow-lg"
                    : "border-transparent bg-white text-gray-800 hover:bg-red-50 hover:border-red-400"
                }`}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                {course.title}
              </motion.div>
            ))}
          </div>

          {/* Right Details */}
          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              {selectedCourse && (
                <motion.div
                  key={selectedCourse.id}
                  variants={detailVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl relative"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-red-600 font-bold text-xl sm:text-2xl transition"
                    aria-label="Close"
                  >
                    &times;
                  </button>

                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Image */}
                    <motion.img
                      src={selectedCourse.image}
                      alt={selectedCourse.title}
                      className="w-full sm:w-1/3 h-48 sm:h-64 object-cover rounded-xl shadow-lg flex-shrink-0"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                    />

                    {/* Details */}
                    <motion.div
                      className="sm:w-2/3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Heading with half red border */}
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 pl-4 border-l-4 border-red-600">
                        {selectedCourse.title}
                      </h2>

                      <ul className="mb-4 text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>
                          <span className="font-semibold">Duration:</span>{" "}
                          {selectedCourse.duration}
                        </li>
                        <li>
                          <span className="font-semibold">Credits:</span>{" "}
                          {selectedCourse.credits}
                        </li>
                        <li>
                          <span className="font-semibold">Study Mode:</span>{" "}
                          {selectedCourse.studyMode}
                        </li>
                        <li>
                          <span className="font-semibold">
                            Entry Requirements:
                          </span>{" "}
                          {selectedCourse.entry}
                        </li>
                        <li>
                          <span className="font-semibold">Modules:</span>
                          <ul className="list-disc list-inside ml-4 mt-1">
                            {selectedCourse.modules.map((module, idx) => (
                              <li key={idx}>{module}</li>
                            ))}
                          </ul>
                        </li>
                      </ul>

                      <button
                        onClick={handleApplyNow}
                        className="px-5 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Masters;
