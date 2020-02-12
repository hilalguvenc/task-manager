import React, { useState } from "react";
import Calendar from "react-calendar";
import AddNewTask from "../pages/AddNewTask";

function CalendarPopup(props) {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar
        className="calendar-container"
        onChange={onChange}
        value={date}
      />
      <button className="calendar-close-popup" onClick={() => props.onClose()}>
        X
      </button>
    </div>
  );
}
export default CalendarPopup;
