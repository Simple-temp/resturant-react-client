import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from '../Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Recipes = () => {
    return (
        <Container className='App'>
            <Carousel breakPoints={breakPoints}>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
            </Carousel>
        </Container>
    );
};

export default Recipes;