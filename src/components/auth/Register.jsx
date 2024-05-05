import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import ApiContext from "../../contexts/apiContext";
import { useAuth } from "../../contexts/authContext";
import styles from "./styles/Register.module.scss";

const Register = () => {
  const { BASE_URL } = useContext(ApiContext);
  const { login } = useAuth();

  const navigate = useNavigate();
  const schema = yup.object({
    name: yup.string().min(3, "Name too short").required("Name is required"),
    email: yup.string().min(3, "Email too short").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password too short")
      .required("Password required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = async (values) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      navigate("/");
      login();
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Full name
          </label>
          <input
            type="name"
            id="name"
            className={styles.input}
            {...register("name")}
          />
          {errors?.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            {...register("email")}
          />
          {errors?.email && (
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
            className={styles.input}
            {...register("password")}
          />
          {errors?.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
        <div className={styles.loginLink}>
          Already have an account?{" "}
          <NavLink to={"/login"} className={styles.link}>
            <span>Login here</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
