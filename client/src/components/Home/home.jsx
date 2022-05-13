import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../navbar/navbar";
import GetPosts from "../../usePosts";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts] = GetPosts();
  const [scrollposition , setScrollposition] = useState(0);

  const handleScroll = () => {
    let scroll = window.pageYOffset;
    setScrollposition(scroll);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive : true});
    console.log(scrollposition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    // console.log(scrollposition);
    if (scrollposition >= window.innerHeight - 50) 
    {
      
    }
  }, [scrollposition])

  return (
    <div className="container-fluid" id="main">
      <div className="row border" style={{ height: "100vh" }}>
        <div className="col-12">
          <p className="display-1 fw-bolder text-center mt-5">Blogger Prince</p>
        </div>
      </div>
      <div className="row bg-white" id="posts">
        <div className="col-12">
          <h1 className="text-center fw-bold p-3">Recent posts</h1>
          <div className="container">
            <RenderPosts posts={posts} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12"></div>
      </div>
    </div>
  );
};

const RenderPosts = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => {
        return (
          <div
            className="col-lg-6 col-12 border mb-3 px-5 py-3 postCard"
            key={post.id}
          >
            <img src={post.image} alt={post.title} />
            <p>{post.image}</p>
            <Link to={"post/view/" + post.id}
            params={{data : post}}
            >
              <h1 className="text-center fw-bold p-3">{post.title}</h1>
            </Link>

              <p className="d-flex align-items-center justify-content-between fw-bold">
                <span>Author : {post.author}</span>
                <span>
                  Categories :{" "}
                  {post.categories.map((category) => {
                    return category.name + " ";
                  })}
                </span>
              </p>
              <p>{post.content.substr(0, 50)}</p>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
