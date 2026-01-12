import React, { useEffect, useRef, useState } from "react";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

const courses = [
  {
    id: 1,
    title: "Foundation in IT",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "Certificate in Business",
    category: "Certificate",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "Diploma in Software",
    category: "Diploma",
    image: "https://images.unsplash.com/photo-1581091012184-5c8c39d2b8b0",
  },
  {
    id: 4,
    title: "HND in Computing",
    category: "HND",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
  {
    id: 5,
    title: "Degree in IT",
    category: "Degree",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 6,
    title: "Masters in Data Science",
    category: "Masters",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
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

  const filtered =
    active === "All" ? courses : courses.filter((c) => c.category === active);
  const radius = 190;

  /* 🔄 AUTO ROTATE */
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation((r) => r + 0.15);
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  /* 🖱️ DRAG HANDLERS */
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

  /* 📄 CLICK COURSE */
  const onCourseClick = (course) => {
    alert(`Open details for: ${course.title}`);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: DARK, color: LIGHT }}
    >
      <h2 className="text-4xl font-bold mb-8">
        Our <span style={{ color: PRIMARY }}>Courses</span>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-5 py-2 rounded-md text-sm font-semibold transition"
            style={{
              background: active === cat ? PRIMARY : "#ffffff15",
              color: active === cat ? "#fff" : LIGHT,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Circular Box Cards */}
      <div
        className="relative w-[460px] h-[460px] cursor-grab active:cursor-grabbing"
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
                className="w-40 h-48 rounded-lg shadow-xl overflow-hidden cursor-pointer transition-transform group"
                style={{
                  background: LIGHT,
                  color: DARK,
                  border: `2px solid ${PRIMARY}`,
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-28 object-cover"
                />

                <div className="p-3 text-center">
                  <p className="text-sm font-semibold leading-tight">
                    {course.title}
                  </p>
                  <span className="text-xs" style={{ color: PRIMARY }}>
                    {course.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span
                    className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md"
                    style={{ background: PRIMARY }}
                  >
                    View Course
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center font-bold shadow-2xl"
            style={{ background: PRIMARY, color: "#fff" }}
          >
            COURSES
          </div>
        </div>
      </div>
    </section>
  );
}
