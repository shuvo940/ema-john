import React from 'react';

const Reviewitem = (props) => {
    const {name,quantity} = props.product
    return (
        <div>
            <h2>{name}</h2>
            <p>quantity : {quantity}</p>
            <button className="mainButton"
            onClick ={props.removeProduct}
            >Remove</button>
        </div>
    );
};

export default Reviewitem;