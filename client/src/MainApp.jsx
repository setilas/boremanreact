import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registeruser from "./components/Userregistration";
import Loginuser from "./components/Userlogin";
import Main2 from "./Main2";
import Alert from "./components/Alert";
const MainApp = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Alert />
        <BrowserRouter>
          <Switch>
            <Route exact path="/user" component={Registeruser}></Route>
            <Route exact path="/loginuser" component={Loginuser}></Route>
            <Route exact path="/"></Route>
            <Main2 />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

export default MainApp;
