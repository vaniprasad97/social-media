import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetail } from "../functions/getUserDetail";

const Header = () => {
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
              {getUserDetail("initials")}
            </li>
            <li className="profile-name">{getUserDetail("name")}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
