import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="py-2">
      <a href="#" className="fw-bold fs-4">Blogger Prince</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Posts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
