import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shippingAddress } from '../redux/Action';

const ShippingAddressScreen = () => {

    const cart = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ country, setcountry ] = useState( cart.cart.shippingAddress.country || "")
    const [ address, setaddress ] = useState( cart.cart.shippingAddress.address || "")
    const [ postalCode, setpostalCode ] = useState( cart.cart.shippingAddress.postalCode || "")
    const [ phone, setphone ] = useState( cart.cart.shippingAddress.phone || "")

    const handleSubmit = (e) => {
        e.preventDefault(e)
        dispatch(shippingAddress( country, address, postalCode, phone ))
        localStorage.setItem("shippingAddress", JSON.stringify({country, address, postalCode, phone}))
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
                                <Form.Control type="text" value={country} onChange={(e)=> setcountry(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={(e)=> setaddress(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control type="text" value={postalCode} onChange={(e)=> setpostalCode(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value={phone} onChange={(e)=> setphone(e.target.value)} required />
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