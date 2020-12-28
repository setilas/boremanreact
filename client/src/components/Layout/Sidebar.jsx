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
    <div class="sidebar-wrapper">
      <div class="logo-wrapper">
        <a href="index.html">
          
          <img
            class="img-fluid for-light"
            src={logo}
            alt=""
          />
          <h3 className="d-inline">Boreman</h3>
         
          <img
            class="img-fluid for-dark"
            src="../assets/images/logo/logo_dark.png"
            alt=""
          />
        </a>
        <div class="back-btn">
          <i class="fa fa-angle-left" ></i>
        </div>
        <div class="toggle-sidebar">
          <i class="status_toggle middle sidebar-toggle" data-feather="grid">
            {" "}
          </i>
        </div>
      </div>
      <div class="logo-icon-wrapper">
        <a href="index.html">
          <img
            class="img-fluid"
            src="../assets/images/logo/logo-icon.png"
            alt=""
          />
        </a>
      </div>

      
      <nav class="sidebar-main">
        <div class="left-arrow" id="left-arrow">
          <i data-feather="arrow-left"></i>
        </div>
        <div id="sidebar-menu">
          
          <ul class="sidebar-links custom-scrollbar">
            <li class="back-btn">
              <a href="index.html">
                <img
                  class="img-fluid"
                  src="../assets/images/logo/logo-icon.png"
                  alt=""
                />
              </a>
              <div class="mobile-back text-right">
                <span>Back</span>
                <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
              </div>
            </li>

            <li class="sidebar-list ">
              <label class="badge badge-success">4</label>
              <a class="sidebar-link sidebar-title" href="#">
                <i data-feather="home"></i>
                <span class="lan-3">Dashboard </span>
              </a>
              <ul class="sidebar-submenu">
                <li className="sidebar-list">
                  <Link to="/addenquiry">AddEnquiry</Link>
                </li>
                <li>
                  <Link to="/viewenquiry">ViewEnquiry</Link>
                </li>
                <li>
                  <Link to="/status">status</Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>


      </nav>

      
    </div>
    
    
  );
};

export default connect(null, { logout })(Sidebar);
