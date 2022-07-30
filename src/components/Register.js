import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { REGISTER_USER } from '../gqloperation/Mutations';
import { createUser } from '../redux/Action';

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setformData] = useState({})
    const [Register, { loading, error, data }] = useMutation(REGISTER_USER, {
        onCompleted(data) {
            dispatch(createUser(data.createuser))
            localStorage.setItem("userInfo", JSON.stringify(data.createuser))
            navigate("/")
            window.location.reload()
        }
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        Register({
            variables: {
                userInfo: {
                    ...formData
                }
            }
        })
    }


    return (
        <div>
            <Container className='my-5'>
                <div className="form-title">
                    <h3 className='text-warning text-center my-4'>Register</h3>
                </div>
                <Row>
                    <Col md={5} className="mx-auto">
                        {
                            error && <Alert variant="danger">{error.message}</Alert>
                        }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} required />
                            </Form.Group>
                            <p className='text-warning'> Already have an account? <Link to="/Login" className='text-warning'>Login</Link></p>
                            <br />
                            <Button variant="warning rounded-0" type="submit">
                                {
                                    loading ? <span>loading..</span>
                                        : "Register"
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;