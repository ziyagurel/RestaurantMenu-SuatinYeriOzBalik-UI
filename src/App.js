import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Admin from './components/AdminPanel/Admin';
import Product from './components/Product/Product';

import fish from './images/main-fish.png';

const App = () => {


    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align= "center">Suat'ın Yeri Balık Restaurant</Typography>
                <img src={fish} alt="mycloud" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify ="space-between" alignItems="stretch" spacing={4}>
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