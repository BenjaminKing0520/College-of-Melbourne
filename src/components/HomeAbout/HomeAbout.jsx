import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../assets/Images/about1.jpg";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section
      className="py-16 px-6 md:px-20"
      style={{ backgroundColor: "#F5F5F5" }} // --light
    >
      <div
        className="max-w-6xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden"
        style={{ backgroundColor: "#F5F5F5" }} // --dark
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
          className="w-full md:w-2/5 p-6 flex justify-center"
        >
          <motion.img
            src={AboutImg}
            alt="About Us"
            className="w-64 md:w-full h-auto object-cover rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#df1111" }} // --primary
          >
            About Us
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-24 h-1 mb-6 rounded-full origin-left"
            style={{ backgroundColor: "#df1111" }} // --primary
          />

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="leading-relaxed mb-8 text-justify"
            style={{ color: "#555555" }} // --light text
          >
            Founded in 2021, College of Melbourne is a leading private
            institution of higher education located in Eastern Province, Sri
            Lanka. Specializing in providing students with world-class academic
            programs across multiple disciplines. College of Melbourne is
            dedicated to fostering intellectual growth, innovation, and
            leadership. Our college is a diverse and inclusive environment, and
            commitment to academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Link
              to="/about-college"
              className="inline-block px-6 py-3 rounded-full font-medium tracking-wide shadow-md transition-all duration-300"
              style={{
                backgroundColor: "#df1111", // --primary
                color: "#F5F5F5", // --light
              }}
            >
              Read More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
