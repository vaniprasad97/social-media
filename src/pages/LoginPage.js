import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [users, setUser] = React.useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
    err: "",
  });

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
    const errors = validated(users, formData);
    setFormErrors(validated(users, formData));
    if (errors.err === false) {
      navigate("/posts");
    }
  };

  return (
    <div className="login-container">
      <h1>Socio-Connect</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <fieldset>
          <input
            className="Email"
            type="email"
            placeholder="Email address"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset>
          <input
            className="Password"
            type="password"
            placeholder="Password"
            name="passWord"
            value={formData.passWord}
            onChange={handleChange}
            required
          />
          <p>{formErrors.userName}</p>
        </fieldset>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

const validated = (user, formData) => {
  const errors = {};
  const enteredUsername = formData.userName;
  const enteredPassword = formData.passWord;

  user.forEach((item) => {
    if (item.email !== enteredUsername) {
      errors.userName = "Invalid username or password";
    } else if (item.username + "123" !== enteredPassword) {
      errors.passWord = "Invalid username or password";
    } else {
      localStorage.setItem("selectedUser", JSON.stringify(item));

      errors.err = false;
    }
  });
  return errors;
};
