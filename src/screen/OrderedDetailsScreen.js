import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ORDER_BY_ID } from '../gqloperation/Queres';
import { Container, Row, Col, ListGroup, Button, Card, Alert } from "react-bootstrap"
import { useParams } from 'react-router-dom';

const OrderedDetailsScreen = () => {

    const params = useParams()
    const { id } = params
    const { loading, error, data } = useQuery(GET_ORDER_BY_ID,{
        variables : {
            orderid : id
        }
    })

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    {
                        loading ? <h4>Loading..</h4>
                            : error ? console.log(error)
                                : <>
                                    <Col md={8}>
                                        <Row>
                                            <Col md={12}>
                                                <Card variant='flush' className='py-3 ps-2'>
                                                    <span><b>PaymentMethod :</b> {data.order.paymentMethod}</span>
                                                </Card>
                                                {
                                                    data.order.paidAt === true
                                                    ? <Alert variant='success'> Paid At, {new Date(data.order.paidAt).toDateString()}</Alert>
                                                    : <Alert variant='danger'> Not Paid </Alert>
                                                }                                               
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className="mt-2">
                                                <Card variant='flush' className='py-3 ps-2'>
                                                    <h5>Shipping Address</h5>
                                                    <span><b>Country :</b> {data.order.shippingAddress.country}</span>
                                                    <span><b>Address :</b> {data.order.shippingAddress.address}</span>
                                                    <span><b>PostalCode :</b> {data.order.shippingAddress.postalCode}</span>
                                                    <span><b>Phone :</b> {data.order.shippingAddress.phone}</span>
                                                </Card>
                                                {
                                                    data.order.isDelivered === true
                                                    ? <Alert variant='success'> Delivered At, {new Date(data.order.devliveredAt).toDateString()}</Alert>
                                                    : <Alert variant='danger'> Not Delivered </Alert>
                                                } 
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className="mt-2">
                                                <Card variant='flush' className='py-3 ps-2'>
                                                    {
                                                        data.order.foodItem.map((item) => (
                                                            <Row className='my-3' key={item._id}>
                                                                <Col md={2}>
                                                                    <img src={item.img} alt="" className='img-fluid d-block' />
                                                                </Col>
                                                                <Col md={6}>
                                                                        <p>{item.des}</p>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <b>Quantity : </b><span>{item.quantity}</span>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <b>$</b> <span>{item.price}</span>
                                                                </Col>
                                                            </Row>
                                                        ))
                                                    }
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={4}>
                                        <Card variant="flush">
                                            <ListGroup>
                                                <h3 className='ms-3'>Total Item {data.order.foodItem.length}</h3>
                                                <ListGroup.Item>Item Price : $ {data.order.itemPrice}</ListGroup.Item>
                                                <ListGroup.Item>Shipping : $ {data.order.totalTax}</ListGroup.Item>
                                                <ListGroup.Item>Total Price : $ {data.order.totalPrice}</ListGroup.Item>
                                            </ListGroup>
                                            {
                                                data.order.paymentMethod === "Stripe" 
                                                ? <Button variant='warning' className='rounded-0'>Stripe</Button>
                                                : <Button variant='warning' className='rounded-0'>Paypal</Button>
                                            }
                                        </Card>
                                    </Col>
                                </>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OrderedDetailsScreen;