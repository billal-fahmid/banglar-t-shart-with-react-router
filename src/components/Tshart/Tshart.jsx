import React from 'react';
import './Tshirt.css'

const Tshart = ({tShart,handleAddToCart}) => {
    const {_id,name,picture,gender,price} = tShart;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p> Price :${price}</p>
            <button onClick={() =>handleAddToCart(_id)}>Buy Now</button>
        </div>
    );
};

export default Tshart;