import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../gqloperation/Mutations';
import { loginUser } from '../redux/Action';

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setformData] = useState({})
    const [Login, { loading, error, data }] = useMutation(LOGIN_USER,
        {
            onCompleted(data) {
                dispatch(loginUser(data.loginuser))
                localStorage.setItem("userInfo", JSON.stringify(data.loginuser))
                navigate("/")
                window.location.reload()
            }
        }
    )

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        Login({
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
                    <h3 className='text-warning text-center my-4'>Login</h3>
                </div>
                <Row>
                    <Col md={5} className="mx-auto">
                        {
                            error && <Alert variant="danger">{error.message}</Alert>
                        }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} required />
                            </Form.Group>
                            <p className='text-warning'> Don't have any account? <Link to="/register" className='text-warning'>Register</Link></p>
                            <br />
                            <Button variant="warning rounded-0" type="submit">
                                {
                                    loading ? <span>loading..</span>
                                        : "Login"
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;