import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import Styles from "./BlogsNews.module.css";

const BlogsNews = () => {
  return (
    <Box className={Styles.blogsNewsBox} >
      <Container maxWidth="lg" >
        <Typography className={Styles.title}>Blog & News</Typography>
        <Typography className={Styles.secTitle}>
          Read Our Latest News
        </Typography>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={Styles.gridContainer}
          mt={1}
        >
          <Grid item md={4} sm={6} xs={12}>
            <Card className={Styles.card}>
              <CardMedia>
                <img src={require("../../assets/blog.png")} alt="Blog" className={Styles.cardImg}/>
              </CardMedia>
              <CardContent>
                <div className={Styles.cardFirstTitleBox}>
                  <Typography className={Styles.cardTitle}>Medical</Typography>
                  <Typography className={Styles.secCardTitle}>
                    March 31, 2022
                  </Typography>
                </div>
                <Typography className={Styles.description}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </Typography>
                <div className={Styles.userBox}>
                  <img
                    className={Styles.userImg}
                    src={require("../../assets/user.png")}
                    alt="user"
                  />
                  <Typography className={Styles.userText}>
                    Rebecca Lee
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={Styles.card}>
              <CardMedia>
                <img src={require("../../assets/blog.png")} alt="Blog" className={Styles.cardImg}/>
              </CardMedia>
              <CardContent>
                <div className={Styles.cardFirstTitleBox}>
                  <Typography className={Styles.cardTitle}>Medical</Typography>
                  <Typography className={Styles.secCardTitle}>
                    March 31, 2022
                  </Typography>
                </div>
                <Typography className={Styles.description}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </Typography>
                <div className={Styles.userBox}>
                  <img
                    className={Styles.userImg}
                    src={require("../../assets/user.png")}
                    alt="user"
                  />
                  <Typography className={Styles.userText}>
                    Rebecca Lee
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={Styles.card}>
              <CardMedia>
                <img src={require("../../assets/blog.png")} alt="Blog" className={Styles.cardImg}/>
              </CardMedia>
              <CardContent>
                <div className={Styles.cardFirstTitleBox}>
                  <Typography className={Styles.cardTitle}>Medical</Typography>
                  <Typography className={Styles.secCardTitle}>
                    March 31, 2022
                  </Typography>
                </div>
                <Typography className={Styles.description}>
                  6 Tips To Protect Your Mental Health When You’re Sick
                </Typography>
                <div className={Styles.userBox}>
                  <img
                    className={Styles.userImg}
                    src={require("../../assets/user.png")}
                    alt="user"
                  />
                  <Typography className={Styles.userText}>
                    Rebecca Lee
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogsNews;
