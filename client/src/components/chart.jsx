import React, { useEffect, Fragment } from "react";
import Breadcrumb from "../layout/breadcrumb/";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Knob from "knob";
import configDB from "../data/customizer/config";
import { Status } from "../constant";
const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const KnobChart = (props) => {
  useEffect(() => {
    var Status = Knob({
      value: 44,
      min: -100,
      className: "review",
      thickness: 0.1,
      fgColor: primary,
      bgColor: "#f6f7fb",
      lineCap: "round",
    });
    document.getElementById("Status").appendChild(Status);
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Charts" />
      <Container fluid={true}>
        <Row>
          <Card>
            <CardHeader>
              <h5>{Status}</h5>
            </CardHeader>
            <CardBody className="mt-0 pt-0">
              <div class="row text-center">
                <div class="col-4 b-r-light">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">TotalEnquiry</span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">111</span>
                    </h4>
                  </div>
                </div>
                <div class="col-4 b-r-light">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">Active Enquiry</span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">90</span>
                    </h4>
                  </div>
                </div>
                <div class="col-4">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">
                      TotalWork Complete
                    </span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">20</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-10 ">
                  <div className="knob-block text-center">
                    <div className="knob" id="Status"></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default KnobChart;
