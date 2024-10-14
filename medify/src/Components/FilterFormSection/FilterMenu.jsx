import React from "react";
import Styles from "./FilterMenu.module.css";
import { Card, Grid, Typography, Box, Container } from "@mui/material";
import Search from "../Search/Search";
const FilterMenu = () => {
  return (
    <Container className={Styles.filterSection}>
      <Box maxWidth="lg" className={Styles.searchContainer}>
        <Search />
      </Box>
      <Box maxWidth="lg" className={Styles.filterMenuContainer}>
        <Typography className={Styles.sectionTitle}>
          You may be looking for
        </Typography>
        <Grid container className={Styles.filterMenu}>
          <Grid item md={2} sm={4} xs={10} className={Styles.filterItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/doctor.png")}
                alt="Doctor"
              />
              <Typography className={Styles.cardTitle}>Doctors</Typography>
            </Card>
          </Grid>
          <Grid item md={2} sm={4} xs={10} className={Styles.filterItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/lab.png")}
                alt="Labs"
              />
              <Typography className={Styles.cardTitle}>Labs</Typography>
            </Card>
          </Grid>
          <Grid item md={2} sm={4} xs={10} className={Styles.filterItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/hospital.png")}
                alt="Hospitals"
              />
              <Typography className={Styles.cardTitle}>Hospitals</Typography>
            </Card>
          </Grid>
          <Grid item md={2} sm={4} xs={10} className={Styles.filterItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/Capsule.png")}
                alt="Medical Store"
              />
              <Typography className={Styles.cardTitle}>
                Medical Store
              </Typography>
            </Card>
          </Grid>
          <Grid item md={2} sm={4} xs={10} className={Styles.filterItem}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/Ambulance.png")}
                alt="Ambulance"
              />
              <Typography className={Styles.cardTitle}>Ambulance</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FilterMenu;
