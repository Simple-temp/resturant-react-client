import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shippingAddress } from '../redux/Action';

const ShippingAddressScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setformData] = useState({})

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        dispatch(shippingAddress(formData))
        localStorage.setItem("shippingAddress", JSON.stringify(formData))
        navigate("/placeorder")
    }


    return (
        <div>
            <Container className='my-5'>
                <div className="form-title">
                    <h3 className='text-warning text-center my-4'>Shipping</h3>
                </div>
                <Row>
                    <Col md={5} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Country/Distric</Form.Label>
                                <Form.Control type="text" name="country" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control type="text" name="postalCode" onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" name="phone" onChange={handleChange} required />
                            </Form.Group>

                            <Button variant="warning rounded-0" type="submit">
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingAddressScreen;