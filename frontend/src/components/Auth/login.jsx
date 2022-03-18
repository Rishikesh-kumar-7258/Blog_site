import React , {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            if (data === true){
                alert("login successful");
            }
            else alert(data);
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
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
            <Link to='/'>Home</Link>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center p-3'>Signup Form</h1>
                    </div>
                    <div className="col-6">
                        <Form className='w-75 m-auto m-5 bg-dark text-white p-3' onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId='username'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Username' name='username' onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Password' name='password' onChange={handleChange}/>
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

export default Login;