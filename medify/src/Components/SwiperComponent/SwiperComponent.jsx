import React, { useState } from "react";
// Swiper Import...
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Card Style Import...
import Styles from "./Swiper.module.css";
// Card import...
import Card from "@mui/material/Card";
import { Box, Container } from "@mui/material";

const SwiperComponent = () => {
  return (
    <Box className={Styles.swiperBox}>
      <Container
        maxWidth="lg"
        className={Styles.swiperContainer}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className={Styles.swiperItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.Img}
                src={require("../../assets/img1.png")}
                alt="slider"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.Img}
                src={require("../../assets/img2.png")}
                alt="slider"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.Img}
                src={require("../../assets/img3.png")}
                alt="slider"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.Img}
                src={require("../../assets/img4.png")}
                alt="slider"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.Img}
                src={require("../../assets/img1.png")}
                alt="slider"
              />
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default SwiperComponent;
