import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";
export const AddEnquiry = () => {
  return (
    <Fragment>
      <Container fluid={true}>
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
                    <label for="inputSitelps" class="col-sm-2 col-form-label">
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
      </Container>
    </Fragment>
  );
};
