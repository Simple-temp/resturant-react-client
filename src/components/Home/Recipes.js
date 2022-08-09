import { useQuery } from '@apollo/client';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GET_FOODS } from '../../gqloperation/Queres';
import Item from '../Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "FETCH_REQUEST":
//             return { ...state, loading: true, }
//         case "FETCH_SUCCESS":
//             return { ...state, loading: false, foods: action.payload }
//         case "FETCH_REQUEST":
//             return { ...state, loading: true, error: action.payload }
//         default:
//             return state
//     }
// }

const Recipes = () => {

    const { loading: foodLoading, error: foodError, data: food } = useQuery(GET_FOODS)

    // const [{ loading, error, foods }, dispatch] = useReducer(reducer, {
    //     loading: true,
    //     error: ""
    // })

    // useEffect(() => {

    //     const fetchData = async () => {
    //         dispatch({ type: "FETCH_REQUEST" })
    //         try {

    //             const { data } = await axios.get("http://localhost:4000/api/food")
    //             dispatch({ type:"FETCH_SUCCESS", payload: data})
    //             console.log(data)

    //         } catch {
    //             dispatch({ type: "FETCH_REQUEST" })
    //             toast.error("Food not found!")
    //         }
    //     }
    //     fetchData()

    // }, [])

    return (
        <>
            <Container>
                <h2 className='recipes mt-4'>Our Recipes</h2>
            </Container>
            <Container className='App'>
                <Carousel breakPoints={breakPoints}>
                    {
                        foodLoading ? <h4 className='text-white'>Loading..</h4>
                            : foodError ? console.log(foodError)
                                : food.foods.map((item) => (
                                    <Item key={item._id}>
                                        <Link to={`/foodDetails/${item._id}`}>
                                            <img src={item.img} alt="" className='img-fluid' />
                                        </Link>
                                        <p className='mt-4'>{item.name}</p>
                                        <h6><span>$</span>{item.price}</h6>
                                    </Item>
                                )
                                )
                    }
                </Carousel>
            </Container>
        </>
    );
};

export default Recipes;