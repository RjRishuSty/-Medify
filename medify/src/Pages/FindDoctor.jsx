import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Download from "../Components/Download/Download";
import Question from "../Components/Question/Question";
import Search from "../Components/Search/Search";
import { Container } from "@mui/material";
import Hospital from "../Components/Hospital/Hospital";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const FindDoctor = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [state, setState] = useState(searchParam.get("state"));
  const [city, setCity] = useState(searchParam.get("city"));
  const [hospital, setHospital] = useState([]);

  const fetchAvailHospital = async () => {
    try {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      setHospital(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state && city) {
      fetchAvailHospital();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParam.get("state"));
    setCity(searchParam.get("city"));
  }, [searchParam]);

  return (
    <div className="App">
      <Navbar />
      <div className="searchSection">
        <Container style={{ position: "relative", top: "40px" }}>
          <Search />
        </Container>
      </div>
      <div className="searchSectionNoMargin">
        {searchParam.get("state") && searchParam.get("city") ? (
          <Hospital hospitalData={hospital} />
        ) : (
          <Container className="loading">Please select state and city.</Container>
        )}
        <Question />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default FindDoctor;
