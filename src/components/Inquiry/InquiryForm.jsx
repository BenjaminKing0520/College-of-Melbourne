import React, { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  "Foundation Programs",
  "Diploma Courses",
  "Higher National Diploma (HND)",
  "Degree Programs",
  "Professional Certifications",
];

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    // You can integrate API or backend logic here
    setFormData({ name: "", email: "", mobile: "", course: "", message: "" });
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Inquiry <span className="text-red-600">Form</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Fill out the form below and we will get back to you shortly.
          </p>
        </motion.div>

        {/* ===== FORM ===== */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            />
          </div>

          {/* Select Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Select Course <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 bg-white"
            >
              <option value="">-- Select a course --</option>
              {courses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default InquiryForm;
