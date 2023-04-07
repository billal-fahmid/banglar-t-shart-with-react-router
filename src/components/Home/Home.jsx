import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tSharts = useLoaderData();
    console.log(tSharts)
    return (
        <div>
            <h2>This is Home components : {tSharts.length}</h2>
        </div>
    );
};

export default Home;