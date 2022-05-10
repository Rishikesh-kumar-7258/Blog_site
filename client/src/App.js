import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import CreatePost from "./components/posts/create";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Post from "./components/posts/view";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="post/view/:id" element={<Post/>} />
      <Route path="post/create" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
