import React, { Fragment, useEffect, useState } from "react";


import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";






import { deleteUser, getuserbyid } from "../../../action/auth";
import { edituserbyid } from "../../../action/auth";

import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header2 } from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/info.scss";


import "../../scss/page.scss";

import { Redirect, withRouter } from "react-router-dom";





const logo = require("../../../assets/images/logo/logo.png");

export const InfoUser = ({
  match,
  getuserbyid,
  user,
  loadingUser,
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
    deleteUser(user._id, history);
    getuserbyid(match.params.id);
  };

  const change = (e) => {
    setFormData({ ...formData, activeEnquiry: e.target.value });
  };
  useEffect(() => {
    getuserbyid(match.params.id);
    setFormData({
      vendorcode: loadingUser || !user._id ? " " : user._id,
      firstname: loadingUser || !user.firstname ? "" : user.firstname,
      address: loadingUser || !user.address ? " " : user.address,
      phone: loadingUser || !user.phone ? " " : user.phone,
      email: loadingUser || !user.email ? " " : user.email,
      totalEnquiry: loadingUser || !user.totalEnquiry ? " " : user.totalEnquiry,
      activeEnquiry:
        loadingUser || !user.activeEnquiry ? " " : user.activeEnquiry,
      completedEnquiry:
        loadingUser || !user.completedEnquiry ? " " : user.completedEnquiry,
      activate: loadingUser || !user.activate ? " " : user.activate,
    });
  }, [loadingUser]);

  

  return (
    <Fragment>

      {loadingUser ? (

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

            <div class="page-body-wrapper sidebar-icon document-content">
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
                                  value={user._id}
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
                                  value={user.firstname}
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
                                  value={user.address}
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
                                  value={user.phone}
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
                                  value={user.email}
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
                                  value={user.totalEnquiry}
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
                                  value="5 "
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
                                  value="4"
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
                                  value="3900 "
                                  id="t9"
                                  class="tb"
                                />
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                              <td align="center">
                                <div>

            <div className="page-body-wrapper sidebar-icon document-content">

              <Sidebar2/>
              <div class="page-body1">
              <div className="admin-card ">
                <Row>
                  <Card className="mt-4">
                  <CardHeader>
                    <h2>User Details</h2>
                  </CardHeader>
                  <CardBody className="mt-0 pt-2 ">
                        <div className="login ">
                          <form onSubmit={(e) => onSubmit(e)}>
                          <table >
                          
                            


                              <tr>
                                <td align="left" class="font-weight-bold " >User Code: </td>
                              
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
                                <td align="left"class="font-weight-bold pt-2" >Name :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >User Address :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >User Phone :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >User Email :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >Total Enquiry :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >Active Enquiry :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >Total work completed :</td>
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
                                <td align="left" class="font-weight-bold pt-2" >
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
                                      {user.activate ? (
                                        <button
                                          className="button button1 rounded btn btn-success  "
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
                                      <button className="button button1 rounded">
                                        Reset Password
                                      </button>
                                      <button className="button button2 rounded">
                                        Submit
                                      </button>


                                      <button
                                        onClick={(e) => {
                                          DeleteUser();
                                        }}
                                        className="button button2 rounded">

                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </form>
                        </div>
                      </CardBody>
                    </Card>
                  </Row>
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
  loadingUser: state.vendor.loadingUser,
});

export default connect(mapStateToProps, {
  getuserbyid,
  edituserbyid,
  deleteUser,
})(withRouter(InfoUser));
