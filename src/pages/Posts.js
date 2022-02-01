import React from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Post from "../components/Post";

const PostsDetails = () => {
  const userArray = JSON.parse(localStorage.getItem("postArray"));
  const [posts, setPosts] = React.useState([]);
  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(userArray.id);

  const userPost = posts.filter((item) => {
    if (userArray.id === item.userId) {
      return item;
    }
  });
  console.log(userPost);
  const post = userPost.map((item) => {
    return (
      <Post
        title={item.title}
        username={userArray.username}
        postBody={item.body}
      />
    );
  });

  return (
    <div>
      <Header />
      <div>{post}</div>
    </div>
  );
};

export default PostsDetails;
