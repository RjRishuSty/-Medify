import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Search from "../Components/Search/Search";
import { Container } from "@mui/material";
import Download from "../Components/Download/Download";
import Footer from "../Components/Footer/Footer";
import BookingData from "../Components/BookingData/BookingData";

const MyBooking = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="searchSection">
        <Container style={{ position: "relative", top: "40px" }}>
          <Search />
        </Container>
      </div>
      <div className="searchSectionNoMargin">
        <BookingData/>
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default MyBooking;
