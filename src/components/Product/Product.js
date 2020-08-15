import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product; 
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4> <Link to = {'/product/'+key}>{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in order soon</small></p>
                { props.showAddCart === true &&
                    <button onClick= {()=>props.addHandaler(props.product)} className='mainButton'><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;