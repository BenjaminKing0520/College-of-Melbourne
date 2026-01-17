import React from "react";
import { motion } from "framer-motion";
import ChairmanImg from "../../assets/Images/chairman.jpg"; // ✅ Adjust path if needed
import Footer from "../../components/Footer/Footer";

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const ChairmanMessage = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side - Image with animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={ChairmanImg}
              alt="Chairman"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Right Side - Text with staggered animation */}
          <div className="w-full md:w-1/2">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Message from the Chairman
            </motion.h2>

            {[
              "Dear Students, Staff, and Community Members,",
              "Welcome to our institution, where we strive for excellence in education and holistic development. It has always been our mission to foster a nurturing and innovative learning environment, where every student can achieve their fullest potential. Our dedicated faculty and staff are committed to guiding you through this journey of growth and success.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas, temporibus sapiente dolorum minus, maxime totam aut nihil ipsam harum praesentium dicta nisi asperiores cumque perferendis illo quo ut assumenda.",
              "Thank you for being a part of our family, and we look forward to achieving great milestones together.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg"
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}

            <motion.p
              className="text-gray-800 font-semibold mt-6 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Best Regards,
              <br />
              Chairman Name
            </motion.p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ChairmanMessage;
