import React, { Fragment, useState, useEffect } from "react";
import "./index.scss";
import App from "./components/app";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ConfigDB from "./data/customizer/config";
import { Enquiry } from "./components/Enquiry";
import { Vendors } from "./components/Vendors";
import Dashboard from "./components/dashboard/default/index";

const Main2 = (props) => {
  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();

  useEffect(() => {
    setAnim(animation);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <App>
              <Route exact path="/user/dashboard" component={Dashboard}></Route>
              <Route exact path="/enquiry" component={Enquiry}></Route>
              <Route exact path="/vendors" component={Vendors}></Route>
            </App>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};
export default Main2;
