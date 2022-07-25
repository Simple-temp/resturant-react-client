import { useQuery } from '@apollo/client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GET_USERS, GET_FOODS, GET_ORDERS, GET_USER_BY_ID, GET_FOOD_BY_ID, GET_ORDER_BY_ID } from '../../gqloperation/Queres';
import Carousel from "react-elastic-carousel";
import Item from '../Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Main = () => {

    // const { loading: userloading, error: usererror, data: user } = useQuery(GET_USERS)
    // const { loading: userloadingbyid, error: usererrorbyid, data: userbyid } = useQuery(GET_USER_BY_ID, {
    //     variables: {
    //         userid: "62d58d9c1b975b0be5221841",
    //     }
    // })

    // const { loading: foodloading, error: fooderror, data: food } = useQuery(GET_FOODS)
    // const { loading: foodloadingbyid, error: fooderrorbyid, data: foodbyid } = useQuery(GET_FOOD_BY_ID, {
    //     variables: {
    //         foodId: "62d83973c2fb320fe10ed856",
    //     }
    // })

    // const { loading: orderloading, error: ordererror, data: order } = useQuery(GET_ORDERS)
    // const { loading: orderloadingbyid, error: ordererrorbyid, data: orderbyid } = useQuery(GET_ORDER_BY_ID, {
    //     variables: {
    //         orderid: "62d6d5e3f76a2e7c4951c116",
    //     }
    // })


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

export default Main;