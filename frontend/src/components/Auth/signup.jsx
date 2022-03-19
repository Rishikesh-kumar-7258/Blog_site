import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = props => {

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch('http://localhost:8000/api/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setUser(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const [user, setUser] = useState({})

    return (
        <>
            <Container>
                <Container className='mb-3'>
                    <p className="display-1 fw-bold text-center m-0">Welcome !!</p>
                    <p className="text-center w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vero?</p>
                </Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='first_name' className='mb-3'>
                        <Form.Control className='px-4 p-3 rounded-pill' type='text' placeholder='First Name' name='first_name' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId='last_name' className='mb-3'>
                        <Form.Control className='px-4 p-3 rounded-pill' type='text' placeholder='Last Name' name='last_name' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control className='px-4 p-3 rounded-pill' type="email" placeholder="Email" name='email' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control className='px-4 p-3 rounded-pill' type="text" placeholder="Username" name='username' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control className='px-4 p-3 rounded-pill' type="password" placeholder="Password" name='password' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='confirm_password'>
                        <Form.Control className='px-4 p-3 rounded-pill' type='password' placeholder='Confirm Password' name='confirm_password' onChange={handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit" className='w-100 p-3 rounded-pill'>
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    )
}

export default Signup;