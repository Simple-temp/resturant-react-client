import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { GET_REVIEWS } from '../../gqloperation/Queres';

const CLient = () => {

    const { loading, error, data } = useQuery(GET_REVIEWS)

    return (
        <>
            <Container>
                <div className="section-title text-center">
                    <img src="images/title.png" alt="" />
                    <h2 className='fs-1 text-capitalize mt-3'>Our Client</h2>
                </div>                                <Row>
                    {
                        loading ? <h4>Loading..</h4>
                            : error ? console.log(error)
                                : data.review.map((item) => (
                                    <Col md={4} lg={3} className="mt-5" key={item._id}>
                                        <Card className='p-1 bg-dark'>
                                            <img src="images/client.jpg" alt="" className='mx-auto mt-5' style={{width:"80px", height:"80px", borderRadius: "50%"}} />
                                            <h4 className='mb-3 mt-4 text-center text-white'>Unknown</h4>
                                            <p className='mb-4 text-center px-5 text-white'>{item.message}</p>
                                            <img src="images/client_icon.png" alt="" className='mx-auto img-fluid mb-5 mt-4' />
                                        </Card>
                                    </Col>

                                ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default CLient;