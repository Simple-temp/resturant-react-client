import React, { useState } from 'react';
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar variant='dark' bg='dark'>
                <LinkContainer to="/">
                    <Nav.Link>
                        <img src="images/logo.png" alt="" className='logo-img' />
                    </Nav.Link>
                </LinkContainer>
                <div className='mx-auto navitem'>
                    <Nav className='ms-auto'>
                        <Nav.Link href="#" className='ms-4'>Contact Us : <i className="fa-solid fa-phone-volume"></i> : 987-654-3210 </Nav.Link>
                        <Nav.Link href="#"><i className="fa-solid fa-envelope"></i> : demo@gmail.com</Nav.Link>
                        <Nav.Link href="#"><i className="fa-solid fa-location-dot"></i> : 104 New york , USA</Nav.Link>
                    </Nav>
                </div>
                <div className="btnlr">
                    <Link to="/login">
                        <Button className='ms-5 rounded-0' variant='warning'>LOGIN</Button>
                    </Link>
                    <Link to="/register">
                        <Button className='ms-2 text-white border rounded-0' variant='outline-dark'>REGISTER</Button>
                    </Link>
                </div>
                <Button className='d-block ms-auto my-2 me-5 text-white' variant='outline-dark'>
                    <i className="fa-solid fa-bars bars" onClick={handleShow}></i>
                </Button>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className='d-block ms-auto' />
                <Offcanvas.Body>
                    <div className="sidebar">
                        <ul>
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/recipe" >
                                <Nav.Link>Recipe</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact us</Nav.Link>
                            </LinkContainer>
                            <div className="btn-side-lr">
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>
                            </div>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};


export default NavBar;