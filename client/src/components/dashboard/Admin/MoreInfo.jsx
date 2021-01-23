import React, { Fragment, useEffect, useState } from "react";
import { deleteUser } from "../../../action/auth";
import { edituserbyid } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header2 } from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";

import "../../scss/info.scss";
import { withRouter } from "react-router-dom";

import "../../scss/Info.scss";
import { Redirect, withRouter } from "react-router-dom";
import { getvendorbyid } from "../../../action/vendor";


const logo = require("../../../assets/images/logo/logo.png");

export const MoreInfo = ({
  match,
  getvendorbyid,
  vendor,
  loadingVendor,
  edituserbyid,
  deleteUser,
  history,
}) => {
  const [formData, setFormData] = useState({
    vendorcode: "",
    firstname: "",
    address: "",
    phone: "",
    email: "",
    totalEnquiry: "",
    activeEnquiry: "",
    activate: "",
    completedEnquiry: 0,
  });

  const {
    vendorcode,
    firstname,
    address,
    phone,
    email,
    totalEnquiry,
    activeEnquiry,
    completedEnquiry,
    activate,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    edituserbyid({
      vendorcode,
      firstname,
      address,
      phone,
      email,
      totalEnquiry,
      activeEnquiry,
      activate,
      completedEnquiry,
    });
  };

  console.log(activate);
  const activateFun = () => {
    setFormData({ ...formData, activate: "true" });
  };

  const DeleteUser = () => {
    deleteUser(vendor._id, history);
    getvendorbyid(match.params.id);
  };

  const change = (e) => {
    setFormData({ ...formData, activeEnquiry: e.target.value });
  };
  useEffect(() => {
    getvendorbyid(match.params.id);
    setFormData({
      vendorcode: loadingVendor || !vendor._id ? " " : vendor._id,
      firstname: loadingVendor || !vendor.firstname ? "" : vendor.firstname,
      address: loadingVendor || !vendor.address ? " " : vendor.address,
      phone: loadingVendor || !vendor.phone ? " " : vendor.phone,
      email: loadingVendor || !vendor.email ? " " : vendor.email,
      totalEnquiry:
        loadingVendor || !vendor.totalEnquiry ? " " : vendor.totalEnquiry,
      activeEnquiry:
        loadingVendor || !vendor.activeEnquiry ? " " : vendor.activeEnquiry,
      completedEnquiry:
        loadingVendor || !vendor.completedEnquiry
          ? " "
          : vendor.completedEnquiry,
      activate: loadingVendor || !vendor.activate ? " " : vendor.activate,
    });
  }, [loadingVendor]);

  return (
    <Fragment>
      {loadingVendor ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="tap-top">
            <i data-feather="chevrons-up"></i>
          </div>
          {/* page wrapper which will wrap entirepage */}
          <div className="page-wrapper compact-wrapper" id="pageWrapper">
            {/*  page header */}
            <Header2 />
            {/* page body contains sidebar and content  */}
            <div className="page-body-wrapper sidebar-icon document-content">
              <Sidebar2></Sidebar2>

      
              <div class="page-body">
          <div class="container-fluid">
          <div class="page-title">
              <div class="row">
                <div class="col-6">
                  <h3>View User</h3>
                </div>
          <div id="mainpage">
          <div class="card" style={{ marginTop: "30px" }}>
          <div class="containerhash">

              <div className="page-body">
                <div
                  className="container-fluid"
                  style={{ paddingTop: "150px" }}
                >
                  <div className="card">
                    <div className="container">
                      <div id="main">
                        <div className="h-tag"></div>
 

                        <div className="login">
                          <form onSubmit={(e) => onSubmit(e)}>
                            <table
                              cellspacing="2"
                              align="center"
                              cellpadding="8"
                              border="0"
                            >
                              <tr>
                                <td align="left">vendor Code :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="vendorcode"
                                    value={vendorcode}
                                    id="t1"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td align="left">Name :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="firstname"
 
                                    value={vendor.firstname}

                                    value={firstname}
 
                                    id="t2"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">vendor Address :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="address"

                                    value={vendor.address}

                                    value={address}
 
                                    id="t3"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">vendor Phone :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="phone"
 
                                    value={vendor.phone}

                                    value={phone}
 
                                    id="t4"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">vendor Email :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="email"

                                    value={vendor.email}

                                    value={email}
 
                                    id="t5"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">Total Enquiry :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="totalEnquiry"
 
                                    value={vendor.totalEnquiry}

                                    value={totalEnquiry}
 
                                    id="t6"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">Active Enquiry :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="activeEnquiry"
                                    value={totalEnquiry - completedEnquiry}
                                    id="t7"
                                    className="tb"
                                    onChange={(e) => {
                                      change(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">Total work completed :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="completedEnquiry"
                                    value={completedEnquiry}
                                    id="t8"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">
                                  Total work Enquiry Estimated :
                                </td>
                                <td>
                                  <input
                                    type="text"

                                    value="3900 "

                                    name="completedEnquiry"
                                    value={completedEnquiry}
 
                                    id="t9"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
                                    }}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td></td>
                                <td align="center">
                                  <div>
                                    <div>
                                      <button className="button button1">
                                        Reset Password
                                      </button>
                                      <button className="button button2">
                                        Submit
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          DeleteUser();
                                        }}
                                        className="button button2"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  vendor: state.vendor.vendor,
  loadingVendor: state.vendor.loadingVendor,
});

export default connect(mapStateToProps, {
  getvendorbyid,
  edituserbyid,
  deleteUser,
})(withRouter(MoreInfo));
