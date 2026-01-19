import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaShareAlt, // added
} from "react-icons/fa";

const SocialMediaButton = () => {
  const [showIcons, setShowIcons] = useState(false);

  // Social media icons with links
  const iconStyles = [
    {
      color: "#1877F2",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/1G29CoSNkJ/",
    },
    {
      color: "#E4405F",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/collegeofmelbourne?igsh=MTNkZHo4NDM5eW5saQ==",
    },
    {
      color: "#25D366",
      icon: <FaWhatsapp />,
      link: "https://wa.me/94761613232",
    },
    { color: "#df1111", icon: "X", link: "https://x.com" },
    {
      color: "#0A66C2",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/college-of-melbourne/",
    },
  ];

  return (
    <div className="fixed left-8 z-50">
      {/* Main Floating Button */}
      <motion.button
        onClick={() => setShowIcons(!showIcons)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-red-600 shadow-lg flex items-center justify-center text-white text-2xl"
        title="Follow Us"
      >
        {/* Hamburger → Share Icon */}
        <FaShareAlt />
      </motion.button>

      {/* Animated Icon Popup */}
      <AnimatePresence>
        {showIcons && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-2 flex flex-col items-center bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-xl relative"
          >
            {/* Social Icons */}
            <div className="flex flex-col gap-3 items-center mt-4">
              {iconStyles.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  className={`text-xl md:text-2xl font-bold`}
                  style={{ color: item.color }}
                  onClick={() => setShowIcons(false)} // Collapse menu on click
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaButton;
