import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Inside LOGIN PAGE</h1>
      <ol>
        <li>
          <Link to="/posts">Posts Page</Link>
        </li>
        <li>
          <Link to="/postsDetails">Posts Details Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile Page</Link>
        </li>
      </ol>
    </div>
  );
};

export default LoginPage;
