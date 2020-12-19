import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import {addVendor} from "../../../action/vendor";
import "../../scss/admin.scss";
const Adminuser = () => {
  
  const [vendor, setVendor] = useState({
    code: " ",
    name: " ",
    address: "",
    email: " ",
    te: " ",
    ae: " ",
    twc:"",
  });

  const { code, name, address, email, te, ae, twc } =vendor;
  const onChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addVendor({ code, name, address, email, te, ae, twc  });
    console.log("success");
  };
  return (
    <Fragment>
      
     
      <div className="container-contact100">
      
          
      <div className="wrap-contact100">

          <form
            className="contact100-form " onSubmit={(e) => {
              onSubmit(e);}}>
        <div class="form-group">
        <span className="contact100-form-title">Add Vendor</span>
        <label >Vendor Code</label>
                    <input class="form-control" 
                    type="text"
                     required=""
                      placeholder=" code"
                      name="code"
                      value={code}
                      onChange={(e)=>{onChange(e)}}
                      />
                    <label >Vendor Name</label>
                    <input class="form-control"
                     type="text"
                      required="" 
                      placeholder=" name"
                    name="name"
                     value={name}
                    onChange={(e)=>{onChange(e)}}
                    />          
                    <label >Vendor Address</label>
                    <input class="form-control"
                     type="text" 
                     required=""
                      placeholder=" address"
                      name="address"
                      value={address} 
                     onChange={(e)=>{onChange(e)}}
                      />  
                    <label >Vendor Email</label>
                    <input class="form-control"
                     type="text"
                      required=""
                       placeholder="email"
                       name="email"
                       value={email}
                      onChange={(e)=>{onChange(e)}}
                       />  
                    <label >Total Enquiry</label>
                    <input class="form-control"
                     type="text"
                      required="" 
                      name="te"
                      value={te}
                     onChange={(e)=>{onChange(e)}}
                      />  
                    <label >Active Enquiry</label>
                    <input class="form-control"
                     type="text" 
                     required=""
                     name="ae"
                     value={ae} 
                    onChange={(e)=>{onChange(e)}}
                     />
                    <label >Total Work Complete</label>
                    <input class="form-control"
                     type="text"
                      required="" 
                      name="twc"
                      value={twc}
                     onChange={(e)=>{onChange(e)}}
                      />
                    <div class="col-10 mt-2">
                    <div className="form-group d-flex justify-content-center ">
                    <button className="btn btn-secondary" type="submit">
                      Reset Passcode
                    </button>
                    </div>
                    </div> 
                    <div class="col-10 mt-2">
                    <div className="form-group d-flex justify-content-center ">
                    <button className="btn btn-success" type="submit">
                      submit
                    </button> 
                  </div> 
                  </div>
                      
           </div>           
        </form>
        </div>
            
             
</div>
      

    </Fragment>
  );
};
export default connect(null, { addVendor })(Adminuser);
