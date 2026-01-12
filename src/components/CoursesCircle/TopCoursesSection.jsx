import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

// Courses array with actual route for navigation
const courses = [
  {
    id: 1,
    title: "Foundation Courses",
    category: "Foundation",
    image: "/portfolio-1.jpg",
    route: "/courses/foundation",
  },
  {
    id: 2,
    title: "Professional Certificate Courses",
    category: "Certificate",
    image: "/portfolio-2.jpg",
    route: "/courses/certificate",
  },
  {
    id: 3,
    title: "Diploma Courses",
    category: "Diploma",
    image: "/portfolio-3.jpg",
    route: "/courses/diploma",
  },
  {
    id: 4,
    title: "Higher National Diploma Programs",
    category: "HND",
    image: "/portfolio-4.jpg",
    route: "/courses/hnd",
  },
  {
    id: 5,
    title: "Degree Programs",
    category: "Degree",
    image: "/portfolio-6.jpg",
    route: "/courses/degree",
  },
  {
    id: 6,
    title: "Master's Programs",
    category: "Masters",
    image: "/portfolio-6.jpg",
    route: "/courses/masters",
  },
];

const categories = [
  "All",
  "Foundation",
  "Certificate",
  "Diploma",
  "HND",
  "Degree",
  "Masters",
];

export default function CircularCoursesBox() {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const containerRef = useRef(null);
  const [radius, setRadius] = useState(150);
  const [cardSize, setCardSize] = useState({ width: 120, height: 160 });

  // Responsive radius & card size based on container width
  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || 600;

      // Adjust radius: smaller on mobile, larger on desktop
      let newRadius;
      if (width < 400) newRadius = width / 2.8;
      else if (width < 768) newRadius = width / 2.5;
      else newRadius = width / 2.2;
      setRadius(newRadius);

      // Adjust card size
      let newWidth = Math.max(100, width / 4);
      let newHeight = Math.max(140, width / 3);
      setCardSize({ width: newWidth, height: newHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered =
    active === "All" ? courses : courses.filter((c) => c.category === active);

  // Auto-rotate
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => setRotation((r) => r + 0.15), 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    setRotation((r) => r + delta * 0.2);
    startX.current = e.clientX;
  };
  const stopDrag = () => setIsDragging(false);

  // Navigate to specific course page
  const onViewCourse = (course) => {
    navigate(course.route);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ background: DARK, color: LIGHT }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
        Our <span style={{ color: PRIMARY }}>Courses</span>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-sm font-semibold transition"
            style={{
              background: active === cat ? PRIMARY : "#ffffff15",
              color: active === cat ? "#fff" : LIGHT,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Circular Box */}
      <div
        ref={containerRef}
        className="relative w-[90vw] max-w-[600px] aspect-square cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {filtered.map((course, index) => {
          const angle = (360 / filtered.length) * index + rotation;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={course.id}
              className="absolute top-1/2 left-1/2 transition-transform duration-300"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <div
                className="rounded-lg shadow-xl overflow-hidden transition-transform group"
                style={{
                  width: `${cardSize.width}px`,
                  height: `${cardSize.height}px`,
                  background: LIGHT,
                  color: DARK,
                  border: `2px solid ${PRIMARY}`,
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-cover"
                  style={{ height: `${cardSize.height * 0.6}px` }}
                />
                <div className="p-1 sm:p-2 md:p-3 text-center">
                  <p className="text-[9px] sm:text-xs md:text-sm font-semibold leading-tight">
                    {course.title}
                  </p>
                  <span
                    className="text-[8px] sm:text-[10px] md:text-xs"
                    style={{ color: PRIMARY }}
                  >
                    {course.category}
                  </span>
                </div>

                {/* Button triggers navigation */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button
                    onClick={() => onViewCourse(course)}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary text-white text-[9px] sm:text-xs md:text-sm font-bold rounded-md"
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="rounded-full flex items-center justify-center font-bold shadow-2xl text-[10px] sm:text-xs md:text-sm"
            style={{
              width: `${Math.max(cardSize.width, cardSize.height) * 1.2}px`,
              height: `${Math.max(cardSize.width, cardSize.height) * 1.2}px`,
              background: PRIMARY,
              color: "#fff",
            }}
          >
            COURSES
          </div>
        </div>
      </div>
    </section>
  );
}
