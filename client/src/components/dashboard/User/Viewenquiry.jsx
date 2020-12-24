import React, { useEffect } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import { getallenquiry} from "../../../action/Enquiry";
import $ from "jquery";
const NewTable = ({ getallenquiry, profiles }) => {
  // State array variable to save and show data

  //USEEFFECT
  useEffect(() => {
    getallenquiry();
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [getallenquiry]);

  return (
   
    <div className="MainDiv" >
      <div class="jumbotron text-center" style={{background:"cornflowerblue"}}>
        <h3>View Enquiry</h3>
      </div>

      <div className="container">
        <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
                          <th>Id</th>
                          <th >Name</th>
                          <th >Location</th>
                          <th >GPS(lat)</th>
                          <th >GPS(long)</th>
                          <th >Status</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((vendor) => {
              return (
                <tr>
                  <td>{vendor._id}</td>
                  <td>{vendor.name}</td>
                  <td>{vendor.location}</td>
                  <td>{vendor.lat}</td>
                  <td>{vendor.long}</td>
                  <td>{vendor.addstatus}</td>
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
});

export default connect(mapStateToProps, { getallenquiry })(NewTable);
