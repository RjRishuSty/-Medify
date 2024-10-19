import React, { useState } from "react";
import Styles from "./EmailModule.module.css";
import { useSnackbar } from "notistack";

const EmailModule = ({ isClose, bookingData, selectedHospital }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");

  if (!bookingData || !selectedHospital) return;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) return;

    const confirmedData = { ...bookingData, email, selectedHospital };
    // console.log("Confirmed booking data:", confirmedData);
    const existingBookings = localStorage.getItem("Booking")
      ? JSON.parse(localStorage.getItem("Booking"))
      : [];
    const submit = existingBookings.push(confirmedData);
    if (submit) {
      enqueueSnackbar('Booking successfully',{variant:'success'})
    }

    localStorage.setItem("Booking", JSON.stringify(existingBookings));
    isClose();
  };

  return (
    <div className="ModelFormBox">
      <div className={Styles.addEmail}>
        <h2 className={Styles.heading}>Confirm Booking</h2>
        <p>{`Please enter your email to confirm booking for ${bookingData.time} on ${bookingData.date}`}</p>
        <form className={Styles.form} onSubmit={submitHandler}>
          <input
            type="email"
            className={Styles.input}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className={Styles.buttonBox}>
            <button type="submit" className={Styles.addButton}>
              Confirm
            </button>
            <button
              type="button"
              className={Styles.cancelButton}
              onClick={isClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModule;
