import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/auth";

const logo = require("../../assets/images/logo/logo.png");
const sidebar3=()=>{
    return(
    <div class="sidebar-wrapper">
    <div class="logo-wrapper"><a href="index.html"><img class="img-fluid for-light" src={logo} alt=""/>
    <h3 className="d-inline ">Boreman</h3>  
    </a>
      <div class="back-btn"><i class="fa fa-angle-left"></i></div>
      <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
    </div>
    </div> 
    )
}
export default sidebar3