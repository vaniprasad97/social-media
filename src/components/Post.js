import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Posts.css";
export default function Post(props) {
  const navigate = useNavigate();
  function goToPostDetails() {
    navigate("/postsDetails");
  }
  return (
    <div className="posts-display">
      <h3>Created by {props.username}</h3>
      <h4>{props.title}</h4>
      <p>{props.postBody}</p>
   
      <button className="view-post-buttton" onClick={goToPostDetails}>
        View Post
      </button>
    </div>
  );
}
