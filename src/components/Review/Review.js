import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../ReviewItem/Reviewitem';


const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productkey) => {
        console.log(productkey);
    }
    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);
        const allCounts = productKeys.map(keys => {
            const cartProduct = fakeData.find(pd => pd.key === keys);
            cartProduct.quantity = saveData[keys];
            return cartProduct;
        });
        setCart(allCounts)
        
    },[])
    return (
        <div>
            <h3>all reviews items {cart.length}</h3>
            {
                cart.map(pd => <Reviewitem
                    product={pd}
                    key={pd.key}
                    removeProduct ={removeProduct}
                
                ></Reviewitem>)
            }
        </div>
    );
};

export default Review;