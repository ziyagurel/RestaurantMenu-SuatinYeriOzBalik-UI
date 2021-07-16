import React from 'react';
import Item from './Item/Item';

import useStyles from './styles';

const Product = () => {
    const classes = useStyles();
    
    return (
        <>
            <h1>menu</h1>
            <Item/>
            <Item/>
        </>
    );
}

export default Product;