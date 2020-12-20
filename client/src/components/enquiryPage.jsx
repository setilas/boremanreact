import React, { Fragment } from "react";
import Breadcrumb from "../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Enquirypage = (props) => {
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
              <CardBody>
                <Link to="/enquiry">
                  <button className="btn btn-outline-primary">
                    Add Enquiry
                  </button>
                </Link>
                <Link to="/viewenquiry">
                  <button className="btn btn-outline-success ml-3">
                    View Enquiry
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-outline-secondary ml-3">
                    Status
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-outline-danger ml-3">
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

export default Enquirypage;
