import React from "react";
import Styles from "./Footer.module.css";
import { NavLink, Link } from "react-router-dom";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Footer = () => {
  return (
    <Box component="footer" className={Styles.footer}>
      <Container maxWidth="lg">
        <Grid container className={Styles.FooterGrid}>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            m={2}
            className={Styles.FooterGridItem}
           
          
          >
            <div className={Styles.logoDiv}>
              <NavLink to="/" className={Styles.logoBox}>
                <GppGoodIcon className={Styles.logoIcon} />
                <Typography component="p" className={Styles.logoText}>
                  Medify
                </Typography>
              </NavLink>
            </div>
            <div className={Styles.socalIcon}>
              <ul className={Styles.ul}>
                <li className={Styles.li}>
                  <FacebookIcon className={Styles.icon} />
                </li>
                <li className={Styles.li}>
                  <TwitterIcon className={Styles.icon} />
                </li>
                <li className={Styles.li}>
                  <PinterestIcon className={Styles.icon} />
                </li>
                <li className={Styles.li}>
                  <YouTubeIcon className={Styles.icon} />
                </li>
              </ul>
            </div>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            m={2}
            className={Styles.FooterGridItem}
           
          
          >
            <div className={Styles.quickLink}>
              <ul className={Styles.quickLinkUl}>
                <Link to="">
                  <li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> About Us</li>
                </Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} /> Our Pricing</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} /> Our Gallery</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Appointment</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Privacy Policy</li></Link>
                
              </ul>
            </div>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            m={2}
            className={Styles.FooterGridItem}
           
          
          >
           <div className={Styles.quickLink}>
              <ul className={Styles.quickLinkUl}>
                <Link to="">
                  <li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Orthology</li>
                </Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} />Neurology</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} />Dental Care</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Opthalmology</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Cardiology</li></Link>
                
              </ul>
            </div>
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            m={2}
            className={Styles.FooterGridItem}
           
          
          >
           <div className={Styles.quickLink}>
              <ul className={Styles.quickLinkUl}>
                <Link to="">
                  <li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> About Us</li>
                </Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} /> Our Pricing</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon className={Styles.linkIcon} /> Our Gallery</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Appointment</li></Link>
                <Link><li className={Styles.qucikLinkItem}><ChevronRightIcon  className={Styles.linkIcon}/> Privacy Policy</li></Link>
                
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={Styles.CopyRightContainer}>
        <Typography className={Styles.CopyRight}>Copyright ©2024 Surya Nursing Home.com. All Rights Reserved</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
