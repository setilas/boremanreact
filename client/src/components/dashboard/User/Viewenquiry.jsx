import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getallenquiry } from "../../../action/Enquiry";
import "../../scss/table.scss";

import Moment from "react-moment";

const ViewEnquiry = ({ getallenquiry, enquiry, profiles, user }) => {
  useEffect(() => {
    getallenquiry(user._id);
  }, [getallenquiry]);
  const activeEnquiry = profiles.length;
  console.log(activeEnquiry);
  return (
    <Fragment>
      <div style={{ height: "600px" }} className="tablebody">
        <div class="container text-center text-white">
          <div class="row pt-5">
            <div class="col-lg-8 mx-auto">
              <h4 className="strong">View Enquiry</h4>
            </div>
          </div>
        </div>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div class="card rounded-0 border-0 shadow tablebox1">
                <div class="card-body p-5">
                  <div class="table-responsive">
                    <table class="table">
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
                      {profiles.length >= 0 ? (
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
              class="btn btn-primary rounded-0 btn-block"
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.enquiry.profiles,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getallenquiry })(ViewEnquiry);
