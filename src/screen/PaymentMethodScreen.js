import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { payment } from '../redux/Action';

const PaymentMethodScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.handleCart)
    const [paymentMethodName , setPaymentMethodName] = useState(
        cart.cart.paymentMethod || "PayPal"
    )

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(payment(paymentMethodName))
        localStorage.setItem("paymentMethod", paymentMethodName)
        navigate("/shipping")
    }

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col md={6} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <Form.Check
                                    type='radio'
                                    id="PayPal"
                                    label="PayPal"
                                    value="PayPal"
                                    checked={paymentMethodName === "PayPal"}
                                    onChange={(e) => setPaymentMethodName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <Form.Check
                                    type='radio'
                                    id="Stripe"
                                    label="Stripe"
                                    value="Stripe"
                                    checked={paymentMethodName === "Stripe"}
                                    onChange={(e) => setPaymentMethodName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <Button type='submit' variant='warning' className='rounded-0'>Continue</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentMethodScreen;