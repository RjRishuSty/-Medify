import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Styles from "./Hero.module.css";
const Hero = () => {
  return (
    <Box className={Styles.hero_section}>
      <Container sx={{ border: "2px solid black" }}>
        <Grid container className={Styles.heroGrid}>
          <Grid item md={6} sm={6} xs={12} className={Styles.heroGridItem}>
            <Card className={Styles.card}>
              <CardContent>
                <Typography component="p" className={Styles.cardTitle}>
                  Skip the travel! Find Online
                  <Typography className={Styles.cardTitleHighLight}>
                    Medical{" "}
                    <span className={Styles.titleHighLight}>Centers</span>
                  </Typography>
                </Typography>
                <Typography className={Styles.description}>
                  Connect instantly with a 24x7 specialist or choose to video
                  visit a particular doctor.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={Styles.cardButton}>Find Centers</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} sm={6} xs={12} className={Styles.heroGridItem}>
            <Card className={Styles.card}>
              <Box className={Styles.cardImg}>
                <img
                  className={Styles.titikImg}
                  src={require("../../assets/titik_titik.png")}
                  alt="Medify"
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
        {/* Form */}
        <Box className={Styles.formBox}>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
