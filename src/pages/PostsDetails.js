import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { CommentDisplay } from "../components/CommentDisplay";
import useGetApiData from "../hooks/useGetApiData";

const PostsDetails = () => {
  const { postid } = useParams();
  const [posts] = useGetApiData(
    "https://jsonplaceholder.typicode.com/posts/" + postid
  );

  return (
    <div>
      <Header />
      <div className="postdetails">
        <p>
          Back to<Link to="/posts"> Posts Page</Link>
        </p>
        <h3>{posts.title}</h3>
        <h4>{posts.body}</h4>
        <h5>Comments</h5>
        <CommentDisplay postid={postid} />
      </div>
    </div>
  );
};

export default PostsDetails;
