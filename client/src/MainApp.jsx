import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main2 from "./Main2";
import Alert from "./components/Auth/Alert";
import { Landing } from "./components/Landing";
import UserDashboard from "./components/dashboard/User/UserDashboard";
import Addenquiry from "./components/dashboard/User/AddEnquiry";
import ViewEnquiry from "./components/dashboard/User/Viewenquiry";
import PrivateRoute from "./components/routing/PrivateRoute";
import Adminview from "./components/dashboard/Admin/Adminview";

const MainApp = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Alert />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>

            <Route
              exact
              path="/userdashboard"
              component={UserDashboard}
            ></Route>
            <Route exact path="/viewenquiry" component={ViewEnquiry}></Route>
            <PrivateRoute
              exact
              path="/addenquiry"
              component={Addenquiry}
            ></PrivateRoute>
 <Route exact path="/adminview" component={Adminview}></Route>
            <Main2 />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default MainApp;
