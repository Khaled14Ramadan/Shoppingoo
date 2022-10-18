import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    counter:0
}


export const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers: {
        updateCount :(state , action)=>{
            state.counter = state.counter + action.payload;
        }
    }
})



export const {updateCount} = counterSlice.actions;
