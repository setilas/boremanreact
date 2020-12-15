import React from "react";
import { CardBody, Card, CardHeader, Row } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/auth";

const logo = require("../../assets/images/logo/logo.png");

const Sidebar = ({ logout }) => {
  const logouthandler = () => {
    logout();
  };

  return (
    <div class="page-body-wrapper sidebar-icon">
      <div class="sidebar-wrapper">
        <div class="logo-wrapper pl-3">
          <a href="/">
            <img class="img-fluid pl-5 " src={logo} alt="" />
          </a>
        </div>
        <nav>
          <div class="sidebar-main">
            <div id="sidebar-menu">
              <Card>
                <CardHeader>
                  <div class="left-header col horizontal-wrapper pl-0">
                    <ul class="horizontal-menu">
                      <li class="mega-menu">
                        <a class="nav-link" href="#">
                          <i data-feather="layers"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Link to="/addenquiry">
                      <button className="btn btn-primary buttonsize">
                        AddEnquiry
                      </button>
                    </Link>
                  </Row>
                  <Row>
                    <Link to="/viewenquiry">
                      <button className="btn btn-success buttonsize">
                        ViewEnquiry
                      </button>
                    </Link>
                  </Row>
                  <Row>
                    <Link to="/status">
                      <button
                        className="btn btn-secondary buttonsize"
                        style={{ paddingRight: "90px" }}
                      >
                        status
                      </button>
                    </Link>
                  </Row>
                  <Row>
                    {/* <button
                      href="/"
                      onClick={() => {
                        logouthandler();
                      }}
                      className="btn btn-danger buttonsize    "
                      style={{ paddingRight: "85px" }}
                    >
                      Logout
                    </button> */}
                    <a onClick={logout} href="/">
                      <button
                        className="btn btn-danger buttonsize    "
                        style={{ paddingRight: "85px" }}
                      >
                        Logout
                      </button>
                    </a>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(null, { logout })(Sidebar);
