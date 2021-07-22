import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const Item = ({product}) => {
    const classes = useStyles();
    console.log(product.selectedImage);
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={product.selectedImage} title={product.title} />
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>{}}> </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.contents}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{product.title}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() =>{}} > Delete </Button>
            </CardActions>
        </Card>
    );
}

export default Item;