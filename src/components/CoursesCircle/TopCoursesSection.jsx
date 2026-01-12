import React, { useEffect, useRef, useState } from "react";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

const courses = [
  {
    id: 1,
    title: "Foundation Courses",
    category: "Foundation",
    image: "/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Professional Certificate Courses",
    category: "Certificate",
    image: "/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Diploma Courses",
    category: "Diploma",
    image: "portfolio-3.jpg",
  },
  {
    id: 4,
    title: "Higher National Diploma Programs",
    category: "HND",
    image: "portfolio-4.jpg",
  },
  {
    id: 5,
    title: "Degree Programs",
    category: "Degree",
    image: "portfolio-6.jpg",
  },
  {
    id: 6,
    title: "Master's Programs",
    category: "Masters",
    image: "portfolio-6.jpg",
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
  const [active, setActive] = useState("All");
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const containerRef = useRef(null);
  const [radius, setRadius] = useState(200);
  const [cardSize, setCardSize] = useState({ width: 150, height: 200 });

  // Adjust radius & card size on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || 600;
      setRadius(width / 2.4); // radius ~40% of container
      setCardSize({
        width: Math.max(120, width / 4),
        height: Math.max(160, width / 3),
      });
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
  const onCourseClick = (course) => alert(`Open details for: ${course.title}`);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ background: DARK, color: LIGHT }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
        Our <span style={{ color: PRIMARY }}>Courses</span>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm md:text-sm font-semibold transition"
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
                onClick={() => onCourseClick(course)}
                className="rounded-lg shadow-xl overflow-hidden cursor-pointer transition-transform group"
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
                  className={`w-full object-cover`}
                  style={{ height: `${cardSize.height * 0.6}px` }}
                />
                <div className="p-2 sm:p-3 text-center">
                  <p className="text-xs sm:text-sm md:text-sm font-semibold leading-tight">
                    {course.title}
                  </p>
                  <span
                    className="text-[10px] sm:text-xs"
                    style={{ color: PRIMARY }}
                  >
                    {course.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-xs sm:text-sm font-bold rounded-md"
                    style={{ background: PRIMARY }}
                  >
                    View Course
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="rounded-full flex items-center justify-center font-bold shadow-2xl"
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
