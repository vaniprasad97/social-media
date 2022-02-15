import React from "react";
import { useState } from "react";

export const CommentDisplay = (props) => {
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState("");
  const loggedinUser = JSON.parse(localStorage.getItem("selectedUser"));

  React.useEffect(function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.postid}/comments`)
      .then((res) => res.json())
      .then((data) => setAllComments(data));
  }, []);

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
