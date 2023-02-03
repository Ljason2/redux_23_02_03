import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

let num =createSlice({
    name:"num",
    initialState:10,
    reducers:{
        changeNum(state,action){
           return  state += action.payload;
        }
    }
})

// 위에서 state는 num값 자체를 가리킨다.


export let {changeNum} =num.actions;

export default num;
