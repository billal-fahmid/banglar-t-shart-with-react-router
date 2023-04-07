import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log(cart)
    let message;
    if (cart.length === 0) {
        message = <p>please add some product</p>
    } else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for give your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'orange' : 'green'}>Order Summary :{cart.length}</h2>
            <p className='bold'>Something is here</p>
            {
            cart.length > 2 
            ? <p className='yellow'>Aro kino </p> 
            : <p>Fokira Naki!!</p>
            }
            {message}
            {
                cart.map(pd => <p
                    key={pd._id}
                >{pd.name}
                    <button onClick={() => handleRemoveFromCart(pd._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>double bonanza</p>
            }
            {
                cart.length ===3 || <p>3 ta toh hoilo nah </p>
            }
        </div>
    );
};

export default Cart;

/**
 * 
 * 
 * conditional rendering 
 * 1.use if else to set a variable that will content ,an element , components
 * 2. ternary ? 'is true' : 'is false' 
 * **/