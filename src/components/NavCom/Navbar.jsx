import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Animated Hamburger/X Toggle
const AnimatedMenuToggle = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 focus:outline-none"
  >
    <motion.span
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      className="block w-8 h-1 bg-white rounded"
    />
    <motion.span
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      className="block w-8 h-1 bg-white rounded"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      className="block w-8 h-1 bg-white rounded"
    />
  </button>
);

// Animated Chevron for dropdowns
const Chevron = ({ isOpen }) => (
  <motion.span
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    className="inline-block ml-1 text-white"
  >
    ▼
  </motion.span>
);

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div className="bg-gradient-to-r from-[#df1111] via-black to-[#df1111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/Web Logo white-01.png"
                  alt="College Logo"
                  className="h-10 sm:h-12 md:h-12 lg:h-14 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex flex-wrap space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 items-center font-semibold">
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="text-white hover:text-gray-300 flex items-center gap-1 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  About <Chevron isOpen={aboutOpen} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40 sm:w-48 md:w-52 lg:w-56 overflow-hidden z-20"
                    >
                      {[
                        { name: "About College", path: "/about-college" },
                        { name: "Chairman Message", path: "/chairman-message" },
                        { name: "CEO Message", path: "/ceo-message" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.name}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileItemVariants}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setAboutOpen(false)}
                            className="block px-4 py-2 text-sm sm:text-base md:text-base lg:text-base hover:bg-[#df1111] hover:text-gray-300 transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/student-gallery"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Student Gallery
              </Link>

              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCourseOpen(!courseOpen)}
                  className="text-white hover:text-gray-300 flex items-center gap-1 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Courses <Chevron isOpen={courseOpen} />
                </button>
                <AnimatePresence>
                  {courseOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40 sm:w-48 md:w-52 lg:w-56 overflow-hidden z-20"
                    >
                      {[
                        "Foundation",
                        "Certificate",
                        "Diploma",
                        "HND",
                        "Degree",
                        "Masters",
                      ].map((course, i) => (
                        <motion.div
                          key={course}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileItemVariants}
                        >
                          <Link
                            to={`/courses/${course.toLowerCase()}`}
                            onClick={() => setCourseOpen(false)}
                            className="block px-4 py-2 text-sm sm:text-base md:text-base lg:text-base hover:bg-[#df1111] hover:text-gray-300 transition-colors duration-300"
                          >
                            {course}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact-us"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Contact Us
              </Link>

              <Link
                to="/apply-now"
                className="ml-2 sm:ml-4 px-3 sm:px-5 py-2 sm:py-2 md:py-2 bg-[#df1111] text-white font-bold rounded-lg hover:bg-black hover:text-gray-300 transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base md:text-base lg:text-base"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <AnimatedMenuToggle
                isOpen={mobileOpen}
                toggle={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-r from-[#df1111] via-black to-[#df1111] px-4 pt-2 pb-4 space-y-1 overflow-hidden"
            >
              {/* Mobile Links */}
              {[
                { name: "Home", path: "/" },
                { name: "Student Gallery", path: "/student-gallery" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileItemVariants}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* About Mobile */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full text-left px-2 py-2 text-white hover:text-gray-300 rounded flex justify-between items-center transition-colors duration-300"
                >
                  About <Chevron isOpen={aboutOpen} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-1 space-y-1 overflow-hidden"
                    >
                      {[
                        { name: "About College", path: "/about-college" },
                        { name: "Chairman Message", path: "/chairman-message" },
                        { name: "CEO Message", path: "/ceo-message" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.name}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileItemVariants}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-2 py-1 hover:bg-black hover:text-gray-300 rounded transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Courses Mobile */}
              <div>
                <button
                  onClick={() => setCourseOpen(!courseOpen)}
                  className="w-full text-left px-2 py-2 text-white hover:text-gray-300 rounded flex justify-between items-center transition-colors duration-300"
                >
                  Courses <Chevron isOpen={courseOpen} />
                </button>
                <AnimatePresence>
                  {courseOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-1 space-y-1 overflow-hidden"
                    >
                      {[
                        "Foundation",
                        "Certificate",
                        "Diploma",
                        "HND",
                        "Degree",
                        "Masters",
                      ].map((course, i) => (
                        <motion.div
                          key={course}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileItemVariants}
                        >
                          <Link
                            to={`/courses/${course.toLowerCase()}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-2 py-1 hover:bg-black hover:text-gray-300 rounded transition-colors duration-300"
                          >
                            {course}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/apply-now"
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 mt-1 bg-[#df1111] text-white font-bold rounded-lg hover:bg-black hover:text-gray-300 transition-all duration-300 shadow-md"
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
