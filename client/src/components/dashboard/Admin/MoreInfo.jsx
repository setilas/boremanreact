import React, { Fragment, useEffect } from "react";
import { getvendorbyid } from "../../../action/vendor";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import Header2 from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/info.scss";
const logo = require("../../../assets/images/logo/logo.png");

export const MoreInfo = ({ match, getvendorbyid, vendor }) => {
  useEffect(() => {
    getvendorbyid(match.params.id);
  }, [getvendorbyid]);

  return (
    <Fragment>
      {vendor === null ? (
        <Loader />
      ) : (
        <Fragment>
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
                  <div class="card">
                    <div class="container">
                      <div id="main">
                        <div class="h-tag"></div>

                        <div class="login">
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
                                  placeholder={vendor._id}
                                  id="t1"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Name :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder={vendor.firstname}
                                  id="t2"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Vendor Address :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder={vendor.address}
                                  id="t3"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Vendor Phone :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder={vendor.phone}
                                  id="t4"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Vendor Email :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder={vendor.email}
                                  id="t5"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Total Enquiry :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder={vendor.totalEnquiry}
                                  id="t6"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Active Enquiry :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="5 "
                                  id="t7"
                                  class="tb"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td align="left">Total work completed :</td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="4"
                                  id="t8"
                                  class="tb"
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
                                  placeholder="3900 "
                                  id="t9"
                                  class="tb"
                                />
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                              <td align="center">
                                <div>
                                  <div>
                                    <button class="button button1">
                                      Reset Password
                                    </button>
                                    <button class="button button2">
                                      Submit
                                    </button>
                                    <button class="button button2">
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
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
});

export default connect(mapStateToProps, { getvendorbyid })(MoreInfo);
