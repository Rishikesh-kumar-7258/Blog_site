import React, { useState } from "react";
import "./login.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const valiatePassword = (password) => {
    var message = "";
    if (password.length < 8) {
      message = "Password must be at least 8 characters long";
    } else if (!password.match(/[A-Z]/)) {
      message = "Password must contain at least one uppercase letter";
    } else if (!password.match(/[a-z]/)) {
      message = "Password must contain at least one lowercase letter";
    } else if (!password.match(/[0-9]/)) {
      message = "Password must contain at least one number";
    } else if (!password.match(/[!@#$%^&*]/)) {
      message = "Password must contain at least one special character";
    } else {
      message = "";
    }

    const passwordField = document.getElementById("password");
    const passwordError = document.querySelector(".password-error");
    if (message === "") {
      passwordField.classList.remove("is-invalid");
      passwordField.classList.add("is-valid");
    } else {
      passwordField.classList.add("is-invalid");
      passwordField.classList.remove("is-valid");
    }

    passwordError.innerHTML = message;
  };

  const validateEmail = (email) => {
    var message = "";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      message = "Please enter a valid email address";
    } else {
      message = "";
    }

    const emailField = document.getElementById("email");
    const emailError = document.querySelector(".email-error");
    if (message === "") {
      emailField.classList.remove("is-invalid");
      emailField.classList.add("is-valid");
    } else {
      emailField.classList.add("is-invalid");
      emailField.classList.remove("is-valid");
    }

    emailError.innerHTML = message;
  }

  const handleChange = (e) => {
    const target = e.target.id;
    const value = e.target.value;

    let newval = { ...user };
    newval[target] = value;

    setUser(newval);

    if (target === "password") {
      valiatePassword(value);
    }
    else if (target === "email") {
      validateEmail(value);
    }
  };

  return (
    <>
      <div className="container-fluid" id="blurred"></div>
      <form className="mt-3 p-3 text-dark fw-bold loginpage">
        <div className="mb-3">
          <div className="display-5 fw-bold text-center">Register</div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
          <div className="email-error text-danger"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
          <div className="password-error text-danger"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            value={user.confirm_password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" role="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default Signup;
