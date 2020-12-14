import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";
import { Header } from "../components/Layout/Header";
import { Sidebar } from "../components/Layout/Sidebar";
export const Addenquiry = () => {
  return (
    <Fragment>
      <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
      <div class="page-wrapper compact-wrapper" id="pageWrapper">
        <Header />
        <div class="page-body-wrapper sidebar-icon">
          <Sidebar />
          <div class="page-body">
            <Row>
              <Col sm="8">
                <Card className="mt-5">
                  <CardHeader>
                    <h4>
                      <strong>Add Enquiry</strong>
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <form>
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">
                          Name
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            placeholder="Enter your Name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">
                          Site location
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputSitelocation"
                            placeholder="Enter your location"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputSitelps"
                          class="col-sm-2 col-form-label"
                        >
                          Site lps
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputSitelps"
                            placeholder="Site lps"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputPhone" class="col-sm-2 col-form-label">
                          Phone
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="tel"
                            class="form-control"
                            id="inputPhone"
                            placeholder=" Enter your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="form-group d-flex justify-content-center ">
                        <button className="btn btn-success" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
