import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import ApiContext from "../../contexts/apiContext";
import { useState, useContext } from "react";
import styles from "./styles/Login.module.scss";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      login();
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Write anything"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Write anything"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <div className={styles.signupLink}>
          Don't have an account?{" "}
          <NavLink to={"/register"} className={styles.link}>
            <span>Sign up here</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
