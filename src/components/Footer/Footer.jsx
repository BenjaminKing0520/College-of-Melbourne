import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // ✅ Correct import for X logo

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-gray-200 relative pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* ===== Contact Info ===== */}
          <div className="lg:w-2/3 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-2">
              Contact Us
            </h3>

            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaMapMarkerAlt className="text-red-500" /> 102, Iqrah Vidyalaya
              Road, Addalaichenai 13
            </p>
            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaPhoneAlt className="text-red-500" /> +94 76 161 3232 / +94 67
              432 0069
            </p>
            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaEnvelope className="text-red-500" />{" "}
              info@collegeofmelbourne.edu.lk
            </p>

            {/* Floating Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transform hover:-translate-y-1 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transform hover:-translate-y-1 transition duration-300"
              >
                <SiX /> {/* X logo */}
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transform hover:-translate-y-1 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transform hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* ===== College Logo ===== */}
          <div className="flex justify-center lg:justify-end items-center lg:w-1/3">
            <img src="/Logo.png" alt="College Logo" className="h-24 w-auto" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} College of Melbourne. All rights
          reserved.
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition transform hover:-translate-y-1"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
