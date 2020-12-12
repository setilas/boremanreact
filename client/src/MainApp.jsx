import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Main2 from "./Main2";
import Alert from "./components/Alert";
import "./App.css";
import { Landing } from "./components/Landing";

import { test } from "./components/test";
import Admindashboard from "./components/Admindashboard";

import { UserDashboard } from "./components/dashboard/User/UserDashboard";
import { AddEnquiry } from "./components/AddEnquiry";
import { ViewEnquiry } from "./components/ViewEnquiry";

const MainApp = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Alert />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}></Route>

            <Route exact path="/test" component={test}></Route>
            <Route exact path="/user" component={Registeruser}></Route>
            <Route exact path="/loginuser" component={Loginuser}></Route>
            <Route exact path="/admin" component={Admindashboard}></Route>
            <Route exact path="/"></Route>

            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>

            <Route
              exact
              path="/userdashboard"
              component={UserDashboard}
            ></Route>
            <Route exact path="/viewenquiry" component={ViewEnquiry}></Route>
            <Route exact path="/addenquiry" component={AddEnquiry}></Route>


            <Main2 />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default MainApp;
