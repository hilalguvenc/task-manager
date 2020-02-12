import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewTask from "./AddNewTask";

const Homepage = () => {
  const [todoItems, settodoItems] = useState([
    { action: "Prepare an exam", done: false }
  ]);

  const [today,setToday] = useState();
  const [week,setWeek] = useState();
  const [month, setMonth] = useState();

  const selectToday =()=>{
    setToday(today);
  }
  const selectWeek =()=>{
    setWeek(week);
  }
  const selectMonth =()=>{
    setMonth(month);
  }

  const todoList = () =>
    todoItems.map(item => (
      <div key={item.action}>
        <div>{item.action}</div>
      </div>
    ));

  return (
    <div>
    <Tabs>
    <TabList className="tab-list">
      <Tab onClick ={()=> selectToday} title="Today">
        Today
      </Tab>
      <Tab onClick ={()=> selectWeek} title="Week">
        Week
      </Tab>
      <Tab onClick ={()=> selectMonth} title="Month">
        Month
      </Tab>
    </TabList>

    <TabPanel className="tab-panel1">
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel className="tab-panel1">
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel className="tab-panel1">
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
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
      
      <ul>
        <li className="todoList">{todoList()} </li>
      </ul>
    </div>
    </div>
  );
};
export default Homepage;
