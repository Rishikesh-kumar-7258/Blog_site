import { useState } from 'react'
import React from 'react'
import Login from './login'
import Signup from './signup'
// import Header from '../header'
import { Col, Container, Row } from 'react-bootstrap'
import Pattern from './pattern'

const Auth = () => {
    const [signup, setsignup] = useState(true)
    return (
        <>
            {/* <Header/> */}
            <Container className='d-flex'>
                <Container className='w-50 mx-0' style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
                    <Row>
                        <Col>
                            {signup ? <Signup /> : <Login />}
                        </Col>
                        <p className='text-center' style={{ cursor: 'pointer' }} onClick={() => setsignup(!signup)}>{signup ? 'Already a member? Login' : 'New User? Signup'}</p>
                    </Row>
                </Container>
                <Container className='w-50 mx-0' style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
                    <Pattern />
                </Container>
            </Container>
        </>
    )
}

export default Auth