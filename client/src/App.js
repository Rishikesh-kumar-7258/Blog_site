import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import CreatePost from "./components/posts/create";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Post from "./components/posts/view";
import Navbar from "./components/navbar/navbar";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post/view/:id" element={<Post />} />
        <Route path="post/create" element={<CreatePost />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
};

export default App;
