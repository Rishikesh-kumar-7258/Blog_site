import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user);

        fetch('http://localhost:8000/api/authenticateUser/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    alert("login successful");
                }
                else alert(data);
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setuser(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const [user, setuser] = useState({});

    return (
        <>
            {/* <Link to='/'>Home</Link> */}
            <Container className='align-middle'>
                <p className='text-center display-1 fw-bold'>Welcome !!</p>
                <p className='text-center w-75 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati.</p>
                <Form className='w-75 m-auto  p-3' onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='username'>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control className="rounded-pill p-3 px-4" type='text' placeholder='Username' name='username' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='password'>
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control className="rounded-pill p-3 px-4" type='password' placeholder='Password' name='password' onChange={handleChange} />
                    </Form.Group>
                    <p variant="primary" className='text-end'>Forget Password ?</p>
                    <Button variant="dark" type="submit" className="w-100 rounded-pill p-3">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login;