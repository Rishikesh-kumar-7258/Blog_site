import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = props => {

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch('http://localhost:8000/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'data': user})
        })
        .then(res => res.json())
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
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
        <Link to='/'>Home</Link>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center p-3'>Signup Form</h1>
                    </div>
                    <div className="col-6">
                        <Form className='w-75 m-auto m-5 bg-dark text-white p-3' onSubmit={handleSubmit}>
                            <Form.Group controlId='first_name' className='mb-3'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' name='first_name' onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId='last_name' className='mb-3'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' name='last_name' onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='confirm_password'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='password' placeholder='Confirm Password' name='confirm_password' onChange={handleChange} />
                                </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup;