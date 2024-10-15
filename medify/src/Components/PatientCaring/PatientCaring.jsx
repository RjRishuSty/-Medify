import React from "react";
import Styles from "./PatientCaring.module.css";
import { Box, Card, Container, Grid, Typography } from "@mui/material";

const PatientCaring = () => {
  return (
    <Box className={Styles.patientCaring}>
      <Container>
        <Grid container className={Styles.gridContainer}>
          <Grid item md={6} sm={12} xs={12} >
            <Grid container className={Styles.callGridContainer}>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={3}
              >
                <Card className={Styles.card}>
                  <div className={Styles.callItem}>
                    <img
                      className={Styles.img}
                      src={require("../../assets/call.png")}
                      alt="Call"
                    />
                    <Typography className={Styles.Sec}>
                      Free Consultation
                    </Typography>
                  </div>
                  <Typography className={Styles.description}>
                    Consultation with the best
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={6} sm={12} xs={12} display="flex"
                justifyContent="center"
                alignItems="center">
                <img
                  className={Styles.secImg}
                  src={require("../../assets/imgcall.png")}
                  alt="Doctor"
                />
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  className={Styles.ThidImg}
                  src={require("../../assets/imgcall2.png")}
                  alt="Doctor"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={Styles.contentGridItem}  >
            <Typography className={Styles.Sectitle}>HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
            <Typography className={Styles.Thidtitle}>Patient <span>Caring</span></Typography>
            <Typography className={Styles.description}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</Typography>
            <ul className={Styles.ul}>
                <li className={Styles.li}><img src={require('../../assets/bullet.png')} alt="*" className={Styles.liImg}/>Stay Updated About Your Health</li>
                <li className={Styles.li}><img src={require('../../assets/bullet.png')} alt="*" className={Styles.liImg}/>Check Your Results Online</li>
                <li className={Styles.li}><img src={require('../../assets/bullet.png')} alt="*" className={Styles.liImg}/>Manage Your Appointments</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaring;
