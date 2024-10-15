import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Download from "../Components/Download/Download";
import Question from "../Components/Question/Question";
import Search from "../Components/Search/Search";
import { Container } from "@mui/material";
import Hospital from "../Components/Hospital/Hospital";

const FindDoctor = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="searchSection">
        <Container  style={{ position: "relative", top: "40px" }}>
          <Search />
        </Container>
      </div>
      <div className="searchSectionNoMargin">
        <Hospital/>
      <Question />
      <Download />
      <Footer />
      </div>
    </div>
  );
};

export default FindDoctor;
