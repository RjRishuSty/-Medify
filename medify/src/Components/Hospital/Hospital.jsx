import React from "react";
import HospitalCard from "../HospitalCard/HospitalCard";
import Styles from "./Hospital.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Typography, Grid } from "@mui/material";
import Free from "../Free/Free";

const Hospital = ({hospitalData}) => {
  return (
    <Box className={Styles.hospitalBox}>
      <Container maxWidth="lg">
        <Typography className={Styles.title}>
          {`${hospitalData.length}`} medical centers available in Alaska
        </Typography>
        <Typography className={Styles.discription}>
          <CheckIcon color="success" /> Book appointments with minimum wait-time
          & verified doctor details
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:'10px'}}>
          <Grid
            item
            md={9}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection='column'
          >
            <HospitalCard hospitalData={hospitalData}/>
          </Grid>
          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="start"
            alignItems="center"
            flexDirection='column'
          >
            <Free />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hospital;
