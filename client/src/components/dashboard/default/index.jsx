import React, { Fragment } from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Sample = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Vendor Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>HII user</h5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </CardHeader>
              <CardBody>
                <Link>
                  <button className="btn btn-outline-primary">Home</button>
                </Link>
                <Link to="/enquiry">
                  <button className="btn btn-outline-success ml-5">
                    Enquiry
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-outline-danger ml-5">
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

export default Sample;
