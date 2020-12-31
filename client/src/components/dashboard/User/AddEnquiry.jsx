import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import { addEnquiry } from "../../../action/Enquiry";
import "../../scss/form.scss";
import { Redirect } from "react-router-dom";
import Alert from "../../Auth/Alert";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Loader from "../../../layout/loader";

const Addenquiry = ({ addEnquiry, redirect }) => {
  const [enquiry, setEnquiry] = useState({
    name: " ",
    location: " ",
    lat: "",
    long: " ",
    estimate: " ",
    addstatus: " ",
  });

  const { name, location, lat, long, estimate, addstatus } = enquiry;
  const onChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEnquiry({ name, location, lat, long, estimate, addstatus });
  };

  return (

    <div>

     <Loader />
      <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
      <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {/*  page header */}
        <Header />
        {/* page body contains sidebar and content  */}
        <div class="page-body-wrapper sidebar-icon document-content">
          <Sidebar/>

          <div class="page-body1">
        

    <Fragment>
      <div className="admin-card">
        <div className="wrap-contact100">
          <form
            className="contact100-form "
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <span className="contact100-form-title">Add enquiry</span>
            <Alert />

            <div className="wrap-input100 " data-validate="Name is required">
              <span className="label-input100">Your Name</span>
              <input
                className="input100"
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your name"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 ">
              <span className="label-input100">Location</span>
              <input
                className="input100"
                type="text"
                name="location"
                value={location}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your location"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 ">
              <span className="label-input100">GPS lat</span>
              <input
                className="input100"
                type="text"
                name="lat"
                value={lat}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your latitude"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <span className="label-input100"> GPS Long</span>
              <input
                className="input100"
                type="text"
                name="long"
                value={long}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your longitude"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 ">
              <span className="label-input100">Estimate</span>
              <input
                className="input100"
                type="text"
                name="estimate"
                value={estimate}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter estimation"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 input100-select">
              <span className="label-input100">status</span>
              <div>
                <select
                  className="selection-2"
                  name="addstatus"
                  value={addstatus}
                  onChange={(e) => {
                    onChange(e);
                  }}
                >
                  <option>closed</option>
                  <option>Open</option>
                </select>
              </div>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <div className="wrap-contact100-form-btn">
                <div className="contact100-form-bgbtn"></div>
                <button className="contact100-form-btn">
                  <span>
                    Submit
                    <i
                      className="fa fa-long-arrow-right m-l-7"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
    </div>
    </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  redirect: state.enquiry.redirect,
});
export default connect(mapStateToProps, { addEnquiry })(Addenquiry);
