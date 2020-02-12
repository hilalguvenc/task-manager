import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
