import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

export default (product = [], action ) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [... product, action.payload];
        case DELETE:
            return product.filter((post) => product._id != action.payload);
        default:
            return product;        
    }
}