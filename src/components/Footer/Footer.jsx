import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp, // ✅ WhatsApp icon
} from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
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
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>

            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              102, Iqrah Vidyalaya Road, Addalaichenai 13
            </p>

            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaPhoneAlt className="text-red-500" />
              +94 76 161 3232 / +94 67 432 0069
            </p>

            <p className="flex items-center text-gray-400 text-sm gap-2">
              <FaEnvelope className="text-red-500" />
              info@collegeofmelbourne.edu.lk
            </p>

            {/* ===== Social Media Links ===== */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition transform hover:-translate-y-1"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-black transition transform hover:-translate-y-1"
              >
                <SiX />
              </a>

              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition transform hover:-translate-y-1"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                <FaLinkedinIn />
              </a>

              {/* ✅ WhatsApp Icon */}
              <a
                href="https://wa.me/94761613232"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition transform hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* ===== Logo ===== */}
          <div className="flex justify-center lg:justify-end items-center lg:w-1/3">
            <img
              src="/Logo.png"
              alt="College Logo"
              className="h-24 w-auto rounded-full border-2 border-gray-700
              shadow-lg transition transform duration-300
              hover:scale-105 hover:shadow-red-500/40"
            />
          </div>
        </div>

        {/* ===== Copyright ===== */}
        <div className="mt-6 text-center text-gray-500 text-sm space-y-1">
          <p>
            &copy; {new Date().getFullYear()} College of Melbourne. All rights
            reserved.
          </p>
          <p className="text-gray-400">
            Developed by{" "}
            <span className="text-red-500 font-medium hover:underline cursor-pointer">
              College of Melbourne IT Team
            </span>
          </p>
        </div>
      </div>

      {/* ===== Scroll To Top ===== */}
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
