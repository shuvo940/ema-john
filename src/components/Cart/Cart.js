import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const product = cart[i]
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 14
    }
    const tax = (total / 100).toFixed(2)
    
    const formateNumber = num => {
        const precious = num.toFixed(2);
        return Number(precious)
    }
    return (
        <div>
            <h4>Cart summary :{cart.length}</h4>
            <p>Product price:{formateNumber(total)}</p>
            <p>shipping cost : {formateNumber(shipping)}</p>
            <p>tax : {tax}</p>
        </div>
    );
};

export default Cart;