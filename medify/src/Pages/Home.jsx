import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Footer from "../Components/Footer/Footer";
import FilterMenu from "../Components/FilterFormSection/FilterMenu";
import Swiper from "../Components/SwiperComponent/SwiperComponent";
import Specialisation from "../Components/Specialisation/Specialisation";
import BlogsNews from "../Components/BlogsNews/BlogsNews";
import MedicalSpecialist from "../Components/MedicalSpecialist/MedicalSpecialist";
import PatientCaring from "../Components/PatientCaring/PatientCaring";
import Download from "../Components/Download/Download";
import OurFamilies from "../Components/OurFamilies/OurFamilies";
import Question from "../Components/Question/Question";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FilterMenu />
      <div className="noMargin">
        <Swiper />
        <Specialisation />
        <MedicalSpecialist />
        <PatientCaring />
        <BlogsNews />
        <OurFamilies />
        <Question />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
