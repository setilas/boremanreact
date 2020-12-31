import React, { useEffect } from "react";
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
const Viewuser = ({ getallvendors, getUsers, vendors, users }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    getUsers();
    getallvendors();
  }, []);
  const Completed = 0;
 
  return (
    
      <div>
        {/* <Loader />                      */}
        {/* <div class="tap-top">
          <i data-feather="chevrons-up"></i>
        </div> */}
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
                <div className="MainDiv">
      <div
        class="jumbotron text-center"
        style={{ background: "cornflowerblue" }}
      >
        <h3>View User</h3>
      </div>
      <div className="container">
        <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>
                {" "}
                <i className="fa fa-circle font-success f-12">Active Enquiry</i>
              </th>
              <th>Total Enquiry</th>
              <th>
                <i className="fa fa-circle font-danger f-12">
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
                  <td>{profile.totalEnquiry}</td>
                  <td>{profile.totalEnquiry}</td>
                  <td>{0}</td>
                  <td >
                    <Link to={`/userinfo/${profile._id}`}>
                      <button className="btn btn-primary">More info</button> 
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
                      <button className="btn btn-primary ">More info</button>
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
              </div>
            </div>
          </div>
          {/* page body ends */}
        </div>
      </div>
    );
  };
    
  

const mapStateToProps = (state) => ({
  vendors: state.vendor.vendors,
  users: state.vendor.users,
});

export default connect(mapStateToProps, { getallvendors, getUsers })(Viewuser);
