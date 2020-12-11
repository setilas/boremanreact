import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";

 const Viewenquiry = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="10">
            <Card className="mt-5 justify-content-center">
              <CardHeader>
                <h4 style={{color:"red",backgroundColor:"grey"}}>
                  <strong>Enquiries</strong>
                </h4>
              </CardHeader>
              <CardBody>
                
                <div class="table-responsive">
                      <table className="border-solid" id="example-style-3">
                        
                  
                      <thead style={{backgroundColor:"#7366ff"}}>
                          <tr>
                              <th className=" col-sm-5 "> Date</th>
                              <th className="col-sm-5 ">Name</th>
                              <th className="col-sm-5 ">Location</th>
                              <th className="col-sm-5 ">GPS</th>
                              <th className="col-sm-5">Status</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className=" col-sm-5 ">8/12/2020</th>
                          <th className=" col-sm-5 ">manu</th>
                          <th className=" col-sm-5 "><b>kochi</b></th>
                          <th className=" col-sm-5 ">9.877,9.766</th>
                          <th className=" col-sm-5 ">closed</th>
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
export default Viewenquiry;