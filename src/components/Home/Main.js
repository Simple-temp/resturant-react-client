import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GET_USERS, GET_FOODS, GET_ORDERS, GET_USER_BY_ID, GET_FOOD_BY_ID, GET_ORDER_BY_ID } from '../../gqloperation/Queres';
import Carousel from "react-elastic-carousel";
import Item from '../Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Main = () => {

    return (
        <Container className='App'>
            <Carousel>
                <Row>
                    <Col md={5}>
                        <div className="main-title">
                            <h1>Discover Restaurants
                                That deliver near You</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Button variant='outline-dark' className='dark rounded-0'>Order Now</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img src="images/s1.jpg" alt="" className='img-fluid w-100 ' />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <div className="main-title">
                            <h1>Discover Restaurants
                                That deliver near You</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Button variant='outline-dark' className='dark rounded-0'>Order Now</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img src="images/s2.jpg" alt="" className='img-fluid w-100 ' />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <div className="main-title">
                            <h1>Discover Restaurants
                                That deliver near You</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Button variant='outline-dark' className='dark rounded-0'>Order Now</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img src="images/s3.jpg" alt="" className='img-fluid w-100 ' />
                    </Col>
                </Row>
            </Carousel>
        </Container>
    );
};

export default Main;