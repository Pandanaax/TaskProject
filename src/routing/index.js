import React from "react";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import { Switch, Route } from "react-router-dom";

function RouterTask() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default RouterTask;
