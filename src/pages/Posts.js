import React from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Card from "../components/Card";

const Posts = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("selectedUser"));
  const [posts, setPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const selectedPost = posts.filter((item) => {
    if (loggedInUser.id === item.userId) {
      return item;
    }
  });

  const card = selectedPost.map((item) => {
    return (
      <Card
        title={item.title}
        username={loggedInUser.username}
        postBody={item.body}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="post-list">{card}</div>
    </div>
  );
};

export default Posts;
