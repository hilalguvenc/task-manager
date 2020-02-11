import React, { useState } from "react";
import backarrow from "../style/backarrow.png";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import CalendarPopup from "../popup/CalendarPopup";

function AddNewTask() {
  const [calendarPopupOpen, setCalendarPopupOpen] = useState(false);

  const onCalendarPopupClose = () => {
    setCalendarPopupOpen(false);
  };
  return (
    <div>
      <div className="back-container">
        <Link to="/">
          <img className="back-arrow" src={backarrow} />
        </Link>
      </div>
      <form>
        <label className="content-done">What is be done?</label>
        <input type="text" />
        <label className="content-date">Due date</label>
        <input type="text1" />
        <img
          onClick={() => {
            setCalendarPopupOpen(true);
          }}
          className="calendar"
          src={`https://img.icons8.com/nolan/64/calendar.png`}
          alt=""
        />
        <input type="text2" placeholder="15:30" />
        <img
          className="clock"
          src={`https://img.icons8.com/nolan/64/clock.png`}
          alt=""
        />
      </form>
      {calendarPopupOpen && <CalendarPopup onClose={onCalendarPopupClose} />}
    </div>
  );
}
export default AddNewTask;
