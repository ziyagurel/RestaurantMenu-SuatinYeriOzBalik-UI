import React from 'react';
import Contents from './contents/Contents';
import {useSelector} from 'react-redux';

import useStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Menu = ({setCurrentId}) => {
    const products = useSelector((state) => state.products);
    const classes = useStyles();

    return (
        !products.length ? <CircularProgress/> : (
            <Grid className = { classes.container} container alignItems = "stretch" spacing={3}>
                {products.map((product) => (
                    <Grid key = {product._id} item xs={12} sm={6} md={6} >
                        <Contents product={product} setCurrentId = {setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Menu;