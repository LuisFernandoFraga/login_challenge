import "./styles.css";

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import background from "../../assets/background.png";

export default function Logon() {
  const userLogin = localStorage.getItem("userLogin");
  const userName = localStorage.getItem("userName");

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <section className="form"></section>
      <h1>Welcome</h1>

      <Link className="back-link" to="/">
        <button onClick={handleLogout} type="button"></button>
        <FiLogOut size={16} color="#938cc3" />
        Log Out
      </Link>

      <img src={background} alt="background" />
    </div>
  );
}
