import React from 'react';
import Item from './Item/Item';
import {useSelector} from 'react-redux';

import useStyles from './styles';

const Product = () => {
    const products = useSelector((state) => state.products);
    const classes = useStyles();
    
    console.log(products);
    return (
        <>
            <h1>menu</h1>
            <Item/>
            <Item/>
        </>
    );
}

export default Product;