import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles';

const Board = () => {
    const classes = useStyles();
    return(
        <Grid>
            <div className={classes.div}>
                <button type="button" className="btn btn-lg btn-block center" style={{width: "75%", backgroundColor: 'rgba(250, 235, 215)'}}>Balıklar</button>
            </div>
            &nbsp;
            <div className={classes.div}>
                <button type="button" className="btn btn-lg btn-block center" style={{width: "75%", backgroundColor: 'rgba(250, 235, 215)'}}>Salatalar</button>
            </div>
            &nbsp;
            <div className={classes.div}>
                <button type="button" className="btn btn-lg btn-block center" style={{width: "75%", backgroundColor: 'rgba(250, 235, 215)'}}>Mezeler</button>
            </div>
            &nbsp;
            <div className={classes.div}>
                <button type="button" className="btn btn-lg btn-block center" style={{width: "75%", backgroundColor: 'rgba(250, 235, 215)'}}>İçecekler</button>
            </div>
        </Grid>
    )
}

export default Board;