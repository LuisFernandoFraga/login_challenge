import "./styles.css";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import background from "../../assets/background.png";

import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      login,
      password,
    };

    try {
      const response = await api.post("users", data);

      alert(`User ${response.data.name} registered with success.`);

      history.push("/");
    } catch (error) {
      alert(
        "There was a problem with your registration. Please check your info and try again."
      );
    }
  }

  return (
    <div className="register-container">

      <section className="form"></section>

      <form onSubmit={handleRegister}>
        <h1>Register</h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
            Register
          </button> 

        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#938cc3" />
          Back to login screen
        </Link>
      </form>
      <img src={background} alt="background" />
    </div>
  );
}
