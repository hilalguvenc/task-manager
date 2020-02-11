import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style/App.css";
import Homapage from "./pages/Homepage";
import AddNewTask from "./pages/AddNewTask";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homapage />
            <Tabs defaultActiveKey="home" transition={false}>
              <TabList className="tab-list">
                <Tab eventKey="today" title="Today">
                  Today
                </Tab>
                <Tab eventKey="week" title="Week">
                  Week
                </Tab>
                <Tab eventKey="month" title="Month">
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
          </Route>
          <Route exact path="/addnewtask">
            <AddNewTask />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
