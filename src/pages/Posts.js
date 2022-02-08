import React from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Card from "../components/Card";

const Posts = () => {
  const allUser = JSON.parse(localStorage.getItem("allUsers"));
  const [posts, setPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);


  const allUsersAndPosts= [
    {
      name: "",
      post: "",
      title: "",
    },
  ];
  for (let i = 0; i < allUser.length; i++) {
    for (let k = 0; k < posts.length; k++) {
      if (allUser[i].id === posts[k].userId) {
        allUsersAndPosts.push({
          name: allUser[i].name,
          post: posts[k].body,
          title: posts[k].title,
        });
      }
    }
  }

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
      <header>
        <Header />
      </header>
      <div className="post-list">{card}</div>
    </div>
  );
};

export default Posts;
