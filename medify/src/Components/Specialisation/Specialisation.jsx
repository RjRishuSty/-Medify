import React from "react";
import Styles from "./Specialisation.module.css";
import { Box, Container, Typography, Button,Grid ,Card} from "@mui/material";

const Specialisation = () => {
  return (
    <Box className={Styles.specialisationBox}>
      <Container
        maxWidth="lg"
        className={Styles.specialisationContainer}
      >
        <Typography className={Styles.title}>Find by specialisation</Typography>
        <Grid container  rowSpacing={2} mt={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={Styles.gridContainer} >
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/lab.png")}
                alt="Dentistry"
              />
              <Typography className={Styles.cardTitle}>Dentistry</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/Stethoscope.png")}
                alt="Primary Care"
              />
              <Typography className={Styles.cardTitle}>Primary Care</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/heart.png")}
                alt="Cardiology"
              />
              <Typography className={Styles.cardTitle}>Cardiology</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/t.png")}
                alt="MRI Resonance"
              />
              <Typography className={Styles.cardTitle}>MRI Resonance</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/blood.png")}
                alt="Blood Test"
              />
              <Typography className={Styles.cardTitle}>Blood Test</Typography>
            </Card>
          </Grid>

          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/Immune.png")}
                alt="Piscologist"
              />
              <Typography className={Styles.cardTitle}>Piscologist</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/lab.png")}
                alt="Laboratory"
              />
              <Typography className={Styles.cardTitle}>Laboratory</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card className={Styles.card}>
              <img
                className={Styles.cardImg}
                src={require("../../assets/X-Ray.png")}
                alt="X-Ray"
              />
              <Typography className={Styles.cardTitle}>X-Ray</Typography>
            </Card>
          </Grid>
        </Grid>
        <Button className={Styles.button}>View All</Button>
      </Container>
    </Box>
  );
};

export default Specialisation;
 