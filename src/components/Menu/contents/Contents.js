import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardMedia, Typography } from '@material-ui/core';

import useStyles from './styles';
import fish from '../../../images/main-fish.png';

const Contents = ({product}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    var visibilityState = product.isShow ? "" : "Mevcut değil";
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={product.selectedImage || fish} title={product.title} />
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.contents}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.price} ₺</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{product.title}</Typography>
            <CardActions className={classes.cardActions}>
                <Typography className={classes.title} variant="h6" gutterBottom >{visibilityState}</Typography>
            </CardActions>
        </Card>
    );
}

export default Contents;