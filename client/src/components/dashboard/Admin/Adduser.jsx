import React, {  useState } from "react";
import {  Redirect } from "react-router-dom";
import { addVendor } from "../../../action/vendor";
import { connect } from "react-redux";
import { setAlert } from "../../../action/alert";
import Loader from "../../../layout/loader";
import Alert from "../../../components/Auth/Alert";
import Header2 from "../../Layout/Header2";
import Sidebar2 from "../../Layout/Sidebar2";
import "../../scss/page.scss";

const Addview = ({ addVendor, setAlert, redirect }) => {
  const [vendor, setVendor] = useState({
    firstname: " ",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, address, phone, email, password } = vendor;

  const onChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addVendor({
      firstname,
      lastname,
      address,
      phone,
      email,
      password,
    });
  };

  return (
    
    <div>

     <Loader />
      <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
      <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {/*  page header */}
        <Header2 />
        {/* page body contains sidebar and content  */}
        <div class="page-body-wrapper sidebar-icon document-content">
          <Sidebar2></Sidebar2>

          <div class="page-body1">
        
    
       
          <div className="admin-card" >
            <div>
              <div></div>
              <div className="login-main ">
                <Alert />
                <form
                  className="theme-form"
                  onSubmit={(e) => {
                    onSubmit(e);
                  }}
                >
                  <h4>Add User</h4>
                  <p>Enter vendor details </p>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Vendor Name</label>
                    <div className="form-row">
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="First name"
                          name="firstname"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          value={firstname}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          required=""
                          placeholder="Last name"
                          name="lastname"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          value={lastname}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Address</label>
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="vendor address"
                      name="address"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={address}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Phone</label>
                    <input
                      className="form-control"
                      type="tel"
                      required=""
                      placeholder="mobile number"
                      name="phone"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={phone}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Vendor Email</label>
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
                      name="email"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={email}
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
                      onChange={(e) => {
                        onChange(e);
                      }}
                      value={password}
                    />

                    <div className="show-hide">
                      <button type="button" class="btn-primary-outline btn-sm">
                        Generate Password
                      </button>
                    </div>
                  </div>

                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    
     </div>
    </div>
    
               
              
        


    
  );
};
    
    // <div className="container-fluid p-0 ">
    //   <div className="row">
    //     <div className="col-12">
    //       <div className="admin-card">
    //         <div>
    //           <div></div>
    //           <div className="login-main ">
    //             <Alert />
    //             <form
    //               className="theme-form"
    //               onSubmit={(e) => {
    //                 onSubmit(e);
    //               }}
    //             >
    //               <h4>Add User</h4>
    //               <p>Enter vendor details </p>
    //               <div className="form-group">
    //                 <label className="col-form-label pt-0">Vendor Name</label>
    //                 <div className="form-row">
    //                   <div className="col-6">
    //                     <input
    //                       className="form-control"
    //                       type="text"
    //                       required=""
    //                       placeholder="First name"
    //                       name="firstname"
    //                       onChange={(e) => {
    //                         onChange(e);
    //                       }}
    //                       value={firstname}
    //                     />
    //                   </div>
    //                   <div className="col-6">
    //                     <input
    //                       className="form-control"
    //                       type="text"
    //                       required=""
    //                       placeholder="Last name"
    //                       name="lastname"
    //                       onChange={(e) => {
    //                         onChange(e);
    //                       }}
    //                       value={lastname}
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="form-group">
    //                 <label className="col-form-label">Vendor Address</label>
    //                 <input
    //                   className="form-control"
    //                   type="text"
    //                   required=""
    //                   placeholder="vendor address"
    //                   name="address"
    //                   onChange={(e) => {
    //                     onChange(e);
    //                   }}
    //                   value={address}
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label className="col-form-label">Vendor Phone</label>
    //                 <input
    //                   className="form-control"
    //                   type="tel"
    //                   required=""
    //                   placeholder="mobile number"
    //                   name="phone"
    //                   onChange={(e) => {
    //                     onChange(e);
    //                   }}
    //                   value={phone}
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label className="col-form-label">Vendor Email</label>
    //                 <input
    //                   className="form-control"
    //                   type="email"
    //                   required=""
    //                   placeholder="Test@gmail.com"
    //                   name="email"
    //                   onChange={(e) => {
    //                     onChange(e);
    //                   }}
    //                   value={email}
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label className="col-form-label">Password</label>
    //                 <input
    //                   className="form-control"
    //                   type="password"
    //                   name="login[password]"
    //                   required=""
    //                   placeholder="*********"
    //                   name="password"
    //                   onChange={(e) => {
    //                     onChange(e);
    //                   }}
    //                   value={password}
    //                 />

    //                 <div className="show-hide">
    //                   <button type="button" class="btn-primary-outline btn-sm">
    //                     Generate Password
    //                   </button>
    //                 </div>
    //               </div>

    //               <div className="form-group mb-0">
    //                 <button className="btn btn-primary btn-block" type="submit">
    //                   Submit
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    


const mapStateToProps = (state) => ({
  redirect: state.vendor.redirect,
});

export default connect(mapStateToProps, { addVendor, setAlert })(Addview);
