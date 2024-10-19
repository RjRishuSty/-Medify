import React, { useState } from "react";
import Styles from "./HospitalCard.module.css";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import BookingForm from "../BookingFrom/BookingForm";

const HospitalCard = ({ hospitalData }) => {
  const [selectedHospital, setSelectedHospital] = useState([]);
  const [bookingVisible, setBookingVisible] = useState(false);

  const handleBookingClick = (item) => {
    setSelectedHospital(item);
    setBookingVisible(!bookingVisible);
  };
// console.log("Hosptialcard",selectedHospital,bookingVisible)
  return (
    <>
      {hospitalData.length > 0 ? (
        hospitalData.map((item) => (
          <Box
            key={item["Hospital Name"]} 
            sx={{
              py: "50px",
              borderRadius: "15px",
              backgroundColor: "white",
              width: "100%",
            }}
            mb={5}
          >
            <Grid container>
              <Grid
                item
                md={3}
                sm={3}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <Card className={Styles.card}>
                  <img
                    className={Styles.img}
                    src={require("../../assets/find.png")}
                    alt="Hospital Img"
                  />
                </Card>
              </Grid>
              <Grid item md={9} sm={9} xs={12} px={2}>
                <Typography className={Styles.hospitalName}>
                  {item["Hospital Name"]}
                </Typography>
                <Typography className={Styles.hospitalPlace}>
                  {item.State}, {item.City}
                </Typography>
                <Typography className={Styles.description}>
                  {item["Hospital Ownership"]}
                  <br />
                  more
                </Typography>
                <Grid container>
                  <Grid item md={6} sm={6} xs={12}>
                    <span className={Styles.freeText}>FREE</span>
                    <span className={Styles.freeSubTitle}>
                      ₹<del>500</del>
                    </span>
                    <span className={Styles.freeThidTitle}>
                      Consultation fee at clinic
                    </span>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sm={6}
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Typography mb={1} className={Styles.abailable}>
                      Available Today
                    </Typography>
                    <Button
                      className={Styles.button}
                      variant="contained"
                      onClick={() => handleBookingClick(item)} 
                    >
                      {bookingVisible?"Hide Booking"
                        : "Book FREE Center Visit"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {bookingVisible&&(
              <BookingForm selectedHospital={selectedHospital} /> 
            )}
          </Box>
        ))
      ) : (
        <div className="loading">
          <CircularProgress style={{ color: "#14BEF0" }} />
        </div>
      )}
    </>
  );
};

export default HospitalCard;
