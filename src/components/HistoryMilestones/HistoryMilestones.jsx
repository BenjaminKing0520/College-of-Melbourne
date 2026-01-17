import { motion } from "framer-motion";

/* =======================
   THEME COLORS
======================= */
const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

/* =======================
   Milestones Data
======================= */
const milestones = [
  {
    year: "2021",
    title: "Foundation & First Launch",
    desc: "College of Melbourne was founded in 2021 with a clear vision to provide industry-focused education. We launched our first Certificate Programs, focusing on practical skills and hands-on learning.",
  },
  {
    year: "2022",
    title: "Innovation & Research Expansion",
    desc: "Established the Center for Innovation and Research, supporting pioneering research in web development and modern technologies.",
  },
  {
    year: "2023",
    title: "Diploma Program Introduction",
    desc: "Introduced Diploma Programs designed to bridge foundational education and advanced professional studies.",
  },
  {
    year: "2024",
    title: "Graduate & Honors Programs",
    desc: "Launched our first Graduate Program in Business Administration and BSc (Hons) in Information Technology.",
  },
];

/* =======================
   Component
======================= */
export default function HistoryMilestones() {
  return (
    <section className="py-20 px-6 md:px-16" style={{ backgroundColor: LIGHT }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl font-bold" style={{ color: DARK }}>
          History & Milestones
        </h2>
        <p className="mt-4 text-gray-600">
          Since our founding in 2021, College of Melbourne has grown from a
          small campus with a few students to a vibrant community. Some of our
          key milestones including:
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line Animation */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px]"
          style={{ backgroundColor: PRIMARY }}
        />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-20 flex w-full ${
                isLeft ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              <div
                className="relative w-full md:w-[45%] p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: "#fff" }}
              >
                {/* Year Badge (STATIC) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -top-6 left-6 px-4 py-2 rounded-full font-bold text-white"
                  style={{
                    backgroundColor: PRIMARY,
                    boxShadow: `0 0 20px ${PRIMARY}`,
                  }}
                >
                  {m.year}
                </motion.div>

                <h3
                  className="mt-6 text-xl font-semibold"
                  style={{ color: DARK }}
                >
                  {m.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
