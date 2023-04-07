import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
    const tSharts = useLoaderData();
    // console.log(tSharts)
    const [cart, setCart] = useState([])
    console.log(cart)
    const handleAddToCart = (tShirt) => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if (exist) {
            toast('You have already select this T-Shirt');
        } else {

            const newCart = [...cart, tShirt]
            setCart(newCart)
        }
    }
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(pd => pd._id !== id);
        setCart(remaining)
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
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
            {/* <Toaster /> */}

        </div>
    );
};

export default Home;