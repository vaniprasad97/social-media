import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getUserDetail } from "../functions/getUserDetail";

const Profile = () => {
  return (
    <div>
      <Header />
      <p>
        Back to<Link to="/posts"> Posts</Link>
      </p>

      <div className="username-profilepic">
        <h1>{getUserDetail("initials")}</h1>
        <h2>&ensp;{getUserDetail("name")}</h2>
      </div>

      <div className="user-details">
        <table>
          <tr>
            <th>Username </th>
            <th>{getUserDetail("username")}</th>
          </tr>
          <tr>
            <th>Email</th>
            <th>{getUserDetail("email")}</th>
          </tr>
          <tr>
            <th>Address</th>
            <th>{getUserDetail("address")}</th>
          </tr>
          <tr>
            <th>Phone</th>
            <th>{getUserDetail("phone")}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile;
