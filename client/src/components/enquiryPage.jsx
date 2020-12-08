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
              
              </CardHeader>
              <CardBody>
              <h4>
                  <strong>Add Enquiry</strong>
                </h4>
              <ul class="list-group">
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item list-group-item-primary">
                          <Link to="/enquiry">Add Enquiry</Link>
                      </li>
                      <li class="list-group-item list-group-item-secondary">
                          <link>View Enquiry</link>
                      </li>
                      <li class="list-group-item list-group-item-success">
                          <link >Status</link>
                      </li>
                      <li class="list-group-item list-group-item-danger">
                          <link >Logout</link>
                      </li>
                      </ul>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Sample;