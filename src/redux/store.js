
import { configureStore } from "@reduxjs/toolkit";
import  {cartSlice } from './cartSlice';
import { counterSlice } from "./counterSlice";

// console.log(cartSlice.reducer);

export const store = configureStore({
    reducer :{
        cartList: cartSlice.reducer,
        counter: counterSlice.reducer,
    }
});