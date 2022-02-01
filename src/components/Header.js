import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userArray = JSON.parse(localStorage.getItem("postArray"));
  const myStr = userArray.name;
  const firstWord = myStr.match(/\b(\w)/g).join("");
  const navigate = useNavigate();
  function gotoProfile() {
    navigate("/profile");
  }
  function gotoLogin() {
    localStorage.removeItem("postArray");
    navigate("/");
  }
  return (
    <div>
      <header className="nav">
        <h1 className="profile-pic" onClick={gotoProfile}>
          {firstWord}
        </h1>
        <h2>Hello, {userArray.name}</h2>

        <ul className="nav-items">
          <li>
            {" "}
            <button className="signout-button" onClick={gotoLogin}>
              Log out
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
