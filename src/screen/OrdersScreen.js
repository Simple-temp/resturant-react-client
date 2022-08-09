import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { GET_ORDERS, GET_USERS } from '../gqloperation/Queres';
import { Container } from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DELETE_FOOD, DELETE_ORDER } from '../gqloperation/Mutations';



const OrdersScreen = () => {

    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_ORDERS)
    const { loading: userloading, error: usererror, data: user } = useQuery(GET_USERS)
    const [deleteorder, { loading: orderloading }] = useMutation(DELETE_ORDER)

    const handleDelivered = (id) => {
        console.log((id))
    }

    const handleRemove = (id) => {
        deleteorder({
            variables : {
                orderId : id
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
                                        <th>TOTAL</th>
                                        <th>PAID</th>
                                        <th>DELIVERED</th>
                                        <th>DETAILS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.orders.map((order) => (

                                        <tr key={order._id}>
                                            <td data-label="ID">Order-Id: {order._id}</td>
                                            <td data-label="NAME">
                                                {userloading ? <p>Loading..</p>
                                                    : usererror ? console.log(usererror)
                                                        :
                                                        user.users.map(u => <p key={u._id}>{
                                                            u._id === order.userid && <span className='text-capitalize'>{u.name}</span>
                                                        }</p>)
                                                }
                                            </td>
                                            <td data-label="DATE">{new Date().toDateString()}</td>
                                            <td data-label="TOTAL">${order.totalPrice}</td>

                                            <td data-label="PAID">{order.isPaid
                                                ? <Button variant="outline-warning">Paid at {new Date(order.paidAt).toDateString()}</Button>
                                                : <Button variant="warning">Not Paid</Button>}</td>

                                            <td data-label="DELIVERED">
                                                <Button variant={order.isDelivered
                                                    ? `outline-warning` : `warning`} onClick={() => handleDelivered(order._id)}>
                                                    {
                                                        order.isDelivered ? `Delivered at,${new Date(order.devliveredAt).toDateString()}` : "Click to Delivered"
                                                    }
                                                </Button>
                                            </td>
                                            <td data-label="DETAILS">
                                                <Button type="button" variant="outline-warning" onClick={() => navigate(`/order/${order._id}`)}>
                                                    Details
                                                </Button>
                                            </td>
                                            <td data-label="ACTION">
                                                <Button variant="outline-warning" onClick={() => handleRemove(order._id)}>
                                                    {
                                                        orderloading ? <i>Loading..</i>
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

export default OrdersScreen;