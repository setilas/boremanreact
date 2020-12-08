import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import { Link } from "react-router-dom";


const  Sample = (props) => {
    return (
         <Fragment>
         <Breadcrumb parent="Dashboard" title="Admin Dashboard"/>
          <Container fluid={true}>
            <Row class="w-50">
              <Col sm="3">
                <Card>
               
                <CardBody >
                <div class="d-flex flex-column align-content-center ">
                <Link>
                  <div class="p-2">
                        <button className="btn btn-outline-primary btn-block active">Home</button>
                      </div>
                </Link>

                      <Link to="/vendors">
                      <div class="p-2">
                        <button className="btn btn-outline-warning btn-block">
                          Vendors
                        </button>
                    </div>
                    </Link>
                <Link>
                    <div class="p-2">
                        <button className="btn btn-outline-danger btn-block">
                          Logout
                        </button>
                    </div>
                </Link>
                    </div>
                </CardBody>
              </Card>
              </Col>
            </Row>
          </Container>   
         </Fragment> 
    );
}

export default Sample;