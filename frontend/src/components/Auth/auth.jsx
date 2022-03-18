import {useState} from 'react'
import React from 'react'
import Login from './login'
import Signup from './signup'
import { Button } from 'react-bootstrap'

const Auth = () => {
    const [signup, setsignup] = useState(true)
    return (
    <>
        <h1>Header</h1>
        {signup ? <Signup /> : <Login />}
        <Button onClick={() => setsignup(!signup)}>{signup ? 'Login' : 'Signup'}</Button>
    </>
    )
}

export default Auth