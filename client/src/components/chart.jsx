import React, { useEffect, Fragment } from "react";
import Breadcrumb from "../layout/breadcrumb/";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Knob from "knob";
import configDB from "../data/customizer/config";
import {
  AngleOffset,
  AngleOffsetArc,
  CursorMode,
  DisableDisplayInput,
  DisplayPreviousValue,
} from "../constant";
const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const KnobChart = (props) => {
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
      <Breadcrumb parent="Charts" title="Status" />
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

export default KnobChart;
