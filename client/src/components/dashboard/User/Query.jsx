import React, { Fragment,useState} from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Loader from "../../../layout/loader";
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
      <div className="admin-card">
        <div className="wrap-contact100">
          <form
            className="contact100-form "
            
            
          >
            <span className="contact100-form-title">Query Customer</span>
    

            <div className="wrap-input100 " data-validate="Name is required">
              <span className="label-input100">latitude</span>
              <input
                className="input100"
                type="text"
                name="lat"
                value={lat}
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Enter the latitude"
              />
              <span className="focus-input100"></span>
            </div>
            </form>
            </div>
            </div>
            </Fragment>

        </div>
        </div>
        </div>
        </div>
)
}
export default Query;