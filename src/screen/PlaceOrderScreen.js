import React, { useReducer } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import {toast} from "react-toastify"
import { clearCart } from '../redux/Action';

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true, }
        case "FETCH_SUCCESS":
            return { ...state, loading: false, }
        case "FETCH_REQUEST":
            return { ...state, loading: true,  }
        default:
            return state
    }
}

const PlaceOrderScreen = () => {

    const reduxDispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.handleCart)
    const [{ loading, error, order }, dispatch] = useReducer(reducer, {
        loading: false,
    })
    const cart = useSelector((state) => state.handleCart)
    const itemPrice = cart.cart.cartItem.reduce((a, c) => a + c.price * c.quantity, 0)
    const totalTax = itemPrice * 10 / 100
    const totalPrice = itemPrice + totalTax

    const submitNewOrder = async() => {


        dispatch({ type: "FETCH_REQUEST" })
        try {

            const { data } = await axios.post("https://resturant-7fgl.onrender.com/api/order",
                {
                    foodItem: cart.cart.cartItem,
                    shippingAddress: cart.cart.shippingAddress,
                    paymentMethod: cart.cart.paymentMethod,
                    itemPrice: itemPrice,
                    totalPrice: totalPrice,
                },
                {
                    headers: {
                        authorization: `Bearer ${user.userInfo.token}`,
                    }
                }
            )
            reduxDispatch(clearCart())
            dispatch({ type: "FETCH_SUCCESS" })
            localStorage.removeItem("cartItem")
            navigate(`/order/${data.order._id}`)
            toast.success("Order submitted!")
        } catch {
            dispatch({ type: "FETCH_REQUEST" })
            toast.error("Order not submitted!")
        }
    }

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <Card variant='flush' className='py-3 ps-2'>
                                    <span><b>PaymentMethod :</b> {cart.cart.paymentMethod}</span>
                                    <Link to="/payment" className='text-decoration-none'>
                                        <Button variant="warning" className="rounded-0 me-auto mt-2">Edit</Button>
                                    </Link>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mt-2">
                                <Card variant='flush' className='py-3 ps-2'>
                                    <h5>Shipping Address</h5>
                                    <span><b>Country :</b> {cart.cart.shippingAddress.country}</span>
                                    <span><b>Address :</b> {cart.cart.shippingAddress.address}</span>
                                    <span><b>PostalCode :</b> {cart.cart.shippingAddress.postalCode}</span>
                                    <span><b>Phone :</b> {cart.cart.shippingAddress.phone}</span>
                                    <Link to="/shipping" className='text-decoration-none'>
                                        <Button variant="warning" className="rounded-0 me-auto mt-2">Edit</Button>
                                    </Link>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mt-2">
                                <Card variant='flush' className='py-3 ps-2'>
                                    {
                                        cart.cart.cartItem.map((item) => (
                                            <Row className='my-3' key={item._id}>
                                                <Col md={2}>
                                                    <img src={item.img} alt="" className='img-fluid d-block' />
                                                </Col>
                                                <Col md={6}>
                                                    <Link to={`/foodDetails/${item._id}`} className="text-warning text-decoration-none">
                                                        <p>{item.des}</p>
                                                    </Link>
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
                                    <Link to="/cart" className='text-decoration-none'>
                                        <Button variant="warning" className="rounded-0 me-auto mt-2">Edit</Button>
                                    </Link>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card variant="flush">
                            <ListGroup>
                                <h3 className='ms-3'>Total Item {cart.cart.cartItem.length}</h3>
                                <ListGroup.Item>Item Price : $ {itemPrice.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Shipping : $ {totalTax.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Total Price : $ {totalPrice.toFixed(2)}</ListGroup.Item>
                            </ListGroup>
                            <Button variant='warning' className='rounded-0 w-100 d-block' onClick={() => submitNewOrder()}>Order Now</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrderScreen;