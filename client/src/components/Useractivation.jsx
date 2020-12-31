import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../action/auth";
import Header3 from "./Layout/Header3";
import Sidebar2 from "./Layout/Sidebar2";

export const Useractivation =()=> {
    return(
    <div>
       <div class="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      {/* page wrapper which will wrap entirepage */}
       <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {/*  page header */}
        <Header3 />
        
        </div>

          <div class="page-body">

             <div className="admin-card">
             <h1 >account is not activated yet</h1>
              <li>
                <Link to="/" onClick={logout}>
                  logout
                </Link>
              </li>
             
              </div>
            </div>
           </div>
          

    
);
};

export default Useractivation;