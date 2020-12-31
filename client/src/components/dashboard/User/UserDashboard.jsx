import React, { Fragment, useEffect } from "react";
import KnobChart from "../../chart";
import { login } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header } from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Alert from "../../Auth/Alert";
import { loadUser } from "../../../action/auth";
import { Link } from "react-router-dom";
import { logout } from "../../../action/auth";

const UserDashboard = ({ user, loadUser, logout }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Fragment>
      {user === null ? (
        <Loader />
      ) : (
        <Fragment>
          {user.activate ? (
            <Fragment>
              <div className="tap-top">
                <i data-feather="chevrons-up"></i>
              </div>
              {/* page wrapper which will wrap entirepage */}
              <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/*  page header */}
                <Header user={user} />
                <Alert />
                {/* page body contains sidebar and content  */}
                <div className="page-body-wrapper sidebar-icon document-content">
                  <Sidebar></Sidebar>
                  <div className="page-body">
                    <div className="container-fluid">
                      {/* <div className="page-title">
                <div className="row">
                  <div className="col-6">
                    <h3>Alert</h3>
                  </div>
                  <div className="col-6">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">
                          {" "}
                          <i data-feather="home"></i>
                        </a>
                      </li>
                      <li className="breadcrumb-item">Ui Kits</li>
                      <li className="breadcrumb-item active">Alert</li>
                    </ol>
                  </div>
                </div>
              </div> */}
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12 col-xl-6">
                          <KnobChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* page body ends */}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h1>account is not activated yet</h1>
              <li>
                <Link to="/" onClick={logout}>
                  logout
                </Link>
              </li>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  activate: state.auth.activate,
});

export default connect(mapStateToProps, { login, loadUser, logout })(
  UserDashboard
);
