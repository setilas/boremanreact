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
import Adminuser from "./components/dashboard/Admin/Adminuser";
import AdminDashboard from "./components/dashboard/Admin/AdminDashboard";
import Addview from "./components/dashboard/Admin/Adduser";
import Viewuser from "./components/dashboard/Admin/Viewuser";

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

            <PrivateRoute
              exact
              path="/userdashboard"
              component={UserDashboard}
            ></PrivateRoute>

            <Route exact path="/addenquiry" component={Addenquiry}></Route>
            <PrivateRoute
              exact
              path="/viewenquiry"
              component={ViewEnquiry}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/admindashboard"
              component={AdminDashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/viewuser"
              component={Viewuser}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/adminview"
              component={Adminview}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/adminuser"
              component={Adminuser}
            ></PrivateRoute>
            <Route exact path="/adduser" component={Addview}></Route>

            <Main2 />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default MainApp;
