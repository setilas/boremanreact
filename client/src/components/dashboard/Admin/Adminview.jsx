import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getAllEnquiry } from "../../../action/Enquiry";
import Loader from "../../../layout/loader";
import Moment from "react-moment";
import Header2 from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";

const AdminView = ({ getAllEnquiry, enquiry, profiles, user }) => {
  useEffect(() => {
    getAllEnquiry();
  }, [getAllEnquiry]);
  const activeEnquiry = profiles.length;
  console.log(activeEnquiry);
  return (
    <Fragment>
      <div>
      <Loader />
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
      <div style={{ height: "600px"  }} >
        <div className="container text-center ">
          <div className="row pt-5">
            <div className="col-lg-8 mx-auto">
              <h4 className="strong">View Enquiry</h4>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card rounded-0 border-0 shadow tablebox1">
                <div className="card-body p-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Name</th>
                          <th scope="col">Location</th>
                          <th scope="col">GPS(lat)</th>
                          <th scope="col">GPS(long)</th>
                          <th scope="col">Status</th>
                        </tr>{" "}
                      </thead>
                      {profiles.length > 0 ? (
                        profiles.map((profile) => (
                          <tbody>
                            <tr>
                              <td>
                                {
                                  <Moment format="YYYY/MM/DD">
                                    {profile.date}
                                  </Moment>
                                }
                              </td>
                              <td>{profile.name}</td>
                              <td>{profile.location}</td>
                              <td>{profile.lat}</td>
                              <td>{profile.long}</td>
                              <td>{profile.addstatus}</td>
                            </tr>
                          </tbody>
                        ))
                      ) : (
                        <h1>Nothing</h1>
                      )}
                    </table>
                  </div>
                  {/* <a
              className="btn btn-primary rounded-0 btn-block"
              id="insertRow"
              href="#"
            >
              Add new row
            </a> */}
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
  );
};

const mapStateToProps = (state) => ({
  profiles: state.enquiry.profiles,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllEnquiry })(AdminView);
