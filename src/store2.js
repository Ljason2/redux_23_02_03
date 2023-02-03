import { configureStore, createSlice } from "@reduxjs/toolkit";




let counter = createSlice(
    {
        name: 'counter',
        initialState: 'Park',
        reducers:{
            changeCounter(state){
            return  state +"AAA";
            }
        }
    }
)
// actions 정해진 속성
export let {changeCounter} = counter.actions ;



let cart =createSlice(
    {
        name:'cart',
        initialState:[
            {
                id:0,name:'people1'
            },
            {
                id:1,name:'people2'
            },
            {
                id:2,name:'people3'
            },
            {
                id:3,name:'people4'
            },
        ]
    }
)




export default configureStore(
    {
        reducer:{
            counter:counter.reducer,
            cart:cart.reducer
        }
    }
)