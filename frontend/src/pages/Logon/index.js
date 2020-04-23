import "./styles.css";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import background from "../../assets/background.png";

import api from "../../services/api";

export default function Logon() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      login,
      password
    }

    try {
      const response = await api.post("session", data);

      localStorage.setItem("userLogin", login);
      localStorage.setItem("userName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Login failed.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form"></section>

      <form onSubmit={handleLogin}>
        <h1>Logon</h1>

        <input
          placeholder="Username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

          <button className="button" type="submit">
            Login
          </button>

        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#938cc3" />
          Sign up
        </Link>
      </form>

      <img src={background} alt="background" />
    </div>
  );
}
