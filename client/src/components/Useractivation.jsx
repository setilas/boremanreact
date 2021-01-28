import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../action/auth";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";


export const Useractivation = () => {

  return (
      < div>
    <Fragment>

                <Row>
                  <Card>
                  <CardHeader>
                    <h2>Account is not activated</h2>
                  </CardHeader>
                  <CardBody className="mt-0 pt-2 ">
                   <p class="h6"> Admin not activate your account yet. Please wait untill activate</p>   
                    <p class="h6">your account.</p>
                  <button className="btn button1 btn-danger rounded float-right  mt-5">
                          <Link to="/" onClick={logout}>
                            <p class="text-light">logout</p> 
                          </Link>
                        </button>
     
                      </CardBody>
                    </Card>
                  </Row>
               
     
  
    </Fragment>
    </div>
  );
    };

  export default Useractivation;
