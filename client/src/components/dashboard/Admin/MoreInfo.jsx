import React, { Fragment, useEffect, useState } from "react";
import { getvendorbyid } from "../../../action/vendor";
import { editvendorbyid } from "../../../action/vendor";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header2 } from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/Info.scss";
const logo = require("../../../assets/images/logo/logo.png");

export const MoreInfo = ({
  match,
  getvendorbyid,
  Vendor,
  loadingVendor,
  editvendorbyid,
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

  console.log(formData);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    editvendorbyid({
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
  const activateFun = () => {
    setFormData({ ...formData, activate: "true" });
  };
  useEffect(() => {
    getvendorbyid(match.params.id);
    setFormData({
      vendorcode: loadingVendor || !Vendor._id ? " " : Vendor._id,
      firstname: loadingVendor || !Vendor.firstname ? "" : Vendor.firstname,
      address: loadingVendor || !Vendor.address ? " " : Vendor.address,
      phone: loadingVendor || !Vendor.phone ? " " : Vendor.phone,
      email: loadingVendor || !Vendor.email ? " " : Vendor.email,
      totalEnquiry:
        loadingVendor || !Vendor.totalEnquiry ? " " : Vendor.totalEnquiry,
      activeEnquiry:
        loadingVendor || !Vendor.activeEnquiry ? " " : Vendor.activeEnquiry,
      completedEnquiry:
        loadingVendor || !Vendor.completedEnquiry
          ? " "
          : Vendor.completedEnquiry,
      activate: loadingVendor || !Vendor.activate ? " " : Vendor.activate,
    });
  }, [loadingVendor]);

  return (
    <Fragment>
      {Vendor === null ? (
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

              <div className="page-body">
                <div className="container-fluid" style={{ paddingTop: "150px" }}>
                  <div className="card" style={{width:"700px",paddingTop:"50px"}}>
                    <div className="container">
                      <div id="main">
                        <div className="h-tag"></div>
                        <div style={{paddingBottom:"30px",textAlign:"center"}}>
                        <h4>User Details</h4>
                        </div>

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
                                    value={totalEnquiry - completedEnquiry}
                                    id="t7"
                                    className="tb"
                                    onChange={(e) => {
                                      onChange(e);
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
                                      {Vendor.activate ? (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => {
                                            activateFun();
                                          }}
                                        >
                                          Activated
                                        </button>
                                      ) : (
                                        <div>
                                          <h5>Account Activation</h5>
                                          <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                              activateFun();
                                            }}
                                          >
                                            Activate
                                          </button>
                                        </div>
                                      )}
                                      <button className="button button1">
                                        Reset Password
                                      </button>
                                      <button className="button button2">
                                        Submit
                                      </button>
                                      <button className="button button2">
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
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  Vendor: state.vendor.Vendor,
  loadingVendor: state.vendor.loadingVendor,
});

export default connect(mapStateToProps, { getvendorbyid, editvendorbyid })(
  MoreInfo
);
