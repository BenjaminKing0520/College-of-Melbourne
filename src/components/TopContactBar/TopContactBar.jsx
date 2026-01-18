import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const TopContactBar = () => {
  const hoverX =
    "transition-transform duration-300 hover:scale-125 hover:text-[#df1111]";
  const hoverClassFB =
    "transition-transform duration-300 hover:scale-125 hover:text-[#1877F2]";
  const hoverClassInstagram =
    "transition-transform duration-300 hover:scale-125 hover:text-[#E4405F]";
  const hoverClassLink =
    "transition-transform duration-300 hover:scale-125 hover:text-[#0A66C2]";
  const hoverClassWhatsApp =
    "transition-transform duration-300 hover:scale-125 hover:text-[#25D366]";

  return (
    <div className="bg-[#353535] text-[#F5F5F5] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Right aligned */}
        <div className="flex justify-end items-center py-2">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverClassFB}
            >
              <FaFacebookF className="text-lg sm:text-xl md:text-2xl" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverClassInstagram}
            >
              <FaInstagram className="text-lg sm:text-xl md:text-2xl" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94761613232"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverClassWhatsApp}
            >
              <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
            </a>

            {/* X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${hoverX} font-bold text-lg sm:text-xl md:text-2xl`}
            >
              X
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverClassLink}
            >
              <FaLinkedinIn className="text-lg sm:text-xl md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
