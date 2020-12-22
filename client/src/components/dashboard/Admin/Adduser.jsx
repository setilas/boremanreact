import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { addVendor } from "../../../action/vendor";
import { connect } from "react-redux";
import { setAlert } from "../../../action/alert";

const Addview = ({ addVendor, setAlert }) => {
  const [vendor, setVendor] = useState({
    vendorName: "",
    vendorLastName: " ",
    vendorAddress: " ",
    vendorPhone: " ",
    vendorEmail: " ",
    password: "",
  });

  const {
    vendorName,
    vendorLastName,
    vendorAddress,
    vendorPhone,
    vendorEmail,
    password,
  } = vendor;

  const onChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };
  console.log(vendor);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(vendor);
    addVendor({
      vendorName,
      vendorLastName,
      vendorAddress,
      vendorPhone,
      vendorEmail,
      password,
    });
  };

  return (
    <div className="container-fluid p-0 ">
      <div className="row">
        <div className="col-12">
          <div className="admin-card">
            <div>
              <div></div>
              <div className="login-main ">
                <form
                  className="theme-form"
                  onSubmit={(e) => {
                    onSubmit(e);
                  }}
                >
                  <h4>Add User</h4>
                  <p>Enter vendor details </p>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Vendor Name</label>
                    <div className="form-row">
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="First name"
                          name="vendorName"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          value={vendorName}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="Last name"
                          name="vendorLastName"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          value={vendorLastName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Address</label>
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="vendor vendorAddress"
                      name="vendorAddress"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={vendorAddress}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Phone</label>
                    <input
                      className="form-control"
                      type="tel"
                      required=""
                      placeholder="mobile number"
                      name="vendorPhone"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={vendorPhone}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Email</label>
                    <input
                      className="form-control"
                      type="vendorEmail"
                      required=""
                      placeholder="Test@gmail.com"
                      name="vendorEmail"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={vendorEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="login[password]"
                      required=""
                      placeholder="*********"
                      name="password"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={password}
                    />

                    <div className="show-hide">
                      <button type="button" class="btn-primary-outline btn-sm">
                        Generate Password
                      </button>
                    </div>
                  </div>

                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.vendor.loading,
});

export default connect(null, { addVendor, setAlert })(Addview);
