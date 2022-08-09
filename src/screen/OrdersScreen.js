import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_ORDERS, GET_USERS } from '../gqloperation/Queres';
import { Container } from "react-bootstrap"
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
        height: "250px",
        width: "340px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const OrdersScreen = () => {

    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_ORDERS)
    const { loading: userloading, error: usererror, data: user } = useQuery(GET_USERS)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleDelivered = (id) => {
        console.log((id))
    }

    const handleRemove = (id) => {
        console.log(id)
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
                                                <Modal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    style={customStyles}
                                                >
                                                    <h4 className='text-center mt-5'>Are you sure ?</h4>
                                                    <div className='confirm-box__actions mt-3 d-flex'>
                                                        <button onClick={() => handleRemove(order._id)} className="outline-success">Confirm</button>
                                                        <button onClick={closeModal} className="outline-danger">Cancel</button>
                                                    </div>
                                                </Modal>
                                                <Button variant="outline-warning" onClick={openModal}>
                                                    <i className="fa-solid fa-trash-can"></i>
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