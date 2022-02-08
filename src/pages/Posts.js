import React from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Card from "../components/Card";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const allUsersAndPosts = [
    {
      name: "",
      post: "",
      title: "",
    },
  ];

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  allUsers.map((userItem) => {
    posts.map((postItem) => {
      if (userItem.id === postItem.userId) {
        allUsersAndPosts.push({
          name: userItem.name,
          post: postItem.body,
          title: postItem.title,
        });
      }
    });
  });

  const card = allUsersAndPosts.map((randomUser) => {
  randomUser = allUsersAndPosts[Math.floor(Math.random() * allUsersAndPosts.length)];

    return (
      <Card
        title={randomUser.title}
        username={randomUser.name}
        postBody={randomUser.post}
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
