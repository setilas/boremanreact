import React, { Fragment, useEffect } from "react";
import KnobChart from "../../chart";
import { login } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header } from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Alert from "../../Auth/Alert";
import { loadUser } from "../../../action/auth";

const UserDashboard = ({ user, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Fragment>
      {user === null ? (
        <Loader />
      ) : (
        <Fragment>
          <div class="tap-top">
            <i data-feather="chevrons-up"></i>
          </div>
          {/* page wrapper which will wrap entirepage */}
          <div class="page-wrapper compact-wrapper" id="pageWrapper">
            {/*  page header */}
            <Header user={user} />
            <Alert />
            {/* page body contains sidebar and content  */}
            <div class="page-body-wrapper sidebar-icon document-content">
              <Sidebar></Sidebar>
              <div class="page-body">
                <div class="container-fluid">
                  {/* <div class="page-title">
                <div class="row">
                  <div class="col-6">
                    <h3>Alert</h3>
\                  </div>
                  <div class="col-6">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">
                          {" "}
                          <i data-feather="home"></i>
                        </a>
                      </li>
                      <li class="breadcrumb-item">Ui Kits</li>
                      <li class="breadcrumb-item active">Alert</li>
                    </ol>
                  </div>
                </div>
              </div> */}
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-12 col-xl-6">
                      <KnobChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* page body ends */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { login, loadUser })(UserDashboard);
