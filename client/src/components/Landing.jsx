import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const decore1 = require("../assets/images/landing/decore/1.png");
const decore2 = require("../assets/images/landing/decore/2.png");
const decore3 = require("../assets/images/landing/decore/3.png");
const decore4 = require("../assets/images/landing/decore/4.png");
const landing1 = require("../assets/images/landing/2.png");
const landing2 = require("../assets/images/landing/decore/1.png");
const landing3 = require("../assets/images/landing/decore/1.png");
const landing4 = require("../assets/images/landing/decore/cloud.png");
const landing_logo = require("../assets/images/landing/landing_logo.png");
const html = require("../assets/images/landing/icon/html/html.png");
const react = require("../assets/images/landing/icon/react/react.png");
const react2 = require("../assets/images/landing/icon/laravel/laravel2.png");
const angular = require("../assets/images/landing/icon/angular/angular.svg");
const screen1 = require("../assets/images/landing/screen1.jpg");
const screen2 = require("../assets/images/landing/screen2.jpg");
const light = require("../assets/images/landing/layout/light.jpg");
const dark = require("../assets/images/landing/layout/dark.jpg");
const semidark = require("../assets/images/landing/layout/semidark.jpg");


const loginpng = require("../assets/images/myicons/login.png");
const landing = require("../assets/images/landing/2.png");
const logopng = require("../assets/images/landing/landing_logo.png");


