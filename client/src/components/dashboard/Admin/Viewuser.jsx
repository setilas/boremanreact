import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import DataTables from "../../Layout/DataTable";

const Viewuser = (props) => {

  
    return (
          <div  className="container-fluid p-0 " >
          <div className="row">
            <div className="col-12">
              <div className="admin-card">
                <div>
                  <div>
                    
                  
                  </div>
                  <div className="login-main " >
                    <form
                      className="theme-form"
                    
                    >
                      <h4>View User</h4>

                      <div className="form-group mt-4">
                        <label className="col-form-label">Vendor Code</label>
                        <input
                          className="form-control"
                          type="text"
                          readonly
                          value="AA123"
                          name="code"
                        />
                      </div>
                     
                      <div className="form-group ">
                        <label className="col-form-label pt-0">Vendor Name</label>
                        <div className="form-row">
                          <div className="col-6">
                            <input
                              className="form-control"
                              type="text"
                              required=""
                              value="Name"
                              name="firstname"
                            />
                          </div>
                          <div className="col-6">
                            <input
                              className="form-control"
                              type="text"
                              contenteditable="true"
                              required=""
                              value="name"
                              name="lastname" 
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
                          
                          
                        />
                        
                        <div className="show-hide">
                        <button type="button" class="btn-primary-outline btn-sm">Generate Password</button>
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
      );
   
    

  return <DataTables></DataTables>;

};

export default Viewuser;
