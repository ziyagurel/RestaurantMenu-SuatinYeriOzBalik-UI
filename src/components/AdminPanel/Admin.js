import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper, Checkbox, FormControlLabel } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createProduct } from '../../actions/porducts.js';

const Admin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({ title: '', contents:'', price: '', selectedImage: '', isShow: true,  });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProduct(productData));
    }

    const clear = () => {
        setProductData({title: '', contents:'', price: '', selectedImage: '', isShow: false})
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Menü Ekle </Typography>
                <TextField name ="title" variant ="outlined" label = "Ürün Adı" fullWidth value = {productData.title} onChange = {(e) => setProductData({ ... productData, title: e.target.value})} />
                <TextField name ="contents" variant ="outlined" label = "Açıklaması" fullWidth value = {productData.contents} onChange = {(e) => setProductData({ ... productData, contents: e.target.value})} />
                <TextField name ="price" variant ="outlined" label = "Tags" fullWidth value = {productData.price} onChange = {(e) => setProductData({ ... productData, price: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase type = "file" multiple = {false} onDone = {({base64}) => setProductData({ ... productData, selectedImage: base64})}/>
                </div>
                <FormControlLabel control={<Checkbox checked={productData.isShow} onChange={(e) => setProductData({ ... productData, isShow: e.target.checked})} name="antoine" />} label="Göster/Gizle"/>
                <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Gönder</Button>
                <Button variant = "contained" color = "secondary" size = "small" onClick = {clear} fullWidth>Temizle</Button>
            </form>
        </Paper>
    );
}

export default Admin;