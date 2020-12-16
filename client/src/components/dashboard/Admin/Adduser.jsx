import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";


const Addview = (props) => {
  return (
    <Fragment>
      
      <Container fluid={true}>
        <Row>
        <div className="container-contact100">
          <Col sm="10">
            <Card>
              <CardHeader style={{backgroundColor:"#7366ff"}}>
              <h4>
                  <strong>Add User</strong>
                </h4>
               
              </CardHeader>
              <CardBody>
              <form 
                >
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-5 col-form-label">
                      Vendor Name
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
                    <label for="inputName" class="col-sm-5 col-form-label">
                     Vendor Address
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="textArea"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Enter your Address"
                       
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-5 col-form-label">
                     Vendor Phone
                    </label>
                    
                    
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputphone"
                        placeholder="Enter your number"
                       
                      />
                    </div>
                    </div>
                    <div class="form-group row">
                    <label for="inputName" class="col-sm-5 col-form-label">
                     Vendor Email
                    </label>
                    
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputemail"
                        placeholder="Enter your email"
                        
                      />
                  </div>
                  </div>
                  <div className="form-group d-flex justify-content-center ">
                    <button className="btn btn-success" type="submit">
                      Generate Passcode
                    </button>
                    </div>
                    <div class="form-group row">
                    <input
                        type="text"
                        class="form-control"
                        id="inputemail"
                        placeholder="Enter your Passcode"
                        
                      />

                  </div>
                
                  <div className="form-group d-flex justify-content-center ">
                    <button className="btn btn-success" type="submit">
                      Submit
                    </button>
                  </div>
                </
                form>
              </CardBody>
            </Card>
          </Col>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Addview;
