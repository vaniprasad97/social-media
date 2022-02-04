import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("selectedUser"));
  const firstWord = loggedInUser.name.match(/\b(\w)/g).join("");
  const navigate = useNavigate();

  function gotoProfile() {
    navigate("/profile");
  }

  function signOut() {
    localStorage.clear("selectedUser");
    navigate("/");
  }

  return (
    <div>
      <header>
        <nav className="nav">
          <h3 onClick={signOut}>Logout</h3>
          <ul className="nav-items">
            <li className="profile-pic" onClick={gotoProfile}>
              {firstWord}
            </li>
            <li className="profile-name">{loggedInUser.name}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
