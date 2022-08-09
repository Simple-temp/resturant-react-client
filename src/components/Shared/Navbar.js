import React, { useState } from 'react';
import { Nav, Button, Navbar, Badge } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from '../../redux/Action';


const NavBar = ({ name, ...props }) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.handleCart)
    const cart = useSelector((state) => state.handleCart)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logOutuser = () => {
        dispatch(logOutUser())
        localStorage.removeItem("userInfo")
        localStorage.removeItem("paymentMethod")
        localStorage.removeItem("shippingAddress")
        window.location.href = "/login"
    }

    return (
        <>
            <Navbar variant='dark' bg='dark'>
                <LinkContainer to="/">
                    <Nav.Link>
                        <h1 className='text-white'>Resturant</h1>
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
                    {
                        user.userInfo
                            ? <Button variant='warning' className='rounded-0' onClick={() => logOutuser()}>
                                <Link to="#signout">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </Link>
                            </Button>
                            : <>
                                <Link to="/login">
                                    <Button className='ms-5 rounded-0' variant='warning'>LOGIN</Button>
                                </Link>
                                <Link to="/register">
                                    <Button className='ms-2 text-white border rounded-0' variant='outline-dark'>REGISTER</Button>
                                </Link>
                            </>
                    }
                </div>
                <Link to="/cart">
                    <Button className='my-2' variant='outline-dark'>
                        <i className="fa-solid fa-cart-arrow-down cart"></i>
                    </Button>
                    {
                        cart.cart.cartItem.length === 0 
                        ? null
                        : <Badge bg='warning'>{cart.cart.cartItem.reduce((a, c) => a + c.quantity, 0)}</Badge>
                    }
                </Link>
                <Button className='d-block ms-auto my-2 me-5 text-white' variant='outline-dark'>
                    <i className="fa-solid fa-bars bars" onClick={handleShow}></i>
                </Button>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className='d-block ms-auto' />
                <Offcanvas.Body>
                    <div className="sidebar">
                        <ul>
                            {
                                user.userInfo && user.userInfo.isAdmin ? <>
                                    <LinkContainer to="/profile">
                                        <Nav.Link className='text-warning text-capitalize'>{user.userInfo.name}</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/myorder">
                                        <Nav.Link className='text-warning text-capitalize'>My Order</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/user">
                                        <Nav.Link className='text-warning text-capitalize'>Users</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/food">
                                        <Nav.Link className='text-warning text-capitalize'>Foods</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/allorder">
                                        <Nav.Link className='text-warning text-capitalize'>Orders</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/adminlist">
                                        <Nav.Link className='text-warning text-capitalize'>Admin List</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/addnew">
                                        <Nav.Link className='text-warning text-capitalize'>Add New Food</Nav.Link>
                                    </LinkContainer>
                                </>
                                    : user.userInfo && <>
                                        <LinkContainer to="/profile">
                                            <Nav.Link className='text-warning text-capitalize'>{user.userInfo.name}</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/myorder">
                                            <Nav.Link className='text-warning text-capitalize'>My Order</Nav.Link>
                                        </LinkContainer>
                                    </>
                            }
                            <LinkContainer to="/">
                                <Nav.Link className='text-warning text-capitalize'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className='text-warning text-capitalize'>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/recipe" >
                                <Nav.Link className='text-warning text-capitalize'>Recipe</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className='text-warning text-capitalize'>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className='text-warning text-capitalize'>Contact Us</Nav.Link>
                            </LinkContainer>
                            <div className="btn-side-lr">
                                {
                                    user.userInfo
                                        ? <Button variant='warning' className='rounded-0' onClick={() => logOutuser(user.userInfo)}>
                                            <Link to="#signout">
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                            </Link>
                                        </Button>
                                        : <>
                                            <LinkContainer to="/login">
                                                <Nav.Link className='text-warning text-capitalize'>Login</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to="/register">
                                                <Nav.Link className='text-warning text-capitalize'>Register</Nav.Link>
                                            </LinkContainer>
                                        </>
                                }
                            </div>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};


export default NavBar;