import React, { useEffect } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import { getallvendors } from "../../../action/vendor";
import "../../scss/table.scss";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { getUsers } from "../../../action/auth";
import $ from "jquery";

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
              <th>More info</th>
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
                  <td>
                    <button className="btn btn-primary">More info</button>
                  </td>
                </tr>
              );
            })}
            {vendors.map((profile) => {
              return (
                <tr>
                  <td>{profile._id}</td>
                  <td>{profile.vendorName}</td>
                  <td>{profile.totalEnquiry}</td>
                  <td>{profile.totalEnquiry}</td>
                  <td>{0}</td>
                  <td>
                    <button className="btn btn-primary">More info</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};
const mapStateToProps = (state) => ({
  vendors: state.vendor.vendors,
  users: state.vendor.users,
});

export default connect(mapStateToProps, { getallvendors, getUsers })(Viewuser);
