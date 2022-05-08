import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import CreatePost from "./components/posts/create";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="post/create" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
