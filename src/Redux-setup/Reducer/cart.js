import {ADD_TO_CART, UPDATE_CART_ITEM, DELETE_ITEM, RESET_CART} from '../../constants/action-type';

const initialState = {
    items: [],

}

export default function cartReducer(state=initialState , action){
    switch(action.type){
        case ADD_TO_CART:
            const product = action.payload;
            const cart = state.items;

            let check =false;
            cart.map((item)=>{
                if(product.id === item.id){
                    item.qty += product.qty;
                    check = true;
                }
                return item;
            });
            if(!check){
                cart.push(product);
            }
            return {...state, items: cart};
        case UPDATE_CART_ITEM:
            const {id, qty} = action.payload;
            const cartUpdate = state.items.map((item)=>{
                if(item.id === id){
                    item.qty = qty;
                }
                return item;
            })
            return {...state, items: cartUpdate};
        case DELETE_ITEM:
            // const {id} = action.payload;
            const cartDelUpdate = state.items.filter((item) => item.id !== action.payload.id )
            return {...state, items: cartDelUpdate};
        case RESET_CART:
            return {...state, items: []};
        default:
            return state;
    }

};