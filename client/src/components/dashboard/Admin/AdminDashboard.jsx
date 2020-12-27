import React from "react";
import KnobChart from "../../chart";
import { login } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import Header2 from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
const logo = require("../../../assets/images/logo/logo.png");

const AdminDashboard = () => {
  return (
    <div>
      <Loader />
      <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
      <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {/*  page header */}
        <Header2 />
        {/* page body contains sidebar and content  */}
        <div class="page-body-wrapper sidebar-icon document-content">
          <Sidebar2></Sidebar2>

          <div class="page-body">
            <div class="container-fluid">
              {/* <div class="page-title">
                <div class="row">
                  <div class="col-6">
                    <h3>Alert</h3>
                  </div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(AdminDashboard);
