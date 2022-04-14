import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "./header";

const Post = () => {
  const {id} = useParams();
  const [post, setpost] = useState(null);
  
  useEffect(() => {
    
    fetch(`http://localhost:8000/api/getPost/${id}`)
    .then(res => res.json())
    .then(data => setpost(data))
    .catch(err => console.log(err));

  }, [id])

  if (post === null) return "loading...";

  return (
    <div className="container-fluid">
      <Header/>
      <div className="row mt-5 p-3 border">
        <div className="col-md-3 col-12">Helper Field</div>
        <div className="col-md-auto col-12">
          <RenderPost post={post}/>
        </div>
      </div>
    </div>
  )
};

const RenderPost = ({post}) => {

  return (
    <div className="container bg-dark text-white" style={{maxHeight:'90vh', overflowY : 'scroll'}}>
      <div className="row">
        <div className="col-12">
          <p className="display-1 fw-bolder text-center">{post.title}</p>
          <p className="d-flex justify-content-between" style={{flexWrap:'wrap'}}><span>Author</span><span>Date : {post.date}</span></p>
        </div>
        <div className="col-12">
          <p>{post.desc}</p>
        </div>
        <div className="col-12">
          <p className="d-flex fw-bolder justify-content-between"><span>{post.likes}</span><span>{post.views}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Post;
