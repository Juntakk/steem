import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/authContext";
import styles from "./styles/auth.module.scss";

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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Sign up to start your journey</p>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={styles.input}
            required
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={styles.input}
            required
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={styles.input}
            required
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <div className={styles.footer}>
          <span>Already have an account? </span>
          <NavLink to={"/login"} className={styles.link}>
            Log In
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
