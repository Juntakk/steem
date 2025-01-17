import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useState } from "react";
import "./styles/auth.css"; // Assuming your CSS file is now auth.css
import React from "react";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login();
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Log in to your account</p>
        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">
          Log In
        </button>
        <div className="footer">
          <span>Don't have an account? </span>
          <NavLink to={"/register"} className="link">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};
