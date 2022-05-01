import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from './header'

const handleClick = () => {
    console.log('clicked');
}

const LandinPage = () => {
    
    const [blogs, setblogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/getData/')
            .then(res => res.json())
            .then(data => {
                setblogs(data);
                // console.log(data);
            })
    }, [])

    return (
        <Container fluid>
            <Header />
            <div className="row border" style={{height:'100vh', overflowY:'scroll'}}>
                <div className="col-md-8 col-12">{blogs ? <Blogs blogs={blogs} /> : <p>Loading...</p>}</div>
                <div className="col-md-4 col-12 border"><Aside/></div>
            </div>
        </Container>
    )
}

const Blogs = (props) => {
    return (
        <div className='row px-5 p-3'>
            {props.blogs.map(blog => {
                return (
                    <Link to={`post/${blog.id}`} onClick={handleClick} className='col-md-6 col-12 border p-3 rounded blog-card bg-dark text-white text-decoration-none ' key={blog.id}>
                        <p className='d-flex justify-content-between'><span>Author : {blog.author}</span><span>Date : {blog.date}</span></p>
                        <p className='display-2'>{blog.title}</p>
                        <p>{blog.desc}</p>
                        <p className='mb-0'><i className="fa-solid fa-eye"></i> {blog.views}</p>
                    </Link>
                )
            })}
        </div>
    )

}

const Aside = (props) => {
    return (
        <Container>
            <div className="row bg-dark text-white p-3">
                <h1 className="text-center">Most Popular</h1>
                <div className="col-12">Something1</div>
                <div className="col-12">Something2</div>
                <div className="col-12">Something3</div>
                <div className="col-12">Something4</div>
                <div className="col-12">Something5</div>
                <div className="col-12">Something6</div>
                <div className="col-12">Something7</div>
                <div className="col-12">Something8</div>
            </div>
        </Container>
    )
}

export default LandinPage