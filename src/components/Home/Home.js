import React from 'react';
import About from './About';
import Blog from './Blog';
import Client from "./Client"
import Main from './Main';
import Recipes from './Recipes';

const Home = () => {
    return (
        <div>
            <Main/>
            <Recipes/>
            <About/>
            <Blog/>
            <Client/>
        </div>
    );
};

export default Home;