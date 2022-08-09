import React from 'react';
import { GET_FOODS } from '../gqloperation/Queres';
import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_FOOD } from '../gqloperation/Mutations';


const FoodScreen = () => {

    const { loading, error, data } = useQuery(GET_FOODS)
    const [deletefood, { loading: foodloading }] = useMutation(DELETE_FOOD)

    const handleRemove = (id) => {
        deletefood({
            variables : {
                foodId : id
            }
        })
        window.location.reload()
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
                                                <Button variant="outline-warning" onClick={() => handleRemove(food._id)}>
                                                    {
                                                        foodloading ? <i>Loading</i>
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
        </div >
    );
};

export default FoodScreen;