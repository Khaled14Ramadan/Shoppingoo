import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    totalCounter:0,
    cartList:[],
}

export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart :(state , action)=>{
            state.totalCounter = state.totalCounter+1;
            const product = action.payload;
            let index = -1;
            state.cartList.forEach((item , i)=>{
                if(product.id === item.id){
                    index = i;
                    item.counterBuy++;
                }
            });
            if(index === -1 ){
                state.cartList.push({...action.payload ,  counterBuy:1});
            }
        },

        removeFromCart :(state , action)=>{
            state.totalCounter = state.totalCounter-1;
            const product = action.payload;
            let index = -1;
            state.cartList.forEach((item , i)=>{
                if(product.id === item.id){
                    index = i;
                }
            });
            
            state.cartList[index].counterBuy--;
            
            if(state.cartList[index].counterBuy === 0){
                state.cartList.splice(index , 1);
            }
        },

        removeAllCart :(state , action)=>{
            const product = action.payload;
            state.totalCounter = state.totalCounter- product.counterBuy;
            let index = 0;
            state.cartList.forEach((item , i)=>{
                if(product.id === item.id){
                    index = i;
                }
            });
            state.cartList.splice(index , 1);

        }
    }
})

export const {addToCart, removeFromCart , removeAllCart} = cartSlice.actions;
