import React, { Fragment } from "react";
import knobChart from "./chart";
import {
  AngleOffset,
  AngleOffsetArc,
  CursorMode,
  DisableDisplayInput,
  DisplayPreviousValue,
} from "../constant";
import { Link } from "react-router-dom";
import configDB from "../data/customizer/config";

import {
  CardBody,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Breadcrumb,
} from "reactstrap";
import KnobChart from "./chart";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;

export const Enquiry = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Vendor Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col md="4">
            <h5>HII user</h5>
            <Card style={{ marginTop: "70px" }}>
              <CardHeader>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </CardHeader>
              <CardBody>
                <Row>
                  <Link to="/addenquiry">
                    <button className="btn btn-primary buttonsize">
                      AddEnquiry
                    </button>
                  </Link>
                </Row>
                <Row>
                  <Link to="/viewenquiry">
                    <button className="btn btn-success buttonsize">
                      ViewEnquiry
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
                  <Link>
                    <button
                      className="btn btn-danger buttonsize    "
                      style={{ paddingRight: "85px" }}
                    >
                      Logout
                    </button>
                  </Link>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="8">
            <KnobChart />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
