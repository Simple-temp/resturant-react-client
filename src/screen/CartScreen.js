import React from 'react';
import { Alert, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart, removeToCart } from '../redux/Action';

const CartScreen = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.handleCart)

    const updateAddTocart = (item, quantity) => {
        dispatch(AddToCart(item, quantity))
    }

    const updateRemoveTocart = (item) => {
        dispatch(removeToCart(item))
    }

    const itemPrice = cart.cart.cartItem.reduce((a, c) => a + c.price * c.quantity, 0)
    const totalTax = itemPrice * 10 / 100
    const totalPrice = itemPrice + totalTax

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col md={8}>
                        {cart.cart.cartItem.length === 0 &&
                            <Alert variant='warning'><Link to="/">Go to buy a food</Link></Alert>
                        }
                        {
                            cart.cart.cartItem.map((item) => (
                                <Row className='my-3' key={item._id}>
                                    <Col md={2}>
                                        <img src={item.img} alt="" className='img-fluid d-block' />
                                    </Col>
                                    <Col md={4}>
                                        <Link to={`/foodDetails/${item._id}`} className="text-warning text-decoration-none">
                                            <p>{item.des}</p>
                                        </Link>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='warning' className='rounded-0 mt-1' disabled={item.quantity === 1}
                                            onClick={() => updateAddTocart(item, item.quantity - 1)}>
                                            <i className="fa-solid fa-minus"></i>
                                        </Button>
                                        {" "}
                                        <span>{item.quantity}</span>
                                        {" "}
                                        <Button variant='warning' className='rounded-0 mt-1'
                                            onClick={() => updateAddTocart(item, item.quantity + 1)}>
                                            <i className="fa-solid fa-plus"></i>
                                        </Button>
                                    </Col>
                                    <Col md={2}>
                                        <b>$</b> <span>{item.price}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='warning' className='rounded-0' onClick={() => updateRemoveTocart(item)}>
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                    <Col md={4}>
                        <Card variant="flush">
                            <ListGroup>
                                <h3 className='ms-3'>Total Item {cart.cart.cartItem.length}</h3>
                                <ListGroup.Item>Item Price : $ {itemPrice.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Shipping : $ {totalTax.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Total Price : $ {totalPrice.toFixed(2)}</ListGroup.Item>
                            </ListGroup>
                            {
                                cart.cart.cartItem.length === 0 ? null
                                    : <Link to="/payment" className='text-decoration-none'>
                                        <Button variant='warning' className='rounded-0 w-100 d-block'>Continue</Button>
                                    </Link>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CartScreen;