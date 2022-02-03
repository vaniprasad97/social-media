import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Posts.css";

export default function Card(props) {
  const navigate = useNavigate();

  function goToPostDetails() {
    navigate("/postsDetails");
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5>{props.title}</h5>
        <p>{props.postBody}</p>
      </div>
      <div className="card-footer">
        <div className="user">
          <div className="user-info">
            <h6>Created by {props.username}</h6>
            <p onClick={goToPostDetails}>View Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}
