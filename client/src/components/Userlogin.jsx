import React, { Fragment, useState } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "../action/auth";
import { connect } from "react-redux";
import { MarginTop } from "../constant";
const loginbg = require("../assets/images/login/1.jpg");
const Loginuser = ({ login, isAuthenticated }) => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/user/dashboard" />;
  }
  return (
    <div class="container-fluid">
      <div class="row ">
        <div class="col-xl-5">
          <img class="bg-img-cover bg-center" src={loginbg} alt="looginpage" />
        </div>
        <div class="col-xl-7 p-0">
          <div class="login-card">
            <div>
              <div class="login-main">
                <form class="theme-form" onSubmit={(e) => onSubmit(e)}>
                  <h4>Sign in to account</h4>
                  <p>Enter your email & password to login</p>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input
                      class="form-control"
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
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      value={password}
                      required=""
                      placeholder="*********"
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <div class="show-hide">
                      <span class="show"> </span>
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label class="text-muted" for="checkbox1">
                        Remember password
                      </label>
                    </div>
                    <button class="btn btn-primary btn-block" type="submit">
                      Sign in
                    </button>
                  </div>
                  <p class="mt-4 mb-0">
                    Don't have account?
                    <Link to="/user">
                      <a class="ml-2">Create Account</a>
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
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Loginuser);
