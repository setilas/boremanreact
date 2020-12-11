import React, { Fragment } from "react";
import { CardBody, Card, CardHeader, Container, Row, Col } from "reactstrap";
 const Enquiry = (props) => {
// const [formData, SetFormData]=useState({
//   inputName:"",
//   inputLocation:"",
//    inputLatitude:"",
//     inputLongitude:"", 
//     inputStatus:""
// });
// const onChangeInput=(e)=>{
//   SetFormData({
//     ...FormData,[e.target.id]:e.target.value
//   });
//   console.log(formData);
// }
// const handleSubmit=(e)=>{
//   alert("submitted");
//   alert(this.FormData.inputName);
//   e.preventDefault();
// }

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="8">
            <Card className="mt-5">
              <CardHeader style={{backgroundColor:"#7366ff"}}>
                <h4>
                  <strong>Add Enquiry</strong>
                </h4>
              </CardHeader>
              <CardBody>
                <form 
                >
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-5 col-form-label">
                      Name
                    </label>
                    

                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputName"
                        placeholder="Enter your Name"
                        // value={this.FormData.inputName}
                        // onChange={this.onChangeInput}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-5 col-form-label">
                     location
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputlocation"
                        placeholder="Enter your location"
                       
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-3 col-form-label">
                     GPS:
                    </label>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-5">
                      <label >Latitude</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputlatitude"
                        placeholder="Enter your location"
                        // value={this.FormData.inputLatitude}
                        // onChange={this.onChangeInput}
                      />
                    </div>
                    
                    <div class="col-sm-5">
                      <label >Longitude</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputlongitude"
                        placeholder="Enter your location"
                        // value={this.FormData.inputLongitude}
                        // onChange={this.onChangeInput}
                      />
                  </div>
                  </div>
                  <div class="form-group row" >
                  <label for="inputName" class="col-sm-5 col-form-label">
                     Status
                    </label>
                    <div class="col-sm-10">
                    <select >
                          <option value="Open">Open</option>
                          <option value="Started">Started</option>
                          <option value="Closed">Closed</option>
                          </select>
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
export default Enquiry;