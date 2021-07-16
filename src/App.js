import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getProducts} from './actions/porducts';

import Admin from './components/AdminPanel/Admin';
import Product from './components/Product/Product';

import fish from './images/main-fish.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [getProducts]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align= "center">Suat'ın Yeri Balık Restaurant</Typography>
                <img className={classes.image} src={fish} alt="mycloud" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container justify ="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Product/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Admin/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;