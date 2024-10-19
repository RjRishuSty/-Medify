import { Box, Button, Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import Styles from "./BookingData.module.css";
import { Grid } from "@mui/material";
import { DataContent } from "../../App";

const BookingData = () => {
  const { filterData } = useContext(DataContent);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const bookingData = localStorage.getItem("Booking");
    if (bookingData) {
      setUserData(JSON.parse(bookingData));
    }else{
      setUserData([]);
    }
  }, []);

  
  const displayData = filterData && filterData.length > 0 ? filterData : userData;

  return (
    <Box className={Styles.BookingDataBox}>
      {displayData && displayData.length > 0 ? (
        displayData.map((item, index) => (
          <Container className={Styles.contianer} key={index}>
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
              <Grid
                item
                md={9}
                sm={9}
                xs={12}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="start"
              >
                <div className="content">
                  <Typography className={Styles.hospitalName}>
                    {item.selectedHospital["Hospital Name"]}
                  </Typography>
                  <Typography className={Styles.hospitalPlace}>
                    {item.selectedHospital.State}, {item.selectedHospital.City}
                  </Typography>
                  <Typography className={Styles.description}>
                    {item.selectedHospital["Hospital Ownership"]}
                    <br />
                    more
                  </Typography>
                </div>
                <div className="button">
                  <Button
                    variant="outlined"
                    style={{ color: "#2AA7FF", marginRight: "10px" }}
                  >
                    {item.date}
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ color: "#007100", marginRight: "10px" }}
                  >
                    {item.time}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        ))
      ) : (
        <><Container className="loading">No Data Found </Container></>
      )}
    </Box>
  );
};

export default BookingData;