export const Landing = () => {
  return (
    <div className="page-wrapper landing-page">
      <div className="landing-home">
        <ul className="decoration">
          <li className="one">
            <img
              className="img-fluid"
              src={decore1}
              alt=""
            />
          </li>
          <li className="two">
            <img
              className="img-fluid"
              src={decore2}
              alt=""
            />
          </li>
          <li className="three">
            <img
              className="img-fluid"
              src={decore3}
              alt=""
            />
          </li>
          <li className="four">
            <img
              className="img-fluid"
              src={decore4}
              alt=""
            />
          </li>
          <li className="five">
            <img
              className="img-fluid"
              src={decore2}
              alt=""
            />
          </li>
          <li className="six">
            <img
              className="img-fluid"
              src={landing4}
              alt=""
            />
          </li>
          <li className="seven">
            <img className="img-fluid" src={landing} alt="" />
          </li>
        </ul>
        <div className="container-fluid">
          <div className="sticky-header">
            <header>
              <nav
                className="navbar navbar-b navbar-trans navbar-expand-xl fixed-top nav-padding"
                id="sidebar-menu"
              >

                <a className="navbar-brand p-0" href="#">
                  <img
                    className="img-fluid"
                    src={landing_logo}
                    alt=""
                  />

                <a className="navbar-brand p-0 " href="#">
                  <img className="img-fluid " src={logopng} alt="" />
                  <h3 class="d-inline align-middle">Boreman</h3>

                </a>
                <button
                  className="navbar-toggler navabr_btn-set custom_nav"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarDefault"
                  aria-controls="navbarDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div
                  className="navbar-collapse justify-content-end collapse hidenav"
                  id="navbarDefault"
                >
                  <ul className="navbar-nav navbar_nav_modify" id="scroll-spy">
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#layout">
                        Layout
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="#dashboards">
                        Dashboards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#components">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#applications">
                        Register
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#frameworks">
                        Frameworks
                      </a>
                    </li> */}
                    {/* <li className="nav-item buy-btn">
                      <a
                        className="nav-link js-scroll"
                        href="https://1.envato.market/3GVzd"
                        target="_blank"
                      >
                        Purchase
                      </a>
                    </li> */}
                  </ul>
                </div>
              </a>
              </nav>
            </header>
          </div>
          
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="content">
                <div>
                  <h1 className="wow fadeIn">Boreman</h1>
                  <h1 className="wow fadeIn"></h1>
                  {/* <h2 className="txt-secondary wow fadeIn">
                    Faster, Lighter & Dev. Friendly
                  </h2> */}
                  <p className="mt-3 wow fadeIn">
                    Boreman Limited are presently the only Irish Company using
                    their own designs and tooling to manufacturer "E"
                    Homologated Auto-Electric Lighting for the truck ...
                  </p>
                  <div className="btn-grp mt-4">
                    <Link
                      to="/login"
                      className="btn btn-pill btn-primary btn-air-primary btn-lg mr-3 wow pulse"
                    >
                  

                      <img
                        src={html}
                        alt=""
                      />
                      HTML
                    
                    

                      <img src={loginpng} alt="" />
                      Login
                    </Link>
                    <Link
                      to="/register"

                      className="btn btn-pill btn-secondary btn-air-secondary btn-lg mr-3 wow pulse"
                    >

                      <img
                        src={react}
                        alt=""
                      />
                      React
                    
                    

                      <i src="../assets/images/landing/" alt="" />
                      Register
                    </Link>
                    {/* <a

                      className="btn btn-pill btn-success btn-air-success btn-lg wow pulse mr-3"
                      href="http://laravel.pixelstrap.com/cuba/pages/landing"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={react2}
                        alt=""
                      />
                      Laravel
                    </a> */}
                    {/* <a
                      className="btn btn-pill btn-info btn-air-info btn-lg wow pulse"
                      href="http://angular.pixelstrap.com/cuba/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={angular}
                        alt=""
                      />
                      Angular
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="wow fadeIn">
                <img
                  className="screen1"
                  src={screen1}
                  alt=""
                />
              </div>
              <div className="wow fadeIn">
                <img
                  className="screen2"
                  src={screen2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="section-space cuba-demo-section layout" id="layout">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>8+</h2>
                  <p>Admin Unique Layouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="owl-carousel owl-theme layout-slider">
            <div className="item wow fadeIn">
              <h5>Light Layout </h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="index.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/dashboard/index"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="../theme/index.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src={light}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Dark Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="layout-dark.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/layout-dark"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="layout-dark.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src={dark}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Semi Dark</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="semi-dark.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/dashboard/index"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="lndex.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src={semidark}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Compact Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="compact"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/compact-layout"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="lndex.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/layout/compact.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Box Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="box-layout.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/layout-box"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="box-layout.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/layout/box.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Vertical Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="index.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/vertical-layout"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="layout-light.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/layout/vertical.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Vetical Box Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="index.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/vertical-box-layout"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="general-widget.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/layout/vertical&amp;box.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item wow fadeIn">
              <h5>Compact Dark Layout</h5>
              <div className="img-effect">
                <div className="hover-link">
                  <a
                    className="btn btn-primary btn-air-primary"
                    href="compact-dark.html"
                    target="_blank"
                  >
                    Html
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://react.pixelstrap.com/cuba/dashboard/default"
                    target="_blank"
                  >
                    React
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://laravel.pixelstrap.com/cuba/page-layouts/compact-dark-layout"
                    target="_blank"
                  >
                    Laravel
                  </a>
                  <a
                    className="btn btn-primary btn-air-primary ml-2"
                    href="http://angular.pixelstrap.com/cuba/"
                    target="_blank"
                  >
                    Angular
                  </a>
                  <a
                    className="btn btn-secondary btn-air-secondary ml-2"
                    href="layout-rtl.html"
                    target="_blank"
                  >
                    RTL
                  </a>
                </div>
                <a href="general-widget.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/layout/compact&amp;dark.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section
        className="section-space cuba-demo-section frameworks-section"
        id="frameworks"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>4+</h2>
                </div>
                <p className="mb-0">Top Frameworks</p>
              </div>
            </div>
            <div className="col-sm-12 framworks">
              <ul
                className="nav nav-pills justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link d-flex active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    {" "}
                    <img
                      src="../assets/images/landing/icon/html/html.png"
                      alt=""
                    />
                    <div className="text-left">
                      <h5 className="mb-0">HTML</h5>
                      <p className="mb-0">Frameworks</p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    {" "}
                    <img
                      src="../assets/images/landing/icon/react/react1.png"
                      alt=""
                    />
                    <div className="text-left">
                      <h5 className="mb-0">React</h5>
                      <p className="mb-0">Frameworks</p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex nav-link"
                    id="pills-angular-tab"
                    data-toggle="pill"
                    href="#pills-angular"
                    role="tab"
                    aria-controls="pills-angular"
                    aria-selected="false"
                  >
                    {" "}
                    <img
                      src="../assets/images/landing/icon/angular/angular.svg"
                      alt=""
                    />
                    <div className="text-left">
                      <h5 className="mb-0">Angular</h5>
                      <p className="mb-0">Frameworks</p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    {" "}
                    <img
                      src="../assets/images/landing/icon/laravel/laravel.png"
                      alt=""
                    />
                    <div className="text-left">
                      <h5 className="mb-0">Laravel</h5>
                      <p className="mb-0">Frameworks</p>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-5" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <ul className="framworks-list">
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/bootstrap.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Booxstrap 4X</h6>
                    </li>
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/css.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">CSS</h6>
                    </li>
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/sass.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Sass</h6>
                    </li>
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/pug.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Pug</h6>
                    </li>
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/npm.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">NPM</h6>
                    </li>
                    <li className="box wow fadeInUp">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/gulp.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Gulp</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/kit.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Starter Kit</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/uikits.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">40+ UI Kits</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/layout.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">8+ Layout</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/builders.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Builders</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/iconset.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">11 Icon Sets</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/forms.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Forms</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/table.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Tables</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/apps.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">17+ Apps</h6>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <ul className="framworks-list">
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/hook.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">React Hook</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/reactstrap.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">React Strap</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/noquery.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">No Jquery</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/redux.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Redux</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/firebase.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Firebase Auth</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/crud.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Firebase Crud</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/chat.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Chat</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/animation.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Router Animation</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/props_state.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">State & Props</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/reactrouter.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Reactrouter</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/chart.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Amazing Chart</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/map.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Map</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/gallery.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Gallery</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/react/application.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">9+ Apps</h6>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-angular"
                  role="tabpanel"
                  aria-labelledby="pills-angular-tab"
                >
                  <ul className="framworks-list">
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/1.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">SCSS</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/2.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Ng Bootstrap</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/3.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">RXjs</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/4.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Router</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/5.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Form</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/6.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Apex chart</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/7.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Chart.js</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/8.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Chartist</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/9.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Google Map</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/10.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Gallery</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/11.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Ecommerce</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/12.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Firebase Auth</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/13.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Firebase Crud</h6>
                    </li>
                    <li className="box wow bounceIn">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/angular/14.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Chat</h6>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <ul className="framworks-list">
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/laravel.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Laravel 7</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/bootstrap.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Bootstrap 4</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/html/sass.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">SASS</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/blade.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Blade</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/layouts.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Layouts</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/npm.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">NPM</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/mix.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">MIX</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/yarn.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Yarn</h6>
                    </li>
                    <li className="box">
                      <div>
                        {" "}
                        <img
                          src="../assets/images/landing/icon/laravel/sasswebpack.png"
                          alt=""
                        />
                      </div>
                      <h6 className="mb-0 mt-3">Sasswebpack</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space cuba-demo-section" id="dashboards">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>2+</h2>
                </div>
                <p>Dashboard </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-modify">
          <div className="row dashboard">
            <div className="col-lg-6 col-sm-6 wow fadeIn">
              <div className="img-effect">
                <a href="index.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/dafault-dashboard.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Default Dashboard</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 wow fadeIn">
              <div className="img-effect">
                <a href="../theme/dashboard-02.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/ecommerce-dashboard.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Ecommerce Dashboard</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section-space cuba-demo-section bg-Widget pb-0 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>Cards</h2>
                </div>
                <p>So many unique cards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid o-hidden">
          <div className="row landing-cards">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-sm-5 col-12">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-4 col-7">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-3 col-5">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-8 col-12">
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-5">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/7.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-7">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/8.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-12">
                  <div className="row">
                    <div className="col-sm-12 col-6">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-12 col-6">
                      <img
                        className="img-fluid landing-card"
                        src="../assets/images/landing/cards/9.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-sm-4">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/10.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-sm-4">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/15.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/11.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/21.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-sm-4">
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/14.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid landing-card"
                    src="../assets/images/landing/cards/13.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-space cuba-demo-section app_bg"
        id="applications"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>20+</h2>
                </div>
                <p>Usefull application</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-modify apps">
          <div className="landing-slider owl-carousel owl-theme">
            <div className="item">
              <div className="img-effect">
                <a href="../theme/social-app.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/social-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Social App</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/knowledgebase.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/knowlagebase-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>knowledgebase</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/support-ticket.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/support-ticket-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Support Ticket</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/email-application.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/mail-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Email Dashboard</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/to-do.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/To-Do-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>To-Do</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/job-cards-view.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/job-search-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Job Search</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/product-page.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/ecommerce-app.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Ecommerce</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/kanban.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/apps/kanban.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Kanban</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/file-manager.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/apps/file.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>File Manager</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/projects.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/apps/project.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Project</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/contacts.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/apps/contacts.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Contacts</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="img-effect">
                <a href="../theme/chat.html" target="_blank">
                  <img
                    className="img-fluid cuba-img"
                    src="../assets/images/landing/apps/chat.jpg"
                    alt=""
                  />
                  <div className="cuba_img_content">
                    <h4>Chat</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space cuba-demo-section email_bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2> Email</h2>
                  <p> Usefull Templates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid"
          src="../assets/images/landing/email_section_img.jpg"
          alt=""
        />
      </section>
      <section
        className="section-space cuba-demo-section components-section"
        id="components"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 wow pulse">
              <div className="cuba-demo-content mt50">
                <div className="couting">
                  <h2>UI</h2>
                </div>
                <p>Components</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-modify">
          <div className="row component_responsive">
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/1.png" alt="" />
                <h6 className="m-0 Pt-4">SweetAlert2</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/2.png" alt="" />
                <h6 className="m-0">Avatar</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/3.png" alt="" />
                <h6 className="m-0">Scrollable</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/4.png" alt="" />
                <h6 className="m-0">Tree view</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/5.png" alt="" />
                <h6 className="m-0">Bootstrap notify</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/6.png" alt="" />
                <h6 className="m-0">Rating </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/7.png" alt="" />
                <h6 className="m-0">Dropzone</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/8.png" alt="" />
                <h6 className="m-0">Tour</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/9.png" alt="" />
                <h6 className="m-0">Animated modal</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/10.png" alt="" />
                <h6 className="m-0">Owl Carousel</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/11.png" alt="" />
                <h6 className="m-0">Ribbons </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/12.png" alt="" />
                <h6 className="m-0">Pagination </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/13.png" alt="" />
                <h6 className="m-0">Steps </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/14.png" alt="" />
                <h6 className="m-0">Breadcrumb </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/15.png" alt="" />
                <h6 className="m-0">Range Slider </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/16.png" alt="" />
                <h6 className="m-0">image cropper </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/17.png" alt="" />
                <h6 className="m-0">Sticky </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/18.png" alt="" />
                <h6 className="m-0">Progress </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/19.png" alt="" />
                <h6 className="m-0">Tooltip </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/20.png" alt="" />
                <h6 className="m-0">Spinners </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/21.png" alt="" />
                <h6 className="m-0">Dropdown </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/22.png" alt="" />
                <h6 className="m-0">Tabs </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/23.png" alt="" />
                <h6 className="m-0">Accordion </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/24.png" alt="" />
                <h6 className="m-0">Navs</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/25.png" alt="" />
                <h6 className="m-0">Shadow</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/26.png" alt="" />
                <h6 className="m-0">state color</h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/27.png" alt="" />
                <h6 className="m-0">List </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/28.png" alt="" />
                <h6 className="m-0">Grid </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/29.png" alt="" />
                <h6 className="m-0">Helper classes </h6>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 component-col-set">
              <div className="component-hover-effect">
                <img src="../assets/images/landing/icon/30.png" alt="" />
                <h6 className="m-0">Typography</h6>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="footer-bg">
        <div className="container">
          <div className="landing-center ptb50">
            <div className="title">
              <img className="img-fluid" src={logopng} alt="" />
            </div>
            <div className="footer-content">
              <h1>
                The Cuba Bootstrap Admin Theme Trusted By Many Developers World
                Wide.
              </h1>
              <p>If You like Our Theme So Please Rate Us.</p>
              <a
                className="btn mrl5 btn-lg btn-primary default-view"
                target="_blank"
                href="index.html"
              >
                Check Now
              </a>
              <a
                className="btn mrl5 btn-lg btn-secondary btn-md-res"
                target="_blank"
                href="https://1.envato.market/3GVzd"
              >
                Buy Now{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
