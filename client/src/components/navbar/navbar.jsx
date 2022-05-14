import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

import Login from "../auth/login";
import Signup from "../auth/signup";

const Navbar = () => {
  const [user, setuser] = useState(null);

  const getUser = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/get_user');
    setuser(res.data);
  }

  return (
    <nav className="py-2 px-4">
      <Link to={'/'} className="fw-bold fs-4">Blogger Prince</Link>
      <ul className="fw-bold">
        <li><Link to="/">Home</Link></li>
        <li><a href="#posts">Posts</a></li>
        {
          user === null &&
          <li>
            <span>
              <Link to="auth/login">Login</Link>
            </span>
            <span>/</span>
            <span>
              <Link to="auth/signup">Signup</Link>
            </span>
            </li>
        }
        <li><Link to="/profile">profile</Link></li>
        <li><Link to="/post/create">Create Post</Link></li>
      </ul>
      <form action="#" className="d-flex">
        <input type="text" className="form-control" name="search" id="search" placeholder="search" />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
