import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

  const {id} = useParams()

  const [post , setPost] = useState({})

  const fetchPost = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/post/${id}`)
    const data = await response.json()
    setPost(data)
  }

  useEffect(() => {
    fetchPost();
  }, [])
  
  return (
    <div className="container mt-5 p-3 px-5 border">
      <h1 className='text-center display-3 mb-5 fw-bold'>{post.title.toUpperCase()}</h1>
      <p className='d-flex align-items-center justify-content-between fw-bold'>
        <span>Author : {post.author}</span>
        <span>Categories : {post.categories.map(category => {
          return category.name + " "
        })}</span>
      </p>
      <p>{post.content}</p>
    </div>
  )
}

export default Post