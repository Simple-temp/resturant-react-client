import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <Container className='py-5'>
                <div className="section-title text-center">
                    <img src="images/title.png" alt="" />
                    <h2 className='fs-1 text-capitalize mt-3'>Blog</h2>
                </div>
                <Row>
                    <Col md={4} className="mx-auto mt-5">
                        <Card className='m-1'>
                            <Card.Img variant="top" src="images/blog_img1.png" className='img-fluid w-100' />
                            <Card.Body>
                                <Card.Title className='p-2'>Spicy Barger</Card.Title>
                                <Card.Text className='p-2'>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mx-auto mt-5">
                        <Card className='m-1'>
                            <Card.Img variant="top" src="images/blog_img2.png" className='img-fluid w-100' />
                            <Card.Body>
                                <Card.Title className='p-2'>Egg & Tosh</Card.Title>
                                <Card.Text className='p-2'>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mx-auto mt-5">
                        <Card className='m-1'>
                            <Card.Img variant="top" src="images/blog_img3.png" className='img-fluid w-100' />
                            <Card.Body>
                                <Card.Title className='p-2'>Pizza</Card.Title>
                                <Card.Text className='p-2'>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;