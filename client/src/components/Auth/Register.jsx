import React, {  useState } from "react";
import { connect } from "react-redux";
import { register } from "../../action/auth";
import { setAlert } from "../../action/alert";
import { Link, Redirect } from "react-router-dom";
const logo = require("../../assets/images/logo/logo.png");

function Register(props) {
  const [formData, SetFormData] = useState({
    firstname: " ",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  const {
    firstname,
    lastname,
    address,
    phone,
    email,
    password,
    password2,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("password not matching", "danger");
    } else {
      props.register({ firstname, lastname, address, phone, email, password });
    }
  };
  if (props.isAuthenticated) {
    return <Redirect to="/userdashboard" />;
  }

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="index.html">
                  <img
                    className="img-fluid for-light"
                    src={logo}
                    alt="looginpage"
                  />
                  <img
                    className="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div className="login-main">
                <form
                  className="theme-form"
                  onSubmit={(e) => {
                    onSubmit(e);
                  }}
                >
                  <h4>Create your account</h4>
                  <p>Enter your personal details to create account</p>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Your Name</label>
                    <div className="form-row">
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="First name"
                          name="firstname"
                          value={firstname}
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="Last name"
                          name="lastname"
                          value={lastname}
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Address</label>
                    <input
                      className="form-control"
                      type="address"
                      required=""
                      placeholder="Enter your address"
                      name="address"
                      value={address}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Phone</label>
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Enter your Phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        onChange(e);
                      }}
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
                      value={password}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="login[password]"
                        required=""
                        placeholder="Confirm Your password"
                        name="password2"
                        value={password2}
                        onChange={(e) => {
                          onChange(e);
                        }}
                      />
                    </div>
                    <div className="show-hide">
                      <span className="show"></span>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label className="text-muted" htmlFor="checkbox1">
                        Agree with
                        <a className="ml-2" href="#">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <button className="btn btn-primary btn-block" type="submit">
                      Create Account
                    </button>
                  </div>

                  <p className="mt-4 mb-0">
                    Already have an account?
                    <Link to="/login">
                      <a className="ml-2">Sign in</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, setAlert })(Register);
