import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Loader from "../../layout/loader";
const logo = require("../../assets/images/logo/logo.png");




export const Header3 = ({ user }) => {
  const { firstname } = user;
  return (
    <Fragment>
      {user === null ? (
        <Loader />
      ) : (
        <div class="page-header"style={{ paddingBottom: "15px" }} >
        <div class="header-wrapper row m-0">
          <form class="form-inline search-full" action="#" method="get">
            <div class="form-group w-100">
              <div class="Typeahead Typeahead--twitterUsers">
                <div class="u-posRelative">
                  <input
                    class="demo-input Typeahead-input form-control-plaintext w-100"
                    type="text"
                    placeholder="Search Cuba .."
                    name="q"
                    title=""
                    autofocus
                  />
                  <div class="spinner-border Typeahead-spinner" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <i class="close-search" data-feather="x"></i>
                </div>
                <div class="Typeahead-menu"></div>
              </div>
            </div>
          </form>
          <div class="header-logo-wrapper">
            <div class="logo-wrapper">
              <a href="index.html">
                <img class="img-fluid" alt="" />
              </a>
            </div>
            <div class="toggle-sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders status_toggle middle sidebar-toggle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>

            </div>
          </div>
          </div>
         
          <div class="nav-right col-24 pull-right right-header p-0 ">
            <ul class="nav-menus">
            <li class="profile-nav onhover-dropdown p-0 mr-0  ml-auto">
                <div class="media profile-media">
                  <img
                    class="b-r-10"
                    src="../assets/images/dashboard/profile.jpg"
                    alt=""
                  />
                  <div class="media-body">
                    <span>Admin</span>
                    <p class="mb-0 font-roboto">
                      User <i class="middle fa fa-angle-down"></i>
                    </p>
                  </div>
                </div>
                <ul class="profile-dropdown onhover-show-div">
                  <li>
                    <i data-feather="user"></i>
                    <span>Account </span>
                  </li>
                  <li>
                    <i data-feather="mail"></i>
                    <span>Inbox</span>
                  </li>
                  <li>
                    <i data-feather="file-text"></i>
                    <span>Taskboard</span>
                  </li>
                  <li>
                    <i data-feather="settings"></i>
                    <span>Settings</span>
                  </li>
                  <li>
                    <i data-feather="log-in"> </i>
                    <span>Log in</span>
                  </li>
                </ul>
              </li>
              </ul>
              </div>
          
        

        </div>
         
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});


export default Header3;
