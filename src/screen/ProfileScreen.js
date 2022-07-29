import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UPDATE_USER } from '../gqloperation/Mutations';
import { toast } from "react-toastify";

const ProfileScreen = () => {

    const [formData, setformData] = useState({})
    const [updateProfile] = useMutation(UPDATE_USER)
    // const info = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(info.token)

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        try{

            updateProfile({
                variables : {
                    updateUser : {
                        ...formData
                    }
                }
            })

            toast.success("Profile Updated Succesfully!")

        }catch(err){
            console.log(err)
            toast.error("Profile Don't Updated!")
        }

    }

    return (
        <div>
            <Container className='my-5'>
                <div className="form-title">
                    <h3 className='text-warning text-center my-4'>Update Profile</h3>
                </div>
                <Row>
                    <Col md={5} className="mx-auto">
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} required/>
                            </Form.Group>

                            <Button variant="warning rounded-0" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileScreen;
