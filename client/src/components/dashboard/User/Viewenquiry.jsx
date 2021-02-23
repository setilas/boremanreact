import React, { Fragment,useEffect } from "react";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { connect } from "react-redux";
import { enquirybyid } from "../../../action/Enquiry";
import "../../scss/table.scss";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Loader from "../../../layout/loader";
import { loadUser } from "../../../action/auth";
import Sidebar from "../../Layout/Sidebar";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";



const ViewEnquiry = ({ enquirybyid, profiles, match, user, loadUser }) => {
  useEffect(() => {
    loadUser();
    enquirybyid(match.params.id);
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, [loadUser]);
  const activeEnquiry = profiles.length;
  console.log(activeEnquiry);

  return (
    
    <div>
            <div className="tap-top">
              <i data-feather="chevrons-up"></i>
            </div>
            {/* page wrapper which will wrap entirepage */}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
              {/*  page header */}
              <Header />
              {/* page body contains sidebar and content  */}
              <div className="page-body-wrapper sidebar-icon document-content">
                <Sidebar/>
           <div className="page-body " >

      
    
        <div className="col-12 text-center">
        <h3 style={{paddingTop:"30px", color:"black"}} >View Enquiry</h3>
        </div>
        <Fragment>
      {user === null ? (
        <Loader />
      ) : (
        <div className="MainDiv">
         

          <div className="container">
            <table id="example" className="table table-hover table-bordered">
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
      )}
    </Fragment>
  
      
     
          </div>
          </div>
          <Footer/>
          </div>
          </div>
               
    );
  };
    

    
  
const mapStateToProps = (state) => ({
  profiles: state.enquiry.profiles,
  user: state.auth.user,
});

export default connect(mapStateToProps, { enquirybyid, loadUser })(ViewEnquiry);
