import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ===== EVENTS DATA (MULTI-IMAGE PER EVENT) ===== */
const galleryItems = [
  {
    id: 1,
    title: "Outing with English",
    date: "January 26 2026",
    category: "Workshop",
    images: [
      "/events/English out/Englishout.jpeg",
      "/events/English out/Englishout1.jpeg",
      "/events/English out/Englishout2.jpeg",
      "/events/English out/Englishout3.jpeg",
      "/events/English out/Englishout4.jpeg",
    ],
  },
  {
    id: 2,
    title: "Cultural Festival",
    category: "Events",
    images: [
      "/events/Cultural Festival/e1-2.jpg",
      "/events/Cultural Festival/e1-3.jpg",
      "/events/Cultural Festival/e1.jpg",
      "/events/Cultural Festival/event1.jpeg",
      "/events/Cultural Festival/event2.jpeg",
      "/events/Cultural Festival/IftharM.jpeg",
      "/events/Cultural Festival/Ifthar1.jpeg",
      "/events/Cultural Festival/Ifthar2.jpeg",
      "/events/Cultural Festival/Ifthar3.jpeg",
      "/events/Cultural Festival/Ifthar4.jpeg",
      "/events/Cultural Festival/Ifthar5.jpeg",
      "/events/Cultural Festival/Ifthar6.jpeg",
      "/events/Cultural Festival/IftharFood.jpeg",
    ],
  },
  {
    id: 3,
    title: "Annual Trip",
    date: "August 8 2025",
    category: "Trip",
    images: [
      "/events/Trip/Trip9.jpeg",
      "/events/Trip/Trip.jpeg",
      "/events/Trip/Trip1.jpeg",
      "/events/Trip/Trip2.jpeg",
      "/events/Trip/Trip3.jpeg",
      "/events/Trip/Trip4.jpeg",
      "/events/Trip/Trip5.jpeg",
      "/events/Trip/Trip6.jpeg",
      "/events/Trip/Trip7.jpeg",
    ],
  },
  {
    id: 4,
    title: "Annual Leaving Ceremony",
    date: "December 22 2024",
    category: "Events",
    images: [
      "/events/AnnualLeaving/Annual1.jpeg",
      "/events/AnnualLeaving/Annual2.jpeg",
      "/events/AnnualLeaving/Annual3.jpeg",
      "/events/AnnualLeaving/Annual4.jpeg",
      "/events/AnnualLeaving/Annual5.jpeg",
    ],
  },
  {
    id: 5,
    title: "Coding Bootcamp",
    date: "November 2024",
    category: "Workshop",
    images: ["/events/e5.jpg"],
  },
  {
    id: 6,
    title: "Christmas Festival",
    date: "December 2024",
    category: "Cultural",
    images: [
      "/events/Christmas/Ch1.jpeg",
      "/events/Christmas/Ch2.jpeg",
      "/events/Christmas/Ch3.jpeg",
      "/events/Christmas/Ch4.jpeg",
    ],
  },
];

const categories = ["All", "Events", "Workshop", "Trip", "Cultural"];

const StudentGalleryComponent = () => {
  const [active, setActive] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null); // { eventIndex, imgIndex }

  const filteredItems =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  /* ===== LIGHTBOX FUNCTIONS ===== */
  const closeLightbox = () => setCurrentIndex(null);

  const nextImage = () =>
    setCurrentIndex((prev) => ({
      ...prev,
      imgIndex:
        prev.imgIndex === filteredItems[prev.eventIndex].images.length - 1
          ? 0
          : prev.imgIndex + 1,
    }));

  const prevImage = () =>
    setCurrentIndex((prev) => ({
      ...prev,
      imgIndex:
        prev.imgIndex === 0
          ? filteredItems[prev.eventIndex].images.length - 1
          : prev.imgIndex - 1,
    }));

  /* ===== KEYBOARD SUPPORT ===== */
  useEffect(() => {
    const handleKey = (e) => {
      if (!currentIndex) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Events <span className="text-red-600">Gallery</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore memorable moments from our college events and activities.
          </p>
        </motion.div>

        {/* ===== FILTER ===== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition
                ${
                  active === cat
                    ? "bg-red-600 text-white"
                    : "bg-white shadow hover:bg-red-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() =>
                setCurrentIndex({ eventIndex: index, imgIndex: 0 })
              }
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-52 xl:h-60 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3 sm:p-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX CAROUSEL ===== */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-2 sm:px-4"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-2xl sm:text-3xl z-50"
            >
              <FaTimes />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 text-white text-3xl sm:text-4xl z-50"
            >
              <FaChevronLeft />
            </button>

            {/* Image Display */}
            <motion.div
              key={`${currentIndex.eventIndex}-${currentIndex.imgIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-4xl w-full"
            >
              <img
                src={
                  filteredItems[currentIndex.eventIndex].images[
                    currentIndex.imgIndex
                  ]
                }
                alt={filteredItems[currentIndex.eventIndex].title}
                className="mx-auto max-h-[70vh] sm:max-h-[75vh] rounded-xl object-contain"
              />
              <h3 className="text-white mt-4 text-lg sm:text-xl font-semibold">
                {filteredItems[currentIndex.eventIndex].title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {filteredItems[currentIndex.eventIndex].date}
              </p>
              <p className="text-gray-400 mt-1 sm:mt-2 text-sm">
                {currentIndex.imgIndex + 1} /{" "}
                {filteredItems[currentIndex.eventIndex].images.length}
              </p>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3 sm:mt-4">
                {filteredItems[currentIndex.eventIndex].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setCurrentIndex({
                        ...currentIndex,
                        imgIndex: i,
                      })
                    }
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                      i === currentIndex.imgIndex ? "bg-red-500" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 text-white text-3xl sm:text-4xl z-50"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentGalleryComponent;
