import React, { Fragment } from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Sample = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Admin Dashboard" />
      <Container fluid={true}>
        <div className=" d-flex justify-content-center">
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader style={{backgroundColor:"#7366ff"}}>
                <h5>Admin</h5>
               
              </CardHeader>
              <CardBody >
                                                    
                <Link to="/adduser">
                  <button className="btn btn-primary">Add User</button>
                </Link>
                           
                <Link  >
                  <button className="btn btn-success ml-2">
                    View User
                  </button>
                </Link>
               
                <Link>
                  <button className="btn btn-primary ml-2 ">
                    View Enquiry
                  </button>
                </Link>
              
                <Link>
                  <button className="btn btn-danger ml-2">
                    Status
                  </button>
                </Link>
               
                <Link>
                  <button className="btn btn-success ml-2 ">
                    Controls
                  </button>
                </Link>
                
                <Link>
                  <button className="btn btn-secondary ml-2  ">
                    Logout
                  </button>
                </Link>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Sample;
