import React, { useEffect } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import { getallvendors } from "../../action/vendor";
import $ from "jquery";
const NewTable = ({ getallvendors, vendors }) => {
  // State array variable to save and show data

  //USEEFFECT
  useEffect(() => {
    getallvendors();
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [getallvendors]);

  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
        <h3>View User</h3>
      </div>

      <div className="container">
        <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Vendor code</th>
              <th>Name</th>
              <th>LastName</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => {
              return (
                <tr>
                  <td>{vendor._id}</td>
                  <td>{vendor.vendorName}</td>
                  <td>{vendor.vendorLastName}</td>
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
  vendors: state.vendor.vendors,
});

export default connect(mapStateToProps, { getallvendors })(NewTable);
