import React from "react";
import { CardBody, Card, CardHeader, Row } from "reactstrap";
import { Link } from "react-router-dom";
const logo = require("../assets/images/landing/landing_logo.png");

export const Admindashboard = () => {
    return (
       
          
          <nav>
            <div class="sidebar-main">
              <div id="sidebar-menu">
                <Card>
                    <CardHeader style={{backgroundColor:"#7366ff"}}>
                  <h4>
                      <strong>Admin dashboard</strong>
                    </h4>
                  
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Link to="/adduser">
                        <button className="btn btn-primary buttonsize btn-lg" >
                          Add User
                        </button>
                      </Link>
                    </Row>
                    <Row>
                      <Link to="/viewuser">
                        <button className="btn btn-success buttonsize btn-lg">
                          View User
                        </button>
                      </Link>
                    </Row>
                    <Row>
                      <Link to="/viewenquiry">
                        <button className="btn btn-success buttonsize">
                          View Enquiry 
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
                      <Link to="/controles">
                        <button className="btn btn-success buttonsize">
                          Controles 
                        </button>
                      </Link>
                    </Row>
                    <Row>
                      <Link>
                        <button
                          className="btn btn-danger buttonsize    "
                          
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
     
     
        );
    };

    export default Admindashboard;
    