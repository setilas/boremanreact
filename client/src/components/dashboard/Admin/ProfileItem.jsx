import { connect } from "mongoose";
import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
  return (
    <div>
      <tr>
        <td>{profile._id}</td>
        <td>{profile.firstname}</td>
        <td>{profile.totalEnquiry}</td>
        <td>{profile.totalEnquiry}</td>
        <td>{0}</td>
        <td>
          <Link to={`/moreinfo/${profile._id}`}>
            <button className="btn btn-primary ">More info</button>
          </Link>
        </td>
      </tr>
    </div>
  );
};

export default ProfileItem;
