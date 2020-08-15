import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetails = () => {
    const { productKey } = useParams()
    const myProduct = fakeData.find(xpd => xpd.key == productKey)

    return (
        <div>
            <h5> {productKey}  product details comming soon</h5>
            <Product product = {myProduct}></Product>
        </div>
    );
};

export default Productdetails;