import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom';
import { UPDATE_FOOD } from '../gqloperation/Mutations';

const FoodEditScreen = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [ name, setName] = useState()
    const [ des, setDes] = useState()
    const [ priceInt, setPrice] = useState()
    const price = parseInt(priceInt)
    const [ ratingFloat, setRatingFloat] = useState()
    const rating = parseFloat(ratingFloat)
    const [ stockInt, setStockInt] = useState()
    const stock = parseInt(stockInt)
    const [ img, setImg] = useState()

    const [updateFOOD, { loading, error, data }] = useMutation(UPDATE_FOOD)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateFOOD({
            variables : {
                updateFood : {
                    _id : id,
                    name,
                    des,
                    price,
                    rating,
                    stock,
                    img
                }
            }
        })
        navigate(`/foodDetails/${id}`)
        window.location.reload()
    }

    return (
        <div>
            <Container className='my-5'>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={(e) => setDes(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="float" onChange={(e) => setRatingFloat(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number" onChange={(e) => setStockInt(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" onChange={(e) => setImg(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="warning" type="submit">
                        {
                            loading ? <span>loading..</span>
                                : "Update"
                        }
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default FoodEditScreen;