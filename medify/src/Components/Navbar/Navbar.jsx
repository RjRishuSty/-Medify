import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { NavLink } from "react-router-dom";
import NavbarNotes from '../NavbarNotes/NavbarNotes'
import Styles from "./Navbar.module.css";

const pages = [
  { name: "Find Doctors", path: "/doctors" },
  { name: "Hospitals", path: "/hospitals" },
  { name: "Medicines", path: "/medicines" },
  { name: "Surgeries", path: "/surgeries" },
  { name: "Software for Provider", path: "/software" },
  { name: "Facilities", path: "/facilities" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <NavbarNotes/>
      <AppBar position="static" component="div" className={Styles.nav}>
        <Container maxWidth="lg" className={Styles.navContainer}>
          <NavLink to="/" className={Styles.logoBox}>
            <GppGoodIcon className={Styles.logoIcon} />
            <Typography component="p" className={Styles.logoText}>
              Medify
            </Typography>
          </NavLink>

          {/* Desktop Menu */}
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className={Styles.menu}
          >
            <ul className={Styles.ul}>
              {pages.map((page, index) => (
                <li key={index} className={Styles.liItem}>
                  <NavLink
                    to={page.path}
                    className={({ isActive }) =>
                      isActive ? Styles.activeLink : ""
                    }
                  >
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button className={Styles.button}>My Bookings</Button>
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
            className={Styles.mobileNav}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={Styles.menuIcon} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
              }}
              PaperProps={{
                style: {
                  width: "100%",
                  marginTop: "50px",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  className={Styles.mobileNavItem}
                >
                  <NavLink
                    to={page.path}
                    className={({ isActive }) =>
                      isActive ? Styles.activeLink : ""
                    }
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
