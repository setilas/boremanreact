import React, { useEffect, Fragment } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import { getallvendors } from "../../../action/vendor";
import "../../scss/table.scss";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { getUsers } from "../../../action/auth";
import $ from "jquery";
import { Link } from "react-router-dom";
import Sidebar2 from "../../Layout/Sidebar2";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import "../../scss/page.scss";
import Alert from "../../Auth/Alert";

const Viewuser = ({ getallvendors, getUsers, vendors, users, loadingUser }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    getUsers();
    getallvendors();
  }, [getUsers]);

  return (
    <div>
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
          <div className="page-body ">
            <Alert />
            <div className="col-12 text-center">
              <h3 style={{ paddingTop: "30px", color: "black" }}>
                View User
              </h3>
            </div>
            <div className="container ">
              <table id="example" class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Vendor Code</th>
                    <th>Vendor Name</th>
                    <th>
                      
                      <th><i className="fa fa-circle ">
                       Active Enquiry
                      </i></th> 
                    </th>
                    <th>Total Enquiry</th>
                    <th>
                      <i className="fa fa-circle ">
                        Total Work Complete
                      </i>
                    </th>
                    <th>More information</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((profile) => {
                    return (
                      <tr>
                        <td>{profile._id}</td>
                        <td>{profile.firstname}</td>
                        <td>{profile.activeEnquiry}</td>
                        <td>{profile.totalEnquiry}</td>
                        <td>{profile.completedEnquiry}</td>
                        <td>
                          <Link to={`/userinfo/${profile._id}`}>
                            <button className="btn btn-primary">
                              More info
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                  {vendors.map((profile) => {
                    return (
                      <tr>
                        <td>{profile._id}</td>
                        <td>{profile.firstname}</td>
                        <td>{profile.totalEnquiry}</td>
                        <td>{profile.totalEnquiry}</td>
                        <td>{0}</td>
                        <td>
                          <Link to={`/moreinfo/${profile._id}`}>
                            <button className="btn btn-primary ">
                              More info
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  vendors: state.vendor.vendors,
  users: state.vendor.users,
  loadingUser: state.vendor,
});

export default connect(mapStateToProps, { getallvendors, getUsers })(Viewuser);
