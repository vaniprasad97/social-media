import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const history = useNavigate();
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
  });
  const [user, setUser] = React.useState([]);
  const [formErrors, setFormErrors] = useState({});

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormErrors(validate(formData));
  };

  const validate = (values) => {
    const errors = {};
    const enteredUsername = formData.userName;
    const enteredPassword = formData.passWord;

    user.map((item) => {
      if (item.email !== enteredUsername) {
        errors.userName = "User not exist";
      } else if (item.username + "123" !== enteredPassword) {
        errors.passWord = "Enter a valid password";
      } else if (
        item.email === enteredUsername &&
        item.username + "123" === enteredPassword
      ) {
        history("postsDetails");
      }
    });
    return errors;
  };

  return (
    <div className="container">
      <h1>Socio-Connect</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="Email"
          type="text"
          placeholder="Email address"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <p>{formErrors.userName}</p>

        <input
          className="Password"
          type="password"
          placeholder="Password"
          name="passWord"
          value={formData.passWord}
          onChange={handleChange}
          required
        />
        <p>{formErrors.passWord}</p>

        <button type="submit" className="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
