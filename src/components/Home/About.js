import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const About = () => {
    return (
        <>
            <Container className='py-5'>
                <div className="section-title text-center">
                    <img src="images/title.png" alt="" />
                    <h2 className='fs-1 text-capitalize mt-3'>About Our Food & Restaurant</h2>
                    <p className='about-title w-50 mx-auto'>
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem
                    </p>
                </div>
                <Row className='about-section'>
                    <Col lg={6} md={12} className="mt-5 mb-3">
                        <div className="about">
                            <h3>Food</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard</p>
                            <span>Read More <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <img src="images/about-img.jpg" alt="" className='img-fluid w-100' />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;