import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { CREATE_FOOD } from '../gqloperation/Mutations';

const AddNewFood = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState()
    const [des, setDes] = useState()
    const [priceInt, setPrice] = useState()
    const price = parseInt(priceInt)
    const [ratingFloat, setRatingFloat] = useState()
    const rating = parseFloat(ratingFloat)
    const [stockInt, setStockInt] = useState()
    const stock = parseInt(stockInt)
    const [quantityInt, setQuantityInt] = useState()
    const quantity = parseInt(quantityInt)
    const [ reviewInt, setReviewInt] = useState()
    const review = parseInt(reviewInt)
    const [img, setImg] = useState()

    const [createFOOD,{ loading, error, data}] = useMutation(CREATE_FOOD,{
        onCompleted(data){
            navigate(`/foodDetails/${data.createfood._id}`)
            window.location.reload()
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createFOOD({
            variables : {
                createFood : {
                    name,
                    des,
                    price,
                    rating,
                    stock,
                    quantity, 
                    review,   
                    img
                }
            }
        })
    }

    return (
        <div>
            <Container className='my-5'>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setName(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={(e) => setDes(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="float" onChange={(e) => setRatingFloat(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number" onChange={(e) => setStockInt(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" onChange={(e) => setQuantityInt(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Review</Form.Label>
                                <Form.Control type="number" onChange={(e) => setReviewInt(e.target.value)} required/>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" onChange={(e) => setImg(e.target.value)} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="warning" type="submit">
                        {
                            loading ? <span>loading..</span>
                                : "Add New Food"
                        }
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddNewFood;