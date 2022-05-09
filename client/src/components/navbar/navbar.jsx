import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="py-2 px-4">
      <a href="#" className="fw-bold fs-4">Blogger Prince</a>
      <ul className="fw-bold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/">Settings</Link></li>
      </ul>
      <form action="#" className="d-flex">
        <input type="text" className="form-control" name="search" id="search" />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
