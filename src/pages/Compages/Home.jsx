import React from "react";
import HeroSlider from "../../components/HeroSlide/HeroSlide";
import OurStrengths from "../../components/OurStrengths/OurStrengths";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import TopCoursesSection from "../../components/CoursesCircle/TopCoursesSection";
import WhyChooseUs from "../../components/ChooseUs/WhyChooseUs";
import StudentGallery from "../../components/Student Gallery/StudentGallery";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <OurStrengths />
      <HomeAbout />
      <TopCoursesSection />
      <WhyChooseUs />
      <StudentGallery/>
    </>
  );
};

export default Home;
