import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CLient = () => {
    return (
        <>
            <Container>
                <div className="section-title text-center">
                    <img src="images/title.png" alt="" />
                    <h2 className='fs-1 text-capitalize mt-3'>Our Client</h2>
                </div>
                <Row>
                    <Col md={10} lg={5} className="mx-auto mt-5">
                        <Card className='p-3 bg-dark'>
                            <img src="images/client.jpg" alt="" className='mx-auto mt-5' />
                            <h4 className='mb-3 mt-4 text-center text-white'>Roock Due</h4>
                            <p className='mb-4 text-center px-5 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                            <img src="images/client_icon.png" alt="" className='mx-auto img-fluid mb-5 mt-4' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CLient;