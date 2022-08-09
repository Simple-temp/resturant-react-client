import React, { useState } from 'react';
import { GET_FOODS } from '../gqloperation/Queres';
import { Container, Button } from "react-bootstrap";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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

const FoodScreen = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const { loading, error, data } = useQuery(GET_FOODS)

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
            <Container className="my-5">
                {
                    loading ? <h4>Loading..</h4>
                        : error ? console.log(error)
                            : <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>DATE</th>
                                        <th>IMAGE</th>
                                        <th>DESCIPTION</th>
                                        <th>PRICE</th>
                                        <th>EDIT</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className='mt-3'>
                                    {data.foods.map((food) => (

                                        <tr key={food._id}>
                                            <td data-label="ID">food-Id: {food._id}</td>
                                            <td data-label="NAME">
                                                <span className='text-capitalize'>{food.name}</span>
                                            </td>
                                            <td data-label="DATE">{new Date().toDateString()}</td>
                                            <td data-label="IMAGE">
                                                <img src={food.img} alt="" className='img-fluid d-block' />
                                            </td>
                                            <td data-label="DESCIPTION">{food.des}</td>
                                            <td data-label="PRICE">${food.price}</td>
                                            <td data-label="EDIT">
                                                <Link to={`/foodedit/${food._id}`} className="text-decoration-none">
                                                    <Button variant='warning'>Edit</Button>
                                                </Link>
                                            </td>
                                            <td data-label="ACTION">
                                                <Modal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    style={customStyles}
                                                >
                                                    <h4 className='text-center mt-5'>Are you sure ?</h4>
                                                    <div className='confirm-box__actions mt-3 d-flex'>
                                                        <button onClick={() => handleRemove(food._id)} className="outline-success">Confirm</button>
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
        </div >
    );
};

export default FoodScreen;