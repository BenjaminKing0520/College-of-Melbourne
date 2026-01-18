import React from "react";
import Footer from "../../components/Footer/Footer";

const PRIMARY = "#df1111";
const LIGHT = "#F5F5F5";
const DARK = "#353535";

const ContactUs = () => {
  return (
    <>
      <section
        className="min-h-screen px-4 sm:px-8 md:px-16 py-8 sm:py-12"
        style={{ backgroundColor: LIGHT }}
      >
        {/* Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: DARK }}
        >
          Contact Us
        </h1>

        {/* Full Width Map */}
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

        {/* Contact Details + Form */}
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

            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
              ></textarea>

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
