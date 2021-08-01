import React, {useState, useEffect} from 'react';
import {Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getProducts} from './actions/porducts';

import Admin from './components/AdminPanel/Admin';
import Product from './components/Product/Product';

import fish from './images/suatin_yeri_1080.png';
import fish_medium from './images/suatin_yeri_medium.png';
import fish_medium_deneme from './images/suatin_yeri_d.png';
import useStyles from './styles';
import Contents from './components/Menu/contents/Contents';
import Menu from './components/Menu/Menu';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [getProducts]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={fish_medium} alt="Suat'in Yeri" height="150" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container justifyContent ="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Menu setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Admin currentId = {currentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;