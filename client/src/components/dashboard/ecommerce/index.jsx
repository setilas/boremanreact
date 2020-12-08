import React, { Fragment } from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Sample = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Admin Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader style={{backgroundColor:"#7366ff"}}>
                <h5>Admin</h5>
               
              </CardHeader>
              <CardBody>
                <Link>
                  <button className="btn btn-outline-primary">HOME</button>
                </Link>
                <Link >
                  <button className="btn btn-outline-success ml-5">
                    VENDOR
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-outline-danger ml-5">
                    LOGOUT
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
