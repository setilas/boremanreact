import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import { addEnquiry } from "../../../action/Enquiry";
import "../../scss/form.scss";
import { Redirect } from "react-router-dom";
import Alert from "../../Auth/Alert";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Loader from "../../../layout/loader";
import Footer from "../../Layout/Footer";
import "../../scss/page.scss";

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
        <div class="mt-4">
        <div className="login-main ">
          <form
            className="theme-form "
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <h4>Add Enquiry</h4>
            <p>Enter enquiry details </p>
            <Alert />

            <div className="form-group" data-validate="Name is required">
            <label className="col-form-label pt-0">Your Name</label>
            <div className="form-row">
             
              <input
                className="form-control"
                type="text"
                required=""
                name="name"
               
                value={name}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your name"
              />
          
              </div>          
            </div>

            <div className="form-group ">
            <label className="col-form-label pt-0">Location</label>
            <div className="form-row">
              <input
                className="form-control"
                type="text"
                name="location"
                
                value={location}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your location"
              />
            </div>  
            </div>

            <div className="form-group  ">
            <label className="col-form-label pt-0">GPS lat</label>
            <div className="form-row">
              <input
                className="form-control"
                type="text"
                name="lat"
                value={lat}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your latitude"
              />
              </div>
            </div>

            <div className="form-group">
            <label className="col-form-label pt-0">GPS long</label>
            <div className="form-row">
              <input
                className="form-control"
                type="text"
                name="long"
                value={long}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter your longitude"
              />
              </div>
            </div>

            <div className="form-group">
            <label className="col-form-label pt-0">Estimate</label>
            <div className="form-row">
              <input
                className="form-control"
                type="text"
                name="estimate"
                value={estimate}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter estimation"
              />
              </div>
            </div>

            <div className="form-group">
            <label className="col-form-label pt-0">Status</label>
            <div className="form-row">
                <select
                  className="selection-2"
                  name="addstatus"
                  value={addstatus}
                  onChange={(e) => {
                    onChange(e);
                  }}
                >
                  <option>Closed</option>
                  <option>Open</option>
                </select>
              </div>
            </div>

           <div className="form-group mb-0 mt-3">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
          </form>
        </div>
      </div>
      </div>
    </Fragment>
    </div>
    </div>
    <Footer/>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  redirect: state.enquiry.redirect,
});
export default connect(mapStateToProps, { addEnquiry })(Addenquiry);
