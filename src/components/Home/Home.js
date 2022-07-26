import React from 'react';
import About from './About';
import Blog from './Blog';
import Client from "./Client"
import Main from './Main';
import Recipes from './Recipes';

const Home = () => {
    return (
        <div>
            <div className="main-section">
                <Main />
            </div>
            <div className="recipe-section">
                <Recipes />
            </div>
            <div className="client">
                <section>
                    <About />
                </section>
                <section>
                    <Blog />
                </section>
                <section>
                    <Client />
                </section>
            </div>
        </div>
    );
};

export default Home;