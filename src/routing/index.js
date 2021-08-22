import React from "react";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import InputItem from "../containers/InputItem/InputItem";
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
      <Route path="/home">
        <InputItem />
      </Route>
    </Switch>
  );
}

export default RouterTask;
