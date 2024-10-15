import React from "react";
import Styles from "./MedicalSpecialist.module.css";
// Swiper Import...
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Box, Container, Card, Typography, CardContent } from "@mui/material";

const MedicalSpecialist = () => {
  return (
    <div className={Styles.MedicalSpecialistBox}>
      <Typography className={Styles.title}>Our Medical Specialist</Typography>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
        className={Styles.swiper}
        fullWidth
      >
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiperItem}>
          <Card className={Styles.card}>
            <img
              className={Styles.Img}
              src={require("../../assets/s1.png")}
              alt="slider"
            />
          </Card>
          <CardContent>
            <Typography className={Styles.name}>Dr. Ahmad Khan</Typography>
            <Typography className={Styles.description}>Neurologist</Typography>
          </CardContent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MedicalSpecialist;
