import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1> Posts Page</h1>
      <p>
        Back to<Link to="/"> Login Page</Link>
      </p>
    </div>
  );
};

export default Posts;
