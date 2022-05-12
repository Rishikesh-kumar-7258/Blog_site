import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const target = e.target.id;
    const value = e.target.value;

    let newval = { ...user };
    newval[target] = value;

    setUser(newval);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          position : "absolute",
          zIndex : "-100",
          width :"100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1595560013331-de1596c72a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(8px)",
        }}
      ></div>
      <form
        className="p-3 text-dark fw-bold"
        style={{
          minWidth: "300px",
          width: "50%",
          maxWidth: "500px",
          background: "#dfb5b850",
          boxShadow: "0px 2px 10px #000",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform : "translate(-50%, -50%)"
        }}
      >
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
