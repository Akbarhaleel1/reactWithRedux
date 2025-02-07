import {createSlice} from '@reduxjs/toolkit';


const INITIALSTATE = {
    count:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState:INITIALSTATE,
    reducers:{
        increment: (state) =>{
            state.count +=1
        },
        decrement: (state) =>{
            state.count -=1
        },
        reset:(state) =>{
            state.count = 0
        },
        incrementByAmount: (state,actions)=>{
            state.count += actions.payload;
        }
    }
})


export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer