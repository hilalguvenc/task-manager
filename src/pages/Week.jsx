import React from "react";
import backarrow from "../style/backarrow.png";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import AddNewTask from "../pages/AddNewTask";

function Week() {
  return (
    <div>
      <div className="back-container">
        <Link to="/">
          <img className="back-arrow" src={backarrow} />
        </Link>
        <Link to="/addnewtask">
          <img
            className="week-plus"
            src={`https://img.icons8.com/nolan/64/plus-math.png`}
          />
        </Link>
      </div>
    </div>
  );
}
export default Week;
