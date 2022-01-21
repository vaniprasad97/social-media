import React from "react";
import { Link } from "react-router-dom";

const PostsDetails = () => {
  return (
    <div>
      <h1>Post Details Page</h1>
      <p>
        Back to<Link to="/"> Login Page</Link>
      </p>
    </div>
  );
};

export default PostsDetails;
