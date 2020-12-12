import React from "react";
import { CardBody, Card, CardHeader, Row } from "reactstrap";
import { Link } from "react-router-dom";
const logo = require("../../assets/images/logo/logo.png");

export const Sidebar = () => {
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
                    <Link>
                      <button
                        className="btn btn-danger buttonsize    "
                        style={{ paddingRight: "85px" }}
                      >
                        Logout
                      </button>
                    </Link>
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
