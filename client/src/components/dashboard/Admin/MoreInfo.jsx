import React from "react";
import KnobChart from "../../chart";
import { login } from "../../../action/auth";
import { connect } from "react-redux";
import Loader from "../../../layout/loader";
import { Header } from "../../Layout/Header";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/Info.scss";
const logo = require("../../../assets/images/logo/logo.png");

export const MoreInfo = () => {
  return (
    <div class="card">
      <div class="container">
        <div id="main">
          <div class="h-tag"></div>

          <div class="login">
            <table cellspacing="2" align="center" cellpadding="8" border="0">
              <tr>
                <td align="left">Vendor Code :</td>
                <td>
                  <input type="text" placeholder="All" id="t1" class="tb" />
                </td>
              </tr>
              <tr>
                <td align="left">Name :</td>
                <td>
                  <input type="text" placeholder="Ayush" id="t2" class="tb" />
                </td>
              </tr>
              <tr>
                <td align="left">Vendor Address :</td>
                <td>
                  <input
                    type="text"
                    placeholder="Bangalore"
                    id="t3"
                    class="tb"
                  />
                </td>
              </tr>
              <tr>
                <td align="left">Vendor Phone :</td>
                <td>
                  <input
                    type="text"
                    placeholder="9801111111 "
                    id="t4"
                    class="tb"
                  />
                </td>
              </tr>
              <tr>
                <td align="left">Vendor Email :</td>
                <td>
                  <input
                    type="text"
                    placeholder="ayush@gmail.com "
                    id="t5"
                    class="tb"
                  />
                </td>
              </tr>
              <tr>
                <td align="left">Total Enquiry :</td>
                <td>
                  <input type="text" placeholder="15 " id="t6" class="tb" />
                </td>
              </tr>
              <tr>
                <td align="left">Active Enquiry :</td>
                <td>
                  <input type="text" placeholder="5 " id="t7" class="tb" />
                </td>
              </tr>
              <tr>
                <td align="left">Total work completed :</td>
                <td>
                  <input type="text" placeholder="4" id="t8" class="tb" />
                </td>
              </tr>
              <tr>
                <td align="left">Total work Enquiry Estimated :</td>
                <td>
                  <input type="text" placeholder="3900 " id="t9" class="tb" />
                </td>
              </tr>

              <tr>
                <td></td>
                <td align="center">
                  <br>
                    <br>
                      <button class="button button1">Reset Password</button>
                      <button class="button button2">Submit</button>
                      <button class="button button2">Delete</button>
                    </br>
                  </br>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(MoreInfo);
