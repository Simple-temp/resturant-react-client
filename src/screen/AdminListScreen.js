import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MAKE_ADMIN, REMOVE_ADMIN } from '../gqloperation/Mutations';
import { GET_USERS } from '../gqloperation/Queres';

const AdminListScreen = () => {

    const [id, setid] = useState()
    const [makeanadmin] = useMutation(MAKE_ADMIN)
    const [removeAdmin] = useMutation(REMOVE_ADMIN)
    const { data, loading, error } = useQuery(GET_USERS)

    const handleSubmit = (e) => {
        makeanadmin({
            variables: {
                userId: id
            }
        })
        window.location.reload()
    }

    const handleRemove = (id) => {

        const user = "62d5a17648c6b54d5f6da65e" === id
        if (user) {
            toast.error("You can't remove this admin")
        } else {
            removeAdmin({
                variables : {
                    userId : id
                }
            })
            window.location.reload()
        }

    }

    return (
        <div>
            <Container className='my-5'>
                <Link to="/admin/user" className='text-decoration-none '>
                    <Button variant='warning' className='rounded-0 d-block me-auto'> See users list</Button>
                </Link>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter user Id</Form.Label>
                                <Form.Control type="text" onChange={(e) => setid(e.target.value)} />
                            </Form.Group>

                            <Button variant="warning" type="submit">
                                Make an admin
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <ul>
                            {
                                loading ? <h4>Loading...</h4>
                                    : error ? console.log(error)
                                        : data.users.map(x => (
                                            <li key={x._id} className="d-block w-100 my-2">
                                                {x.name && x.isAdmin === true && <span>{x.name}</span>}
                                                <b> {
                                                    x.isAdmin &&
                                                    <Button variant='success'>Admin</Button>
                                                }
                                                </b>
                                                <b> {
                                                    x.isAdmin &&
                                                    <Button variant='danger' onClick={() => handleRemove(x._id) }>
                                                        Remove from admin
                                                    </Button>
                                                }
                                                </b>
                                            </li>
                                        ))
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminListScreen;