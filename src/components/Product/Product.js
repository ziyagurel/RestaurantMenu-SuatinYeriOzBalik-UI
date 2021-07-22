import React from 'react';
import Item from './Item/Item';
import {useSelector} from 'react-redux';

import useStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Product = () => {
    const products = useSelector((state) => state.products);
    const classes = useStyles();

    return (
        !products.length ? <CircularProgress/> : (
            <Grid className = { classes.container} container alignItems = "stretch" spacing={3}>
                {products.map((product) => (
                    <Grid key = {product._id} item xs={12} sm={6} md={6} >
                        <Item product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Product;