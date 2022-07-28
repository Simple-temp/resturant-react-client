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
        <>
            <Container>
                <h2 className='recipes mt-4'>Our Recipes</h2>
            </Container>
            <Container className='App'>
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <img src="images/rs1.png" alt="" className='img-fluid' />
                        <p className='mt-4'>Homemade</p>
                        <h6><span>$</span>10</h6>
                    </Item>
                    <Item>
                        <img src="images/rs2.png" alt="" className='img-fluid' />
                        <p className='mt-4'>Noodles</p>
                        <h6><span>$</span>20</h6>
                    </Item>
                    <Item>
                        <img src="images/rs3.png" alt="" className='img-fluid' />
                        <p className='mt-4'>Egg</p>
                        <h6><span>$</span>30</h6>
                    </Item>
                    <Item>
                        <img src="images/rs4.png" alt="" className='img-fluid' />
                        <p className='mt-4'>Sushi Dizzy</p>
                        <h6><span>$</span>50</h6>
                    </Item>
                    <Item>
                        <img src="images/rs5.png" alt="" className='img-fluid' />
                        <p className='mt-4'>The Coffee Break</p>
                        <h6><span>$</span>50</h6>
                    </Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Recipes;