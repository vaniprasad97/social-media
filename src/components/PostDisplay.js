import React from "react";

export const PostDisplay = (props) => {
  const [comments, setComments] = React.useState([]);
  const [formData, setFormData] = React.useState({ comment: "" });

  React.useEffect(function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.postid}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  const postComment = comments.map((item) => (
    <p>
      <b> {item.email} </b> : {item.body}
    </p>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="commentbox"
          type="text"
          placeholder="comment"
          onChange={handleChange}
          name="comment"
        />
        <button type="submit"> add comment</button>
      </form>
      <p>{formData.comment}</p>
      <div className="commentItems">{postComment}</div>
    </div>
  );
};
