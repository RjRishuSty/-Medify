import React from "react";
import { Button, Grid, Select, MenuItem, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "./Search.module.css";

const Search = () => {
  return (
    <Grid container className={Styles.searchGrid}>
      <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
        <Select
          className={Styles.select}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={Styles.icon}/>
            </InputAdornment>
          }
        >
          <MenuItem value="">States</MenuItem>
        </Select>
      </Grid>

      <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
        <Select
          className={Styles.select}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={Styles.icon}/>
            </InputAdornment>
          }
        >
          <MenuItem value="">Cities</MenuItem>
        </Select>
      </Grid>

      <Grid item md={3} sm={5} xs={12} className={Styles.searchGridItem}>
        <Button
          variant="contained"
          className={Styles.button}
          startIcon={<SearchIcon className={Styles.icon}/>}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
