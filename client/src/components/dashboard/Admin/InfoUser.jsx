import React, { Fragment, useEffect } from "react";
import { getuserbyid } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header2 } from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/Info.scss";
const logo = require("../../../assets/images/logo/logo.png");

export const InfoUser = ({ match, getuserbyid, user }) => {
  console.log("in component");
  useEffect(() => {
    getuserbyid(match.params.id);
  }, [getuserbyid]);

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
            <Header2 />
            {/* page body contains sidebar and content  */}
            <div class="page-body-wrapper sidebar-icon document-content">
              <Sidebar2></Sidebar2>

              <div class="page-body">
          <div class="container-fluid">
          <div class="page-title">
              <div class="row">
                <div class="col-6">
                  <h3>View User</h3>
                </div>
          <div id="main">
          <div class="card" style={{ marginTop: "30px" }}>
          <div class="container">
        
            
                
                

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
                                  placeholder={user._id}
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
                                  placeholder={user.firstname}
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
                                  placeholder={user.address}
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
                                  placeholder={user.phone}
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
                                  placeholder={user.email}
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
                                  placeholder={user.totalEnquiry}
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
          </div>
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.vendor.user,
});

export default connect(mapStateToProps, { getuserbyid })(InfoUser);
