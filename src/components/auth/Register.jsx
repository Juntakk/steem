import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/authContext";
import "./styles/auth.css"; // Assuming your CSS file is now auth.css
import React from "react";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().min(1, "Name is required").required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = () => {
    login();
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)} className="form">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Sign up to start your journey</p>
        <div className="inputGroup">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="input"
            required
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="input"
            required
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="input"
            required
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
        <div className="footer">
          <span>Already have an account? </span>
          <NavLink to={"/login"} className="link">
            Log In
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
