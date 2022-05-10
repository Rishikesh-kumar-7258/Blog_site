import axios from 'axios'
import React, {useState, useEffect} from 'react'

const GetPosts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    // getting post details
    axios.get("http://127.0.0.1:8000/api/posts")
    .then(res => {
      setPosts(res.data)
    })

  }, [])

  return [posts,]
}

export default GetPosts;