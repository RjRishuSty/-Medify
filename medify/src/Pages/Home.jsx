import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Footer from "../Components/Footer/Footer";
import FilterMenu from "../Components/FilterFormSection/FilterMenu";
import Swiper from "../Components/SwiperComponent/SwiperComponent";
import Specialisation from "../Components/Specialisation/Specialisation";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FilterMenu />
      <div className="noMargin">
        <Swiper />
        <Specialisation />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
