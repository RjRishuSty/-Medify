import React from "react";
import Styles from "./HospitalCard.module.css";
import { Box, Grid, Card, Container, Typography, Button } from "@mui/material";

const HospitalCard = () => {
  return (
    <Box sx={{ py: "50px", borderRadius: "15px",backgroundColor:'white',width:'100%' }}>
      <Grid container>
        <Grid
          item
          md={2}
          sm={6}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
         
        >
          <Card className={Styles.card}>
            <img
              className={Styles.img}
              src={require("../../assets/find.png")}
              alt="Hospital Img"
            />
          </Card>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Typography className={Styles.hospitalName}>
            Fortis Hospital Richmond Road
          </Typography>
          <Typography className={Styles.hospitalPlace}>
            Banglore, Karnataka
          </Typography>
          <Typography className={Styles.description}>
            Smilessence Center for Advanced Dentistry + 1 <br />
            more
          </Typography>
          <div className={Styles.freeBox}>
            <Typography className={Styles.freeTitle}>FREE</Typography>
            <Typography className={Styles.freeSubTitle}>₹500</Typography>
            <Typography className={Styles.freeThidTitle}>
              Consultation fee at clinic
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography className={Styles.abailable}>Available Today</Typography>
          <Button className={Styles.button} variant="contained">
            Book FREE Center Visit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HospitalCard;
