import React from "react";
import Styles from "./OurFamilies.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";

const OurFamilies = () => {
  return (
    <Box component="div" className={Styles.ourFamiliesBox}>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }} py={5} display="flex" justifyContent="center" alignItems="center">
          <Grid item md={6} sm={12} xs={12} display="flex" justifyContent="start" alignItems="start" flexDirection="column">
            <Typography className={Styles.title}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
            <Typography className={Styles.subTitle}>Our Families</Typography>
            <Typography className={Styles.description}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</Typography>            
          </Grid>
          <Grid item md={6} sm={12} xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
            <img className={Styles.img} src={require('../../assets/fimilar.png')} alt="Fimilar"/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamilies;
