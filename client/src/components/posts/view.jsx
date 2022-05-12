import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

  const {id} = useParams()

  const [post , setPost] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);

  const fetchPost = async () =>
  {
    const res = await axios.get(`http://127.0.0.1:8000/api/post/${id}`);
    setPost(res.data);
  }

  const getuser = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/get_user');
    setCurrentUser(res.data);
  }

  useEffect(() => {
    fetchPost();
    getuser();
  }, [])

  if (post === null) return "loading...";

  
  return (
    <div className="container mt-5 p-3 px-5 border">
      {
        currentUser === post.author && 
        <div className="row">
          <div className="col-12">
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      }
      <h1 className='text-center display-3 mb-5 fw-bold'>{post.title}</h1>
      <p className='d-flex align-items-center justify-content-between fw-bold'>
        <span>Author : {post.author}</span>
        <span>Categories : {post.categories.map(category => {
          return category.name + " "
        })}</span>
      </p>
      <p>{post.content}</p>
    </div>
    // "Just checking"
  )
}

export default Post