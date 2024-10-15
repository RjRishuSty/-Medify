import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import React from "react";
import Styles from "./Download.module.css";

const Download = () => {
  return (
    <Box className={Styles.downloadBox}>
      <Container>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          display="flex"
          justifyContent="space-between"
          alignitems="center"
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            alignitems="center"
            className={Styles.phoneImgBox}
            
          >
            <img
              className={Styles.phoneImg}
              src={require("../../assets/phone.png")}
              alt="Download"
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            alignitems="center"
            // flexDirection="column"
            
          >
            <img
              className={Styles.arrowImg}
              src={require("../../assets/arrow.png")}
              alt="Download"
            />
            <Box component="div">
              <Typography className={Styles.title}>
                Download the <br />
                <span>Medify</span> App
              </Typography>
              <Typography className={Styles.secTitle}>
                Get the link to download the app
              </Typography>
              <Box component="div" className={Styles.inputBox}>
                <TextField
                  label="Enter phone number"
                  id="Phone"
                  className={Styles.input}
                  sx={{
                    backgroundColor: "white", 
                    "& .MuiInputBase-root": {
                      backgroundColor: "white",
                    },
                    "&.Mui-error .MuiInputBase-root": {
                      backgroundColor: "white",
                    },
                }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    },
                  }}
                />
                <Button variant="contained" className={Styles.button}>
                  Send SMS
                </Button>
              </Box>
              <Box component="div" className={Styles.buttonBox}>
                <img
                  className={Styles.buttonImg}
                  src={require("../../assets/google_play.png")}
                  alt="PlayStore"
                />
                <img
                  className={Styles.buttonImg}
                  src={require("../../assets/apple_store.png")}
                  alt="PlayStore"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Download;
