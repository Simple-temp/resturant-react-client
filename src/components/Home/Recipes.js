import { useQuery } from '@apollo/client';
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import { GET_FOODS } from '../../gqloperation/Queres';
import Item from '../Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Recipes = () => {

    const { loading: foodLoading, error: foodError, data: food } = useQuery(GET_FOODS)

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
                                        <img src={item.img} alt="" className='img-fluid' />
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