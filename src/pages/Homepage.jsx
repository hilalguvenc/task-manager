import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NewTaskPopup from "../popup/NewTaskPopup";

const tabs = {
  today: 1,
  week: 2,
  month: 3
};

const Homepage = () => {
  const [todayTodoItems, setTodayTodoItems] = useState([]);
  const [weekTodoItems, setWeekTodoItems] = useState([]);
  const [monthTodoItems, setMonthTodoItems] = useState([]);

  const [newtaskPopupOpen, setNewTaskPopupOpen] = useState(false);

  const onNewTaskPopupClose = () => {
    setNewTaskPopupOpen(false);
  };

  const checkTodoItem = (action, tab) => {
    let updatedItems;
    switch (tab) {
      case tabs.today:
        updatedItems = todayTodoItems.map(item => {
          if (item.action === action)
          item.done = true;
          return item;
        });
        setTodayTodoItems([...updatedItems]);
        break;
      case tabs.week:
        updatedItems = weekTodoItems.map(item => {
          if (item.action === action)
          item.done = true;
          return item;
        });
        setWeekTodoItems([...updatedItems]);
        break;
      case tabs.month:
        updatedItems = monthTodoItems.map(item => {
          if (item.action === action)
          item.done = true;
          return item;
        });
        setMonthTodoItems([...updatedItems]);
    }
  }

  const onNewTaskAdded = action => {
    switch (selectedTab) {
      case tabs.today:
        setTodayTodoItems([...todayTodoItems, { action, done: false }]);
        break;
      case tabs.week:
        setWeekTodoItems([...weekTodoItems, { action, done: false }]);
        break;
      case tabs.month:
        setMonthTodoItems([...monthTodoItems, { action, done: false }]);
    }
  };

  const [selectedTab, setSelectedTab] = useState(tabs.today);

  return (
    <div>
      <Tabs>
        <TabList className="tab-list">
          <Tab onClick={() => setSelectedTab(tabs.today)} title="Today">
            Today
          </Tab>
          <Tab onClick={() => setSelectedTab(tabs.week)} title="Week">
            Week
          </Tab>
          <Tab onClick={() => setSelectedTab(tabs.month)} title="Month">
            Month
          </Tab>
        </TabList>

        <TabPanel className="tab-panel1">
          <h2>
            {todayTodoItems.map(item => (
              <div className={item.done ? "checked" : ""} key={item.action}>
                <input value={item.action} type="checkbox" onChange={(e) => checkTodoItem(e.target.value, tabs.today)} />
                <div> {item.action}</div>
              </div>
            ))}
          </h2>
        </TabPanel>
        <TabPanel className="tab-panel1">
          <h2>
            {weekTodoItems.map(item => (
              <div className={item.done ? "checked" : ""} key={item.action}>
              <input value={item.action} type="checkbox" onChange={(e) => checkTodoItem(e.target.value, tabs.week)} />
              <div> {item.action}</div>
            </div>
            ))}
            
          </h2>
        </TabPanel>
        <TabPanel className="tab-panel1">
          <h2>
            {monthTodoItems.map(item => (
              <div className={item.done ? "checked" : ""} key={item.action}>
                <input value={item.action} type="checkbox" onChange={(e) => checkTodoItem(e.target.value, tabs.month)} />
                <div> {item.action}</div>
              </div>
            ))}
            
          </h2>
        </TabPanel>
      </Tabs>
      <div>
        <div className="container">
          <div className="main-title">Let's Plan</div>
          <div className="subtitle">My Schedule</div>
          {/* <img className="vector" src={vector1} width="150px"
          height="100px"  /> */}
        </div>
        <div
          onClick={() => {
            setNewTaskPopupOpen(true);
          }}
        >
          <img
            className="plus"
            src="https://img.icons8.com/nolan/64/plus-math.png"
            alt=""
          />
          <p className="add-text">Add New Task</p>
        </div>

        {/* <ul>
          <li
            className="todoList"
          >
            {todoList()}{" "}
          </li>
        </ul> */}
      </div>
      {newtaskPopupOpen && (
        <NewTaskPopup onClose={onNewTaskPopupClose} onAdd={onNewTaskAdded} />
      )}
    </div>
  );
};
export default Homepage;
