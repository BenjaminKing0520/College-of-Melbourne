import React from "react";
import HeroSlider from "../../components/HeroSlide/HeroSlide";
import OurStrengths from "../../components/OurStrengths/OurStrengths";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import WhyChooseUs from "../../components/ChooseUs/WhyChooseUs";
import StudentGallery from "../../components/Student Gallery/StudentGalleryComponent.jsx";
import InquiryForm from "../../components/Inquiry/InquiryForm";
import StudentTestimonials from "../../components/StudentTestimonials/StudentTestimonials";
import Footer from "../../components/Footer/Footer";
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton.jsx";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <OurStrengths />
      <HomeAbout />
      <SocialMediaButton/>
      <WhyChooseUs />
      <StudentGallery />
      <InquiryForm />
      <StudentTestimonials />
      <Footer/>
    </>
  );
};

export default Home;
