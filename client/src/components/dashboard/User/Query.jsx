import React, { Fragment,useState} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Loader from "../../../layout/loader";
import Footer from "../../Layout/Footer";
import "../../scss/page.scss";
const Query=()=>{
    const [loc, setloc] = useState({
        lat: " ",
        long: "",
    
      });
    
      const { lat,long} = loc;
    
      const onChange = (e) => {
        setloc({ ...loc, [e.target.name]: e.target.value });
      };
    
return(

    <div>

     
      <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
      <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {/*  page header */}
        <Header />
        {/* page body contains sidebar and content  */}
        <div class="page-body-wrapper sidebar-icon document-content">
          <Sidebar/>

          <div class="page-body1">
          <Fragment>
          <div className="admin-card ">

          <Card >
                  <CardHeader>
                    <h2>Query customer</h2>
                  </CardHeader>
                  <CardBody className="mt-0 pt-2 ">
                        <div className="login ">
      
          <form
            className="theme-form "
            
            
          >
            

            <div className="wrap-input100 " data-validate="Name is required">
              <label className="col-form-label pt-0">GPS location</label>
             
              <input
                className="form-control"
                type="text"
                name="lat"
                value={lat}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter the latitude"
              />
              
              
            </div>
            <button type="button" class="btn btn-primary float-right">Submit</button>
            </form>
           
            </div>
            </CardBody>
            </Card>
        
            </div>
            </Fragment>

        </div>
        </div>
        <Footer/>
        </div>
        </div>
)
}
export default Query;