import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import FindDoctor from "./Pages/FindDoctor";
import axios from "axios";
import { createContext } from "react";
import MyBooking from "./Pages/MyBooking";
import { SnackbarProvider } from "notistack";
export const DataContent = createContext();

function App() {
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(null);
  const [userBooked, setUserBooked] = useState([]);
  let debounceTimer;

  const searchFilterData = useCallback((searchValue) => {
    const bookedHospital = JSON.parse(localStorage.getItem("Booking"));
    setUserBooked(bookedHospital);
    const data = userBooked.filter((item) => {
      return item.selectedHospital["Hospital Name"]
        .toLowerCase()
        .includes(searchValue);
    });
    setFilterData(data);
  }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLocaleLowerCase();
    setSearch(searchValue);

    clearInterval(debounceTimer);

    debounceTimer = setInterval(() => {
      searchFilterData(searchValue);
      clearInterval(debounceTimer);
    }, 500);
  };
  useEffect(() => {
    if (userBooked) {
      setUserBooked(userBooked);
    } else {
      setUserBooked([]);
    }
  }, [userBooked]);

  // console.log("Filter=>", filterData);
  useEffect(() => {
    const getStateData = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/states`
        );
        setStates(response.data);
        // console.log("States=>", states);
      } catch (error) {
        console.log(error);
      }
    };
    getStateData();
  }, []);
  // console.log("in app", states);
  return (
    <SnackbarProvider>
      <DataContent.Provider
        value={{ states, setSearch, handleSearchChange, filterData }}
      >
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/find-doctor" element={<FindDoctor />}></Route>
          <Route exact path="/my-booking" element={<MyBooking />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </DataContent.Provider>
    </SnackbarProvider>
  );
}

export default App;
