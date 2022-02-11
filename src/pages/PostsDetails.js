import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { PostDisplay } from "../components/PostDisplay";

const PostsDetails = () => {
  const { postid } = useParams();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postid)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="postdetails">
      <Header />
      <p>
        Back to<Link to="/posts"> Posts Page</Link>
      </p>
      <h3>{posts.title}</h3>
      <h4>{posts.body}</h4>
      <h5>Comments</h5>
      <PostDisplay postid={postid} />;
    </div>
  );
};

export default PostsDetails;
