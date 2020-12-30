import React, { Fragment, useEffect } from "react";

export const Header2 = () => {
  return (
    <Fragment>
      <div class="page-header">
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
          {/* <div class="left-header col horizontal-wrapper pl-0">
                <ul class="horizontal-menu">
                  <li class="mega-menu">
                    <a class="nav-link" href="#">
                      <i data-feather="layers"></i>
                      <span>Bonus Ui</span>
                    </a>
                  </li>
                </ul>
              </div> */}
          <div class="nav-right col-12 pull-right right-header p-0 ">
            <ul class="nav-menus">
              {/* <li class="language-nav">
                  <div class="translate_wrapper">
                    <div class="current_lang">
                      <div class="lang">
                        <i class="flag-icon flag-icon-us"></i>
                        <span class="lang-txt">EN </span>
                      </div>
                    </div>
                    <div class="more_lang">
                      <div class="lang selected" data-value="en">
                        <i class="flag-icon flag-icon-us"></i>
                        <span class="lang-txt">
                          English<span> (US)</span>
                        </span>
                      </div>
                      <div class="lang" data-value="de">
                        <i class="flag-icon flag-icon-de"></i>
                        <span class="lang-txt">Deutsch</span>
                      </div>
                      <div class="lang" data-value="es">
                        <i class="flag-icon flag-icon-es"></i>
                        <span class="lang-txt">Español</span>
                      </div>
                      <div class="lang" data-value="fr">
                        <i class="flag-icon flag-icon-fr"></i>
                        <span class="lang-txt">Français</span>
                      </div>
                      <div class="lang" data-value="pt">
                        <i class="flag-icon flag-icon-pt"></i>
                        <span class="lang-txt">
                          Português<span> (BR)</span>
                        </span>
                      </div>
                      <div class="lang" data-value="cn">
                        <i class="flag-icon flag-icon-cn"></i>
                        <span class="lang-txt">简体中文</span>
                      </div>
                      <div class="lang" data-value="ae">
                        <i class="flag-icon flag-icon-ae"></i>
                        <span class="lang-txt">
                          لعربية <span> (ae)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li> */}
              {/* <li>
                  {" "}
                  <span class="header-search">
                    <i data-feather="search"></i>
                  </span>
                </li> */}
              {/* <li class="onhover-dropdown">
                  <div class="notification-box">
                    <i data-feather="bell"></i>
                    <span class="badge badge-pill badge-secondary">4</span>
                  </div>
                  <ul class="notification-dropdown onhover-show-div">
                    <li class="bg-primary text-center">
                      <h6 class="f-18 mb-0">Notitication</h6>
                      <p class="mb-0">You have 4 new notification</p>
                    </li>
                    <li>
                      <p>
                        <i class="fa fa-circle-o mr-3 font-primary"> </i>
                        Delivery processing{" "}
                        <span class="pull-right">10 min.</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fa fa-circle-o mr-3 font-success"></i>
                        Order Complete<span class="pull-right">1 hr</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fa fa-circle-o mr-3 font-info"></i>
                        Tickets Generated
                        <span class="pull-right">3 hr</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fa fa-circle-o mr-3 font-danger"></i>
                        Delivery Complete
                        <span class="pull-right">6 hr</span>
                      </p>
                    </li>
                    <li>
                      <a class="btn btn-primary" href="#">
                        Check all notification
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="mode">
                    <i class="fa fa-moon-o"></i>
                  </div>
                </li>
                <li class="cart-nav onhover-dropdown">
                  <div class="cart-box">
                    <i data-feather="shopping-cart"></i>
                    <span class="badge badge-pill badge-primary">2</span>
                  </div>
                  <ul class="cart-dropdown chat-dropdown onhover-show-div">
                    <li class="bg-primary text-center">
                      <h6 class="f-18 mb-0">Shoping cart</h6>
                      <p class="mb-0">You have 3 items in your cart</p>
                    </li>
                    <li class="mt-0">
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3 img-60"
                          src="../assets/images/ecommerce/01.jpg"
                          alt=""
                        />
                        <div class="media-body">
                          <span>Boy's T-shirt</span>
                          <p>It is a long established fact that a reader</p>

                          <h6 class="f-12 light-font">1 x $ 299.00</h6>
                        </div>
                        <div class="close-circle">
                          <a href="#">
                            <i data-feather="x"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3 img-60"
                          src="../assets/images/ecommerce/02.jpg"
                          alt=""
                        />
                        <div class="media-body">
                          <span>Girls's T-shirt</span>
                          <p>It is a long established fact that a reader</p>
                          <h6 class="f-12 light-font">1 x $ 199.00</h6>
                        </div>
                        <div class="close-circle">
                          <a href="#">
                            <i data-feather="x"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3 img-60"
                          src="../assets/images/ecommerce/08.jpg"
                          alt=""
                        />
                        <div class="media-body">
                          <span>Girls's T-shirt</span>
                          <p>It is a long established fact that a reader</p>
                          <h6 class="f-12 light-font">2 x $ 199.00</h6>
                        </div>
                        <div class="close-circle">
                          <a href="#">
                            <i data-feather="x"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="total">
                        <h6 class="mb-0 mt-1">
                          Subtotal : <span class="f-right">$799.00</span>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div class="buttons">
                        <h6 class="mb-0">
                          <a class="view-cart" href="cart.html">
                            View Cart
                          </a>
                          <a class="checkout f-right" href="#">
                            Checkout
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="onhover-dropdown">
                  <i data-feather="message-square"></i>
                  <ul class="chat-dropdown onhover-show-div">
                    <li class="bg-primary text-center">
                      <h6 class="f-18 mb-0">Message Box</h6>
                      <p class="mb-0">You have 3 new messages </p>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3"
                          src="../assets/images/user/1.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="media-body">
                          <span>Erica Hughes</span>
                          <p>Lorem Ipsum is simply dummy...</p>
                        </div>
                        <p class="f-12 font-success">58 mins ago</p>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3"
                          src="../assets/images/user/2.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="media-body">
                          <span>Kori Thomas</span>
                          <p>Lorem Ipsum is simply dummy...</p>
                        </div>
                        <p class="f-12 font-success">1 hr ago</p>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="img-fluid rounded-circle mr-3"
                          src="../assets/images/user/4.jpg"
                          alt=""
                        />
                        <div class="status-circle offline"></div>
                        <div class="media-body">
                          <span>Ain Chavez</span>
                          <p>Lorem Ipsum is simply dummy...</p>
                        </div>
                        <p class="f-12 font-danger">32 mins ago</p>
                      </div>
                    </li>
                    <li class="text-center">
                      {" "}
                      <a class="btn btn-primary" href="#">
                        View All{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="maximize">
                  <a
                    class="text-dark"
                    href="#!"
                    onclick="javascript:toggleFullScreen()"
                  >
                    <i data-feather="maximize"></i>
                  </a>
                </li> */}
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
      </div>
    </Fragment>
  );
};

export default Header2;
