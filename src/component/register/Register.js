import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import Login from "../login/Login";
const Register = ({ setToggle }) => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log(user);
    try {
      await axios.post("/api/authen/register", user);
      toast.success("Register successfully");
      setToggle(true);

      navigate("/auth");
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-title">
        <h2>Register Page</h2>
      </div>
      <form onSubmit={handleRegister} className="register-form">
        <label htmlFor="name" className="register-label">
          <p className="login-label-name"> Name </p>{" "}
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="form-input"
            required
          />
        </label>{" "}
        <label htmlFor="email" className="register-label">
          <p className="login-label-name"> Email </p>{" "}
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="form-input"
            required
          />
        </label>{" "}
        <label htmlFor="password" className="register-label">
          <p className="login-label-name"> Password </p>{" "}
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="form-input"
            required
          />
        </label>{" "}
        <div className="button-switch">
          <button type="submit" className="form-submit">
            {" "}
            Register{" "}
          </button>{" "}
          <Link to="/authen">
            <button type="button" className="form-submit">
              Login
            </button>
          </Link>
        </div>
      </form>{" "}
    </div>
  );
};

export default Register;
