import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import Header from './header'

const handleClick = () => {
    console.log('clicked')
}

const LandinPage = () => {
    
    const [blogs, setblogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/getData/')
            .then(res => res.json())
            .then(data => {
                setblogs(data);
                console.log(data);
            })
    }, [])

    return (
        <Container fluid>
            <Header />
            {blogs ? <Blogs blogs={blogs} /> : <p>Loading...</p>}
        </Container>
    )
}

const Blogs = (props) => {
    return (
        <div className='row px-5 p-3'>
            {props.blogs.map(blog => {
                return (
                    <div onClick={handleClick} className='col-md-6 col-12 border p-3 blog-card' key={blog.id}>
                        <p className='display-2'>{blog.title}</p>
                        <p>{blog.desc}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default LandinPage