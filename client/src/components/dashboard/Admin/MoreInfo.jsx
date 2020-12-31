import React, { Fragment, useEffect, useState } from "react";
import { getvendorbyid, editvendorbyid } from "../../../action/vendor";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import Header2 from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/Info.scss";

export const MoreInfo = ({
  match,
  getvendorbyid,
  editvendorbyid,
  vendor,
  loadingVendor,
}) => {
  const [formData, setFormData] = useState({
    vendorcode: "",
    firstname: "",
    address: "",
    phone: "",
    email: "",
    totalEnquiry: "",
    activeEnquiry: "",
    completedEnquiry: "  ",
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
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

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
      completedEnquiry,
    });
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
    });
  }, [loadingVendor]);

  return (
    <Fragment>
      {vendor === null ? (
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
                <div className="container-fluid">
                  <div className="card">
                    <div className="container">
                      <div id="main">
                        <div className="h-tag"></div>

                        <div className="login">
                          <form
                            onSubmit={(e) => {
                              onSubmit(e);
                            }}
                          >
                            <table
                              cellspacing="2"
                              align="center"
                              cellpadding="8"
                              border="0"
                            >
                              <tr>
                                <td align="left">Vendor Code :</td>
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
                                <td align="left">Vendor Address :</td>
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
                                <td align="left">Vendor Phone :</td>
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
                                <td align="left">Vendor Email :</td>
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
                                  <input type="text" id="t7" className="tb" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left">Total work completed :</td>
                                <td>
                                  <input
                                    type="text"
                                    name="activeEnquiry"
                                    value={activeEnquiry}
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
                                      <button className="btn btn-danger"></button>
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
  vendor: state.vendor.vendor,
  loadingVendor: state.vendor.loadingVendor,
});

export default connect(mapStateToProps, { getvendorbyid, editvendorbyid })(
  MoreInfo
);
