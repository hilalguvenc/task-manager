import React, { useState } from "react";
import vector1 from "../style/vector1.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [todoItems, settodoItems] = useState([
    { action: "Prepare an exam", done: false }
  ]);

  const todoList = () =>
    todoItems.map(item => (
      <div key={item.action}>
        <div>{item.action}</div>
      </div>
    ));

  return (
    <div>
      <div className="container">
        <div className="main-title">Let's Plan</div>
        <div className="subtitle">My Schedule</div>
        {/* <img className="vector" src={vector1} width="150px"
          height="100px"  /> */}
      </div>
      <div>
        <Link to="/addnewtask">
          <img
            className="plus"
            src="https://img.icons8.com/nolan/64/plus-math.png"
            alt=""
          />
          <p className="add-text">Add New Task</p>
        </Link>
      </div>
      <div className="today">Today</div>
      <Link to="/week">
        <div className="week">Week</div>
      </Link>
      <Link to="/month">
        <div className="month">Month</div>
      </Link>
      <ul>
        <li className="todoList">{todoList()} </li>
      </ul>
    </div>
  );
};
export default Homepage;
