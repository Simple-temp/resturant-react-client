import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { GET_USERS } from '../gqloperation/Queres';
import { Container, Button } from "react-bootstrap";
import { DELETE_USER } from '../gqloperation/Mutations';



const UsersScreen = () => {

    const { loading, error, data } = useQuery(GET_USERS)
    const [deleteuser, { loading: userloading, error: usererror, data: user }] = useMutation(DELETE_USER);

    const handleRemove = (id) => {
        deleteuser({
            variables: {
                userid: id
            }
        })
        window.location.reload()
    }

    return (
        <div>
            <Container className='my-5'>
                {
                    loading ? <h4>Loading..</h4>
                        : error ? console.log(error)
                            : <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>DATE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.users.map((user) => (

                                        <tr key={user._id}>
                                            <td data-label="ID">user-Id: {user._id}</td>
                                            <td data-label="NAME">
                                                <span className='text-capitalize'>{user.name}</span>
                                            </td>
                                            <td data-label="DATE">{new Date().toDateString()}</td>
                                            <td data-label="ACTION">
                                                <Button variant="outline-warning" onClick={() => handleRemove(user._id)} disabled={user.isAdmin === true}>
                                                    {
                                                        userloading ? <i>Loading..</i>
                                                            : <i className="fa-solid fa-trash-can"></i>
                                                    }
                                                </Button>
                                            </td>
                                        </tr>

                                    ))
                                    }
                                </tbody>
                            </table>
                }
            </Container>
        </div>
    );
};

export default UsersScreen;