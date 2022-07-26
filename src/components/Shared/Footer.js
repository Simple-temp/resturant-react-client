import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <h2 className='fs-1 mb-4'>Request a <span className='text-white'>Call Back</span></h2>
                <Row className='pb-5'>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="number" placeholder="Phone" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <textarea className='ps-3 w-100 text-box rounded-0' name="message" id="" cols="30" rows="3" placeholder='Message'></textarea>
                            </Form.Group>

                            <Button className='bg-white text-dark rounded-0 py-2 px-4 border border-0 fs-5' type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <img className='img-fluid' src="images/img.jpg" alt="" />
                    </Col>
                </Row>
                <img src="images/logo1.jpg" alt="" className='mx-auto d-block' />
            </Container>
            <Container className='pb-5'>
                <hr className='bg-white' />
                <div className="d-block w-100 footer-ul">
                    <ul className='mx-auto'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Recipe</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <Col md={6} className="mx-auto pb-5 mt-4">
                    <Form className='d-flex justify-content-center'>
                        <p className='newsletter'>NEWSLETTER</p>
                        <input type="text" placeholder='Your E-mail' className='w-50 ps-2 border border-0' />
                        <Button className='bg-dark text-white border border-0 rounded-0'> Subscribe</Button>
                    </Form>
                </Col>
            </Container>
            <div className='copyright pb-2 pt-4'>
                <p className='text-center'>© {new Date().getFullYear()} All Rights Reserved. Design by Aziz</p>
            </div>
        </footer>
    );
};

export default Footer;