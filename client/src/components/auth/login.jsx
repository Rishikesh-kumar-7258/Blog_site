import axios from "axios";
import React, { useState, useEffect } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirm_password) {
      alert("Passwords do not match");
      setUser({ ...user, password: "", confirm_password: "" });
      return;
    }

    fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
  };

  const handleChange = (e) => {
    const target = e.target.id;
    const value = e.target.value;

    let newval = { ...user };
    newval[target] = value;

    setUser(newval);

    if (target === "password") {
      valiatePassword(value);
    }
  };

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
    if (message === "") 
    {
      passwordField.classList.remove("is-invalid");
      passwordField.classList.add("is-valid");
    }
    else 
    {
      passwordField.classList.add("is-invalid");
      passwordField.classList.remove("is-valid");
    }

    passwordError.innerHTML = message;

  };


  return (
    <>
      <div className="container-fluid" id="blurred"></div>
      <form className="p-3 text-dark fw-bold loginpage">
        <div className="mb-3 text-center">
          <div className="display-5 fw-bold">Login</div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <div className="password-error"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            name="confirm_password"
            value={user.confirm_password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            role={"submit"}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
