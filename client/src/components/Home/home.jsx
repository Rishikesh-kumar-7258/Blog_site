import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../navbar/navbar";
import GetPosts from "../../usePosts";

const HomePage = () => {
  const [posts, setPosts] = GetPosts();

  return (
    <div className="container-fluid" id="main">
      <div className="row border" style={{ height: "100vh" }}>
        <div className="col-12">
          <Navbar />
          <p className="display-1 fw-bolder text-center mt-5">Blogger Prince</p>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-12">
          <h1 className="text-center fw-bold p-3">Recent posts</h1>
          <div className="container">
            <RenderPosts posts={posts} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        </div>
      </div>
    </div>
  );
};

const RenderPosts = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => {
        return (
          <div className="col-md-6 col-12 border mb-3 p-3" key={post.id}>
            <h1 className="text-center fw-bold p-3">{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
