import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/HeroSection/Hero";
import Footer from "../Components/Footer/Footer";
import FilterMenu from "../Components/FilterFormSection/FilterMenu";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <FilterMenu/>
      <Footer/>
    </div>
  );
};

export default Home;
