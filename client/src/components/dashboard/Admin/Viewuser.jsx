import React, { useEffect } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import {  getallvendors } from "../../../action/vendor";
import "../../scss/table.scss";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Viewuser = ({  getallvendors, vendors }) => {
  useEffect(() => {
    getallvendors();
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [getallvendors]);
  const activeEnquiry = vendors.length;
  console.log(activeEnquiry);
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
              <th> <i className="fa fa-circle font-success f-12">Active Enquiry</i></th>
              <th>Total Enquiry</th>
              <th><i className="fa fa-circle font-danger f-12">Total Work Complete</i></th>
              <th>More info</th>
            </tr>
          </thead>
          
           <tbody>
            {vendors.map((profile) => {
              return (
                <tr>
                  <td>{profile.code}</td>
                  <td>{profile.vendorName}</td>
                  <td>{profile.location}</td>
                  <td>{profile.lat}</td>
                  <td>{profile.long}</td>
                  <td>{profile.addstatus}</td>
                </tr>
              );
            })}
          </tbody>
       </table>
     </div>    </div>
  );
 };
 const mapStateToProps = (state) => ({
  vendors: state.vendor.vendors,
});

export default connect(mapStateToProps, { getallvendors })(Viewuser);
