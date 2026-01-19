import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ===== Hamburger/X Toggle ===== */
const AnimatedMenuToggle = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 focus:outline-none z-50"
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

/* ===== Chevron ===== */
const Chevron = ({ isOpen }) => (
  <motion.span
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    className="inline-block ml-1 text-white text-xs"
  >
    ▼
  </motion.span>
);

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div className="bg-gradient-to-r from-[#df1111] via-black to-[#df1111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* ===== Logo ===== */}
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src="/Web Logo white-01.png"
                alt="College Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* ===== Desktop Menu ===== */}
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-gray-300 text-lg">
                Home
              </Link>

              {/* Desktop About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 text-lg">
                  About <Chevron isOpen={aboutOpen} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl overflow-hidden"
                    >
                      {[
                        { name: "About College", path: "/about-college" },
                        { name: "Chairman Message", path: "/chairman-message" },
                        { name: "CEO Message", path: "/ceo-message" },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-[#df1111] hover:text-white transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/student-gallery"
                className="hover:text-gray-300 text-lg"
              >
                Student Gallery
              </Link>

              {/* Desktop Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCourseOpen(true)}
                onMouseLeave={() => setCourseOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 text-lg">
                  Courses <Chevron isOpen={courseOpen} />
                </button>
                <AnimatePresence>
                  {courseOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl overflow-hidden"
                    >
                      {[
                        "Foundation",
                        "Certificate",
                        "Diploma",
                        "HND",
                        "Degree",
                        "Masters",
                      ].map((course) => (
                        <Link
                          key={course}
                          to={`/courses/${course.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-[#df1111] hover:text-white transition"
                        >
                          {course}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact-us" className="hover:text-gray-300 text-lg">
                Contact Us
              </Link>

              <Link
                to="/apply-now"
                className="px-5 py-2 bg-[#df1111] rounded-lg font-bold hover:bg-black transition"
              >
                Apply Now
              </Link>
            </div>

            {/* ===== Mobile Toggle ===== */}
            <div className="md:hidden">
              <AnimatedMenuToggle
                isOpen={mobileOpen}
                toggle={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </div>
        </div>

        {/* ===== Mobile Menu (Accordion Dropdowns) ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-red/95 px-6 py-4 space-y-2 font-semibold text-lg"
            >
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block hover:text-gray-300 transition-colors"
              >
                Home
              </Link>

              {/* Mobile About Accordion */}
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex justify-between items-center w-full hover:text-gray-300 transition-colors"
              >
                About <Chevron isOpen={aboutOpen} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col space-y-1"
                  >
                    <Link
                      to="/about-college"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-gray-300 transition-colors"
                    >
                      About College
                    </Link>
                    <Link
                      to="/chairman-message"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-gray-300 transition-colors"
                    >
                      Chairman Message
                    </Link>
                    <Link
                      to="/ceo-message"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-gray-300 transition-colors"
                    >
                      CEO Message
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/student-gallery"
                onClick={() => setMobileOpen(false)}
                className="block hover:text-gray-300 transition-colors"
              >
                Student Gallery
              </Link>

              {/* Mobile Courses Accordion */}
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex justify-between items-center w-full hover:text-gray-300 transition-colors"
              >
                Courses <Chevron isOpen={courseOpen} />
              </button>
              <AnimatePresence>
                {courseOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col space-y-1"
                  >
                    {[
                      "Foundation",
                      "Certificate",
                      "Diploma",
                      "HND",
                      "Degree",
                      "Masters",
                    ].map((course) => (
                      <Link
                        key={course}
                        to={`/courses/${course.toLowerCase()}`}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-gray-300 transition-colors"
                      >
                        {course}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="block hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>

              <Link
                to="/apply-now"
                onClick={() => setMobileOpen(false)}
                className="block bg-[#df1111] text-center py-2 rounded-lg font-bold hover:bg-black hover:text-white transition-all"
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
