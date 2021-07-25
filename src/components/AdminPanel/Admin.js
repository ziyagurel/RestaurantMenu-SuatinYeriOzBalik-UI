import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper, Checkbox, FormControlLabel, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createProduct } from '../../actions/porducts.js';

const Admin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({ title: '', contents:'', price: '', selectedImage: '', category : '', isShow: true,  });
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
        console.log(event);
        if(event.target.value === 'Seçiniz'){
            
        } else{
            productData.category = event.target.value
        }
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const handleSubmit = (e) => {
        if(productData.title !== "" || productData.contents !== "" || productData.price !== "" || productData.category !== ""){
            e.preventDefault();
            dispatch(createProduct(productData));
        } else {}
        clear();
    }

    const clear = () => {
        setProductData({title: '', contents:'', price: '', selectedImage: '', isShow: true })
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Menü Ekle </Typography>
                <TextField name ="title" variant ="outlined" label = "Ürün Adı" fullWidth value = {productData.title} onChange = {(e) => setProductData({ ...productData, title: e.target.value})} />
                <TextField name ="contents" variant ="outlined" label = "Açıklaması" fullWidth value = {productData.contents} onChange = {(e) => setProductData({ ...productData, contents: e.target.value})} />
                <TextField name ="price" variant ="outlined" label = "Fiyat" fullWidth value = {productData.price} onChange = {(e) => setProductData({ ...productData, price: e.target.value})} />
                <FormControl className={classes.formControl}>
                    <InputLabel id="categoryLabelId">Kategori</InputLabel>
                        <Select className = {classes.select} labelId="categoryLabelId" id="categorySelectId" open={open} onClose={handleClose} onOpen={handleOpen} value={productData.category} onChange={handleChange}>
                            <MenuItem value=""> <em>Seçiniz</em> </MenuItem>
                            <MenuItem value={1}>Balıklar</MenuItem>
                            <MenuItem value={2}>Salatalar</MenuItem>
                            <MenuItem value={3}>Mezeler</MenuItem>
                            <MenuItem value={4}>İçecekler</MenuItem>
                        </Select>
                </FormControl>
                <div className={classes.fileInput}>
                    <FileBase type = "file" multiple = {false} onDone = {({base64}) => setProductData({ ...productData, selectedImage: base64})}/>
                </div>
                <FormControlLabel control={<Checkbox checked={productData.isShow} onChange={(e) => setProductData({ ...productData, isShow: e.target.checked})} name="antoine" />} label="Göster/Gizle"/>
                <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Gönder</Button>
                <Button variant = "contained" color = "secondary" size = "small" onClick = {clear} fullWidth>Temizle</Button>
            </form>
        </Paper>
    );
}

export default Admin; 