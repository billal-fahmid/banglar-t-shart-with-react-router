import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tSharts = useLoaderData();
    console.log(tSharts)
    const [cart,setCart] = useState([])

    const handleAddToCart = (id) =>{
        console.log(id)
    }

    return (
        <div className='home-container'>

            <div className='t-shirts-container'>
                {
                    tSharts.map(tShart => <Tshart
                        tShart={tShart}
                        key={tShart._id}
                        handleAddToCart={handleAddToCart}
                    ></Tshart>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;