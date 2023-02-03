import { configureStore, createSlice } from "@reduxjs/toolkit";



let user = createSlice({
name:'user',
initialState:'Park',
reducers:{
    changeName(state,a){
        return  a.payload+state;
    }
}
})


export let {changeName} =user.actions;


export default configureStore(
    {
        reducer: {
            user:user.reducer
        }
    }
)