import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import fish from '../../../images/main-fish.png';

import useStyles from './styles';

const Item = ({product}) => {
    const classes = useStyles();
    console.log(product.selectedImage);
    var visibilityState = product.isShow ? "" : "Mevcut değil";
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={product.selectedImage || fish} title={product.title} />
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>{}}><MoreHorizIcon fontSize="default"/> </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.contents}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{product.title}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() =>{}} ><DeleteIcon fontSize="small"/> Delete </Button>
                <Typography className={classes.title} variant="h7" gutterBottom >{visibilityState}</Typography>
            </CardActions>
        </Card>
    );
}

export default Item;