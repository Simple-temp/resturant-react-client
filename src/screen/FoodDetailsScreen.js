import { useQuery } from '@apollo/client';
import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { GET_FOOD_BY_ID } from '../gqloperation/Queres';
import { AddToCart } from '../redux/Action';

const FoodDetailsScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.handleCart)
    const param = useParams()
    const { id } = param
    const { loading, error, data } = useQuery(GET_FOOD_BY_ID, {
        variables: {
            foodId: id
        }
    })

    const updateAddTocart = () => {

        const exitsItem = cart.cart.cartItem.find((x) => x._id === data.food._id)
        const quantity = exitsItem ? exitsItem.quantity + 1 : 1
        dispatch(AddToCart(data.food, quantity))
        navigate("/cart")
    }

    return (
        <div>
            <Container className='my-5'>
                {
                    loading ? <h4>Loading..</h4>
                        : error ? console.log(error)
                            : <Row>
                                <Col md={5}>
                                    <img src={data.food.img} alt="" className='mx-auto d-block' />
                                </Col>
                                <Col md={7} className="mt-2">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{data.food.name}</Card.Title>
                                            <Card.Text> {data.food.des} </Card.Text>
                                            <Card.Text> <b>Price : $</b> {data.food.price} </Card.Text>
                                            <Card.Text> <b>Review :</b> {data.food.review} </Card.Text>
                                            <Card.Text> <b>Stock :</b> {
                                            data.food.stock.length === 0 ? <Badge bg='danger'>Unavailable</Badge>
                                            : <Badge bg='success'>Available {data.food.stock}</Badge>
                                            } </Card.Text>
                                            <Rating rating={data.food.rating}/>
                                            <Button variant="warning" className='rounded-0 mt-2' onClick={()=>updateAddTocart()}>
                                                Add to Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                }
            </Container>
        </div>
    );
};

export default FoodDetailsScreen;