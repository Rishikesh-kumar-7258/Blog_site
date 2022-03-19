import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="m-auto">
                        <Link to="/" className='text-decoration-none text-white px-3'>Home</Link>
                        <Link to="/auth" className='text-decoration-none text-white px-3'>Login/Singup</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header