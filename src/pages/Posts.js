import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Card from "../components/Card";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [allPosts, setAllPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (posts.length != 0 && users.length != 0) {
      users.forEach((userItem) => {
        posts.forEach((postItem) => {
          if (userItem.id === postItem.userId) {
            setAllPosts((posts) => [
              ...posts,
              {
                name: userItem.name,
                post: postItem.body,
                title: postItem.title,
              },
            ]);
          }
        });
      });
    }
  }, [posts, users]);

  const card = allPosts.map((randomPost) => {
    randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
    return (
      <Card
        title={randomPost.title}
        username={randomPost.name}
        postBody={randomPost.post}
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
