import React, { Fragment } from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Vendor Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>HII user</h5>
              
              </CardHeader>
              <CardBody >
                <Link>
                  <button className="btn btn-primary">Home</button>
                </Link>
                <Link to="/enquiryPage">
                  <button className="btn btn-success ml-5">
                    Enquiry
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-danger ml-5">
                    Logout
                  </button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
