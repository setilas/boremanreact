import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";
export const Vendors = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="8 ">
            <Card className="mt-5 ">
              <CardHeader>
                <h4>
                  <strong>Add Vendors</strong>
                </h4>
              </CardHeader>
              <CardBody>
                <form>
                  <div class="form-group row ">
                    <label for="inputName" class="col-sm-2 col-form-label">
                      Vendor Name
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputName"
                        placeholder="Enter vendor Name"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-2 col-form-label">
                      Vendor address
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        id="inputSitelocation"
                        placeholder="Enter vendor address"
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
                        placeholder=" Enter vendor Phone Number"
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
