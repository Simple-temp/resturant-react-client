import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { CREATE_MESSAGES_FOR_USER, CREATE_NEWSLETTER_FOR_USER } from '../../gqloperation/Mutations';

const Footer = () => {

    const [create,{loading, error, data : messageData}] = useMutation(CREATE_MESSAGES_FOR_USER)
    const [createNewLetter,{data}] = useMutation(CREATE_NEWSLETTER_FOR_USER)

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const [message, setmessage] = useState()
    const [ newletter, SetNewsLetter ] = useState()

    const submitReview = (e) => {
        e.preventDefault()
        create({
            variables: {
                createMessage: {
                    name,
                    email,
                    phone,
                    message,
                }
            }
        })
        console.log(messageData)
        setname()
        setemail()
        setphone()
        setmessage()
        toast.success("Message send Successfully",)
    }

    const submitNewsletter = (e) =>{
        e.preventDefault()
        console.log(newletter)
        createNewLetter({
            variables: {
                createNewsletter: {
                    newletter
                }
            }
        })
        toast.success("Subscribe Successfully, We will contact you soon",)
    }


    return (
        <footer>
            <Container>
                <h2 className='fs-1 mb-4'>Request a <span className='text-white'>Call Back</span></h2>
                <Row className='pb-5'>
                    <Col md={6}>
                        <Form onSubmit={submitReview}>
                            <Form.Group className="mb-4">
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="email" placeholder="E-mail" onChange={(e) => setemail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Control className='py-3 ps-3 rounded-0 inputfield' type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <textarea className='ps-3 w-100 text-box rounded-0' cols="30" rows="3" placeholder='Message' onChange={(e) => setmessage(e.target.value)}></textarea>
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
                        <input type="email" placeholder='Your E-mail' className='w-50 ps-2 border border-0' onChange={(e)=>SetNewsLetter(e.target.value)} />
                        <Button className='bg-dark text-white border border-0 rounded-0' onClick={submitNewsletter}> Subscribe</Button>
                    </Form>
                </Col>
            </Container>
            <div className='copyright pb-2 pt-4'>
                <p className='text-center'>© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;