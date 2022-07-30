import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UPDATE_USER } from '../gqloperation/Mutations';
import { toast } from "react-toastify";
import { UpdateUser } from '../redux/Action';
import { useDispatch } from 'react-redux';

const ProfileScreen = () => {

    const dispatch = useDispatch()
    const [formData, setformData] = useState({})
    const [updateProfile, { loading, error, data }] = useMutation(UPDATE_USER, {
        onCompleted(data) {
            dispatch(UpdateUser(data.updateuser))
            localStorage.setItem("userInfo", JSON.stringify(data.updateuser))
        }
    })
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

        try {

            updateProfile({
                variables: {
                    updateUser: {
                        ...formData
                    }
                }
            }
            )

        } catch (err) {
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
                        {
                            error && <Alert variant="danger">{error.message}</Alert>
                        }
                        {
                            data && data.updateuser && <Alert variant="success">Profile Updated</Alert>
                        }
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} required />
                            </Form.Group>

                            <Button variant="warning rounded-0" type="submit">
                                {
                                    loading ? <span>loading..</span>
                                        : "Update"
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileScreen;
