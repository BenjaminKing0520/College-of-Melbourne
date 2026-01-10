import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopContactBar = () => {
  const hoverX =
    "transition-transform transform hover:scale-125 hover:text-[#df1111]";
  const hoverClassFB =
    "transition-transform transform hover:scale-125 hover:text-[#1877F2]";
  const hoverClassInstagram =
    "transition-transform transform hover:scale-125 hover:text-[#E4405F]";
  const hoverClassLink =
    "transition-transform transform hover:scale-125 hover:text-[#0A66C2]";

  return (
    <div className="bg-[#353535] text-[#F5F5F5] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        {/* Left: Open Time & Phone with slide-in + hover */}
        <motion.div
          className="flex space-x-6 text-md"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, color: "#df1111" }} // Hover effect
        >
          <span>📅 Open: Sat-Thu 9:00AM - 5:00PM</span>
          <span>📞 Phone: 761613232</span>
        </motion.div>

        {/* Right: Social Media Links */}
        <div className="flex space-x-5 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={hoverClassFB}
          >
            <FaFacebookF className="text-2xl" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={hoverClassInstagram}
          >
            <FaInstagram className="text-2xl" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverX} text-2xl font-bold`}
          >
            X
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={hoverClassLink}
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
