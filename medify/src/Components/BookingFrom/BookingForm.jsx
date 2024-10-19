import React, { useState } from "react";
import Styles from "./BookingForm.module.css";
import { Box, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import EmailModule from '../EmailModule/EmailModule';

const BookingForm = ({ selectedHospital }) => {
  const [bookingData, setBookingData] = useState({ date: '', time: '', email: '' });
  const [selectedTime, setSelectedTime] = useState(null);
  const [isEmailModuleOpen, setEmailModuleOpen] = useState(false);

  const availableDates = [];
  const today = new Date();

  // Generate next 7 days
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    availableDates.push({
      date: nextDate,
      day: nextDate.toLocaleString("default", { weekday: "long" }),
    });
  }

  const formattedDates = availableDates.map((item) => ({
    date: item.date.toISOString().split("T")[0],
    day: item.day,
  }));

  const finalDate = formattedDates.map((item, index) => {
    const isToday = item.date === today.toISOString().split("T")[0];
    const isTomorrow =
      index === 1 &&
      item.date ===
        new Date(today.setDate(today.getDate() + 1))
          .toISOString()
          .split("T")[0];

    if (isToday) {
      return { ...item, day: "Today" };
    } else if (isTomorrow) {
      return { ...item, day: "Tomorrow" };
    }
    return item;
  });

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const handleTimeClick = (date, time) => {
    setBookingData({ date, time });
    setSelectedTime(time);
    setEmailModuleOpen(true); 
  };

  const closeEmailModule = () => {
    setEmailModuleOpen(false);
  };

  return (
    <Box mt={3} className={Styles.booking}>
      <Container className={Styles.border}></Container>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        className={Styles.Swiper}
      >
        {finalDate.map((item, index) => {
          let displayDate = index < 2 ? item.day : new Date(item.date).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });

          return (
            <SwiperSlide key={index} className={Styles.Slider}>
              <div className={Styles.card}>
                <p className={Styles.title}>{displayDate}</p>
                <p className={Styles.description}>
                  {index + 1} slots available
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box className={Styles.slots}>
        <Grid container spacing={2}>
          {Object.entries(availableSlots).map(([key, value]) => (
            <Grid item md={12} sm={12} xs={12} key={key}>
              <div className={Styles.cardSlot}>
                <div className={Styles.setStatus}>
                  <p className={Styles.text}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                </div>
                <div className={Styles.setTime}>
                  {value.map((timeSlot, index) => {
                    const selectedDate = finalDate[0]?.date;
                    const isSelected = selectedTime === timeSlot;
                    return (
                      <input
                        key={index}
                        className={`${Styles.bookingTime} ${isSelected ? Styles.selected : ''}`}
                        value={timeSlot}
                        onClick={() => handleTimeClick(selectedDate, timeSlot)}
                        readOnly
                      />
                    );
                  })}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      {isEmailModuleOpen && (
        <EmailModule 
          isClose={closeEmailModule} 
          bookingData={bookingData} 
          selectedHospital={selectedHospital} 
        />
      )}
    </Box>
  );
};

export default BookingForm;
