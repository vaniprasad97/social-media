import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Back to<Link to="/"> Login Page</Link>
      </p>
    </div>
  );
};

export default Profile;
