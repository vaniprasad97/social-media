import React from "react";
import Header from "../components/Header";
import "../styles/Posts.css";
import Card from "../components/Card";
import useGetApiData from "../hooks/useGetApiData";
import useGetRandomUsers from "../hooks/useGetRandomUsers";

const Posts = () => {
  const [posts] = useGetApiData("https://jsonplaceholder.typicode.com/posts");
  const [users] = useGetApiData("https://jsonplaceholder.typicode.com/users");
  const [allPosts] = useGetRandomUsers(posts, users);

  const card = allPosts.map((randomPost) => {
    randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
    return (
      <Card
        postid={randomPost.postid}
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
