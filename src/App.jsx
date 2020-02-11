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
      <Tabs>
        <TabList className="tab-list">
          <Tab>Today</Tab>
          <Tab>Week</Tab>
          <Tab>Month</Tab>
        </TabList>

        {/* <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel> */}
      </Tabs>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homapage />
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
