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
import NewTable from "./components/Layout/NewTable";
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

            <Route exact path="/addenquiry" component={Addenquiry}></Route>
            <Route exact path="/viewenquiry" component={ViewEnquiry}></Route>
            <Route
              exact
              path="/admindashboard"
              component={AdminDashboard}
            ></Route>
            <Route exact path="/viewuser" component={Viewuser}></Route>
            <Route exact path="/adminview" component={Adminview}></Route>
            <Route exact path="/adminuser" component={Adminuser}></Route>
            <Route exact path="/adduser" component={Addview}></Route>
            <Route exact path="/table" component={NewTable}></Route>

            <Main2 />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default MainApp;
