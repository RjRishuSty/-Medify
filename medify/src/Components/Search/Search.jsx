import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Grid,
  Select,
  MenuItem,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "./Search.module.css";
import axios from "axios";
import { DataContent } from "../../App";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const { states, handleSearchChange } = useContext(DataContent);
  const navigate = useNavigate();
  const [cityData, setCityData] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });

  const getCityData = async () => {
    try {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/cities/${formData.state}`
      );
      setCityData(response.data);
      // console.log("City Response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHundler = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/find-doctor?state=${formData.state}&city=${formData.city}`);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(`${name} changed to`, value);
  };

  // Fetch city data when state changes
  useEffect(() => {
    if (formData.state) {
      // console.log("Fetching city data for state:", formData.state);
      getCityData();
    }
  }, [formData.state]);

  // console.log("Current path:", location.pathname);

  return (
    <Grid container className={Styles.searchGrid}>
      {location.pathname === "/" || location.pathname === "/find-doctor" ? (
        <>
          <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
            <Select
              displayEmpty
              id="state"
              name="state"
              value={formData.state}
              className={Styles.select}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={Styles.icon} />
                </InputAdornment>
              }
              onChange={changeHandler}
            >
              <MenuItem disabled value="">
                State
              </MenuItem>
              {states && states.length > 0
                ? states.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </Grid>

          <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
            <Select
              displayEmpty
              id="city"
              name="city"
              value={formData.city}
              className={Styles.select}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={Styles.icon} />
                </InputAdornment>
              }
              onChange={changeHandler}
            >
              <MenuItem value="" disabled>
                Cities
              </MenuItem>
              {cityData.length > 0
                ? cityData.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </Grid>
          <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
            <Button
              variant="contained"
              className={Styles.button}
              startIcon={<SearchIcon className={Styles.icon} />}
              onClick={(e) => submitHundler(e)}
            >
              Search
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item md={6} sm={5} xs={12} className={Styles.searchGridItem}>
            <TextField
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={Styles.icon} />
                </InputAdornment>
              }
              onChange={(e) => handleSearchChange(e)}
              label="Search booked hospital"
              variant="outlined"
              sx={{ width: "100%" }} // Use `sx` instead of `styles`
            />
          </Grid>
          <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
        <Button
          variant="contained"
          className={Styles.button}
          startIcon={<SearchIcon className={Styles.icon} />}
          // onClick={(e)=>submitHundler(e)}
        >
          Search
        </Button>
      </Grid>
        </>
      )}

      
    </Grid>
  );
};

export default Search;
