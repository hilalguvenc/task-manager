import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.css";
import Homapage from "./pages/Homepage";
import Today from "./pages/Today";
import Week from "./pages/Week";
import Month from "./pages/Month";

const App =()=>  {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homapage />
          </Route>
          <Route exact path="/today">
            <Today />
          </Route>
          <Route exact path="/week">
            <Week />
          </Route>
          <Route exact path="/month">
            <Month />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
