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
                <Container>
                    <LinkContainer to="/">
                        <Nav.Link>
                            <img src="images/logo.png" alt="" />
                        </Nav.Link>
                    </LinkContainer>
                    <Button variant="primary" className='d-block ms-auto my-2' onClick={handleShow}>
                        <i className="fa-solid fa-bars"></i>
                    </Button>
                </Container>
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
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};


export default NavBar;