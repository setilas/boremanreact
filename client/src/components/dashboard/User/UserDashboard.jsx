import React, { Fragment, useEffect } from "react";

import Status from "../../Layout/Status";
import { login } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header } from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import Sidebar3 from "../../Layout/sidebar3";
import Alert from "../../Auth/Alert";
import { loadUser } from "../../../action/auth";
import { Link } from "react-router-dom";
import { logout } from "../../../action/auth";


import Useractivation from "../../Useractivation";


import "../../scss/page.scss";
import { Container } from "reactstrap";

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
                          <Status />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* page body ends */}
                <Footer/>
              </div>
            </Fragment>
          ) : (
            <Fragment>

              <div className="tap-top">
                <i data-feather="chevrons-up"></i>
              </div>
              {/* page wrapper which will wrap entirepage */}
              <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/*  page header */}
                <Header3 user={user} />
                <div className="page-body-wrapper sidebar-icon document-content">
                  <Sidebar3 />
                  <div className="page-body">
                    <Container Fluid={true}>
                      <div
                        className="row"
                        style={{ marginBottom: "50px" }}
                      ></div>
                      <div className="col-12">

                     <Useractivation/>
                      
                  
                      </div>
                    </Container>
                  </div>

                  {/* <div className="container-fluid" style={{marginBottom:"300px"}}>
                 
             
              </div>  */}
              <Footer/>
                </div>


             </div>
             

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
