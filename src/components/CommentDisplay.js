import React from "react";
import { useState } from "react";
import useGetApiData from "../hooks/useGetApiData";

export const CommentDisplay = (props) => {
  const [allComments, setAllComments] = useGetApiData(
    `https://jsonplaceholder.typicode.com/posts/${props.postid}/comments`
  );
  const [comment, setComment] = useState("");
  const loggedinUser = JSON.parse(localStorage.getItem("selectedUser"));

  function handleChange(event) {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllComments((prevState) => [
      ...prevState,
      { body: comment, email: loggedinUser.name },
    ]);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" value={comment} onChange={handleChange} />
        <button type="submit">Add Comment</button>
      </form>
      <ul className="postcomments">
        {allComments.map((item) => (
          <li>
            <b> {item.email} </b> : {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
