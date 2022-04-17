import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";

const Post = () => {
  const { id } = useParams();
  const [post, setpost] = useState(null);

  const likePost = (post) => {
    fetch(`http://127.0.0.1:8000/api/updatePost/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...post, likes: post.likes + 1 }),
    })
      .then((res) => getPost(id))
      .catch((err) => console.log(err));

    // getPost(id);
  };

  const getPost = (id) => {
    fetch(`http://localhost:8000/api/getPost/${id}`)
      .then((res) => res.json())
      .then((data) => setpost(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  if (post === null) return "loading...";

  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5 p-3">
        <div className="col-md-3 col-12">Helper Field</div>
        <div className="col-md-auto col-12">
          <RenderPost post={post} likePost={likePost} />
        </div>
      </div>
    </div>
  );
};

const RenderPost = ({ post, likePost }) => {
  return (
    <div
      className="container bg-dark text-white"
      style={{ maxHeight: "90vh", overflowY: "scroll" }}
    >
      <div className="row">
        <div className="col-12">
          <p className="display-1 fw-bolder text-center">{post.title}</p>
          <p
            className="d-flex justify-content-between"
            style={{ flexWrap: "wrap" }}
          >
            <span>Author</span>
            <span>Date : {post.date}</span>
          </p>
        </div>
        <div className="col-12">
          <p>{post.desc}</p>
        </div>
        <div className="col-12">
          <p className="d-flex fw-bolder justify-content-between">
            <span>
              <button
                className="btn btn-primary"
                onClick={() => likePost(post)}
              >
                {post.likes}
              </button>
            </span>
            <span>{post.views}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
