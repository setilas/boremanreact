import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import ConfigDB from './data/customizer/config'
import Enquirypage from './components/Enquirypage'
import Enquiry from './components/Enquiry'
import Viewenquiry from './components/Viewenquiry'
import Adduser from './components/Adduser'


const Root = (props) =>  {

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

    return(
      <Fragment>
        <Provider store={store}>
        <BrowserRouter basename={`/`}>
        <Switch>
          <App>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
            }} />
            <Route exact path="/enquirypage" component={Enquirypage}></Route>
            <Route exact path="/enquiry" component={Enquiry}></Route>
            <Route exact path="/viewenquiry" component={Viewenquiry}></Route>
            <Route exact path="/adduser" component={Adduser}></Route>

          <TransitionGroup>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={100}
                        classNames={anim}
                        unmountOnExit
                      >
                        <div>
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                ))}
              </TransitionGroup>
            </App>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
