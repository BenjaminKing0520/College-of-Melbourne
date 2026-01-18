import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <>
      <section
        className="min-h-screen px-4 sm:px-8 md:px-16 py-8 sm:py-12"
        style={{ backgroundColor: LIGHT }}
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: DARK }}
        >
          Contact Us
        </h1>

        <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-10 rounded-xl overflow-hidden shadow-lg border">
          <iframe
            title="College Location"
            src="https://www.google.com/maps?q=Iqrah%20Vidyalaya%20Road%20Addalaichenai&output=embed"
            width="100%"
            height="300"
            className="sm:h-400"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Address Section */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
            <h2
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-l-4 pl-3"
              style={{ borderColor: PRIMARY, color: DARK }}
            >
              Our Address
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Address:</strong>
              <br />
              102, Iqrah Vidyalaya Road,
              <br />
              Addalaichenai 13
              <br />
              <br />
              <strong>Telephone:</strong>
              <br />
              076 161 3232
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
            <h2
              className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 border-l-4 pl-3"
              style={{ borderColor: PRIMARY, color: DARK }}
            >
              Send Us a Message
            </h2>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {success && (
                <p className="text-green-600 text-sm sm:text-base font-semibold">
                  Message sent successfully!
                </p>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto py-3 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold text-white transition hover:opacity-90 text-sm sm:text-base"
                style={{ backgroundColor: PRIMARY }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
