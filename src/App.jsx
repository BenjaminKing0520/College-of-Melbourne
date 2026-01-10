import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavCom/Navbar";
import TopContactBar from "./components/TopContactBar/TopContactBar";

// Pages
import Home from "./pages/Home";
import StudentGallery from "./pages/StudentGallery";
import ContactUs from "./pages/ContactUs";
import ApplyNow from "./pages/ApplyNow";

// About
import AboutCollege from "./pages/About/AboutCollege";
import ChairmanMessage from "./pages/About/ChairmanMessage";
import CEOMessage from "./pages/About/CEOMessage";

// Courses
import Foundation from "./pages/Courses/Foundation";
import Certificate from "./pages/Courses/Certificate";
import Diploma from "./pages/Courses/Diploma";
import HND from "./pages/Courses/HND";
import Degree from "./pages/Courses/Degree";
import Masters from "./pages/Courses/Masters";

function App() {
  return (
    <Router>
      <TopContactBar/>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about-college" element={<AboutCollege />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/ceo-message" element={<CEOMessage />} />

        {/* Student Gallery */}
        <Route path="/student-gallery" element={<StudentGallery />} />

        {/* Courses */}
        <Route path="/courses/foundation" element={<Foundation />} />
        <Route path="/courses/certificate" element={<Certificate />} />
        <Route path="/courses/diploma" element={<Diploma />} />
        <Route path="/courses/hnd" element={<HND />} />
        <Route path="/courses/degree" element={<Degree />} />
        <Route path="/courses/masters" element={<Masters />} />

        {/* Contact & Apply */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/apply-now" element={<ApplyNow />} />
      </Routes>
    </Router>
  );
}

export default App;
