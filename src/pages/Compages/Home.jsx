import React from "react";
import HeroSlider from "../../components/HeroSlide/HeroSlide";
import OurStrengths from "../../components/OurStrengths/OurStrengths";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import TopCoursesSection from "../../components/CoursesCircle/TopCoursesSection";
import WhyChooseUs from "../../components/ChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <OurStrengths />
      <HomeAbout />
      <TopCoursesSection />
      <WhyChooseUs/>
    </>
  );
};

export default Home;
