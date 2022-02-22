import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetApiData from "../hooks/useGetApiData";
import "../styles/LoginPage.css";
import { getUserValidation } from "../functions/getUserValidation";

const LoginPage = () => {
  const navigate = useNavigate();
  const [users] = useGetApiData("https://jsonplaceholder.typicode.com/users");
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
    err: "",
  });

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
    const errors = getUserValidation(users, formData);
    setFormErrors(getUserValidation(users, formData));
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
