import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

const ApplyNow = () => {
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    if (!form.programme.value) newErrors.programme = "Programme is required";
    if (!form.fullName.value) newErrors.fullName = "Full Name is required";
    if (!form.mobile.value) newErrors.mobile = "Mobile Number is required";
    if (!form.email.value) newErrors.email = "Email is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      form.reset();
    }
  };

  return (
    <>
      <motion.section
        className="min-h-screen px-4 sm:px-8 md:px-16 py-10 sm:py-12"
        style={{ backgroundColor: LIGHT }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            style={{ color: DARK }}
          >
            Apply Now
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Don&apos;t miss the opportunity to shape your future
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            {/* Programme Section */}
            <div>
              <h2
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-l-4 pl-3"
                style={{ borderColor: PRIMARY, color: DARK }}
              >
                01. Programme Applied For
              </h2>

              <select
                name="programme"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
              >
                <option value="">Select Programme</option>

                <optgroup label="Foundation">
                  <option>Foundation in English</option>
                  <option>Foundation in IT</option>
                </optgroup>

                <optgroup label="Diploma">
                  <option>Diploma in Business Management</option>
                  <option>Diploma in IT</option>
                  <option>Diploma in Graphic Design</option>
                  <option>Diploma in Software Engineering</option>
                </optgroup>

                <optgroup label="Degree">
                  <option>Bachelor of Business Administration</option>
                  <option>BSc in Information Technology</option>
                  <option>BSc in Cyber Security</option>
                </optgroup>

                <optgroup label="Master's">
                  <option>MBA</option>
                  <option>MSc in Information Technology</option>
                </optgroup>
              </select>

              {errors.programme && (
                <p className="text-sm text-red-500 mt-1">{errors.programme}</p>
              )}
            </div>

            {/* Personal Details */}
            <div>
              <h2
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-l-4 pl-3"
                style={{ borderColor: PRIMARY, color: DARK }}
              >
                02. Personal Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                {errors.fullName && (
                  <p className="text-sm text-red-500 md:col-span-2">
                    {errors.fullName}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Name with Initial"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input
                  type="date"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                <textarea
                  rows="2"
                  placeholder="Current Address"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 md:col-span-2 text-sm sm:text-base"
                />

                <textarea
                  rows="2"
                  placeholder="Permanent Address"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 md:col-span-2 text-sm sm:text-base"
                />

                <input
                  type="text"
                  placeholder="NIC Number"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile Number"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                {errors.mobile && (
                  <p className="text-sm text-red-500 md:col-span-2">
                    {errors.mobile}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Telephone Number"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 md:col-span-2 text-sm sm:text-base"
                />

                {errors.email && (
                  <p className="text-sm text-red-500 md:col-span-2">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full sm:w-auto px-10 py-3 rounded-lg text-white font-semibold transition"
                style={{ backgroundColor: PRIMARY }}
              >
                Apply Now
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.section>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 text-center w-full max-w-sm shadow-xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.div
              className="mx-auto mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full"
              style={{ backgroundColor: PRIMARY }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-white text-2xl sm:text-3xl">✓</span>
            </motion.div>

            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: DARK }}
            >
              Application Submitted!
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Your application was submitted successfully.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSuccess(false)}
              className="w-full sm:w-auto px-6 py-2 rounded-lg text-white font-semibold"
              style={{ backgroundColor: PRIMARY }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default ApplyNow;
