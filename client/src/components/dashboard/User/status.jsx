import React, { useEffect, Fragment } from "react";
import "../../scss/status.scss";

import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Knob from "knob";
import configDB from "../../../data/customizer/config";
const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const Status = (props) => {
  useEffect(() => {
    var displayPrevious = Knob({
      value: 44,
      min: -100,
      className: "review",
      thickness: 0.1,
      fgColor: primary,
      bgColor: "#f6f7fb",
      lineCap: "round",
      displayPrevious: true,
    });
    document.getElementById("displayPrevious").appendChild(displayPrevious);
  }, []);

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Card>
            <CardHeader>
              <h5>{}</h5>
            </CardHeader>
            <CardBody>
              <div className="knob-block text-center">
                <div className="knob" id="displayPrevious"></div>
              </div>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Status;
