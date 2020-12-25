import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { enquirybyid } from "../../../action/Enquiry";
import "../../scss/table.scss";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const ViewEnquiry = ({ enquirybyid, profiles, user }) => {
  useEffect(() => {
    enquirybyid(user._id);

    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [user._id]);
  const activeEnquiry = profiles.length;
  console.log(activeEnquiry);
  return (
    <div className="MainDiv">
      <div
        class="jumbotron text-center"
        style={{ background: "cornflowerblue" }}
      >
        <h3>View Enquiry</h3>
      </div>

      <div className="container">
        <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>GPS(lat)</th>
              <th>GPS(long)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => {
              return (
                <tr>
                  <td>{profile._id}</td>
                  <td>{profile.name}</td>
                  <td>{profile.location}</td>
                  <td>{profile.lat}</td>
                  <td>{profile.long}</td>
                  <td>{profile.addstatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.enquiry.profiles,
  user: state.auth.user,
  id: state.auth.id,
  userData: state.auth.userData,
});

export default connect(mapStateToProps, { enquirybyid })(ViewEnquiry);
