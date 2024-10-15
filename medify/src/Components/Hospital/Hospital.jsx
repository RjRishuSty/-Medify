import React from "react";
import HospitalCard from "../HospitalCard/HospitalCard";
import Styles from "./Hospital.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Typography, Grid } from "@mui/material";
import Free from "../Free/Free";

const Hospital = () => {
  return (
    <Box className={Styles.hospitalBox}>
      <Container maxWidth="lg">
        <Typography className={Styles.title}>
          15 medical centers available in Alaska
        </Typography>
        <Typography className={Styles.discription}>
          <CheckIcon color="success" /> Book appointments with minimum wait-time
          & verified doctor details
        </Typography>
        <Grid container sx={{mt:'35px'}}>
          <Grid
            item
            md={9}
            sm={6}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <HospitalCard />
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Free />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hospital;
