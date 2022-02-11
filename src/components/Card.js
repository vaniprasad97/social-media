import React from "react";
import { Link } from "react-router-dom";
import "../styles/Posts.css";

export default function Card(props) {


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

            <Link to={`/PostsDetails/${props.postid}`}>
              <p>View Post</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
