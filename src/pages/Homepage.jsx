import React, { useState } from "react";
import vector1 from "../style/vector1.jpg";

const Homepage = () => {
  const [todoItems, settodoItems] = useState([
    { action: "Prepare an exam", done: false },
    { action: "Clean the house", done: false },
    { action: "Read a book", done: false },
    { action: "Wash the dishes", done: false }
  ]);
  const [newItemText, setNewItemText] = useState("");

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
        <img
          className="plus"
          src="https://img.icons8.com/nolan/64/plus-math.png"
        />
        <p className="add-text">Add New Task</p>
      </div>
      <div className="today">Today</div>
      <div className="week">Week</div>
      <div className="month">Month</div>
      <ul>
        <li className="todoList">{todoList()} </li>
      </ul>
    </div>
  );
};
export default Homepage;
