import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== STUDENT TESTIMONIALS DATA =====
const testimonials = [
  {
    id: 1,
    name: "Rohan Benjamin",
    course: "Degree Programs",
    image: "/students/s1.jpg",
    message:
      "The college provided excellent guidance and support. Faculty were always approachable and classes were engaging.",
  },
  {
    id: 2,
    name: "Anjali Kumar",
    course: "Diploma Courses",
    image: "/students/s2.jpg",
    message:
      "I loved the practical approach to learning. The workshops helped me develop real-world skills.",
  },
  {
    id: 3,
    name: "Siddharth Rao",
    course: "Foundation Programs",
    image: "/students/s3.jpg",
    message:
      "Amazing campus life and supportive peers! The environment motivated me to achieve my best.",
  },
  {
    id: 4,
    name: "Priya Singh",
    course: "Professional Certifications",
    image: "/students/s4.jpg",
    message:
      "I gained confidence and practical knowledge. Highly recommend this college for anyone seeking quality education.",
  },
];

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Student <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Hear what our students have to say about their experience at our
            college.
          </p>
        </div>

        {/* ===== TESTIMONIAL SLIDER ===== */}
        <div className="relative bg-white shadow-lg rounded-xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            >
              {/* Student Image */}
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />

              {/* Student Info */}
              <div className="text-center sm:text-left">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                  "{testimonials[currentIndex].message}"
                </p>
                <h3 className="mt-4 font-semibold text-gray-900 text-lg sm:text-xl">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-red-600 text-sm sm:text-base">
                  {testimonials[currentIndex].course}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-red-600 text-2xl sm:text-3xl font-bold"
          >
            &#8249;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-red-600 text-2xl sm:text-3xl font-bold"
          >
            &#8250;
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-red-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
