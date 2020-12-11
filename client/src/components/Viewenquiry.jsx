import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";

export const ViewEnquiry = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="10">
            <Card className="mt-5">
              <CardHeader>
                <h4>
                  <strong>Enquiries</strong>
                </h4>
              </CardHeader>
              <CardBody>
                <div class="anyClass">
                  <table className="border-solid table" id="example-style-3">
                    <thead
                      style={{ backgroundColor: "#7366ff" }}
                      className="thead-dark"
                    >
                      <tr>
                        <th className=" col-sm-5 "> Date</th>
                        <th className="col-sm-5 ">Name</th>
                        <th className="col-sm-5 ">Location</th>
                        <th className="col-sm-5 ">GPS</th>
                        <th className="col-sm-5">Status</th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
