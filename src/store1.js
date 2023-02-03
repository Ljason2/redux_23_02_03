// createSlice, configureStore

import { configureStore , createSlice } from "@reduxjs/toolkit";


// state를 생성해주는 역할
let user = createSlice({
    name : 'user',
    initialState: 'Kim',
    
}
)



// state를 등록해주는 역할
export default configureStore({
    reducer:{
        user:user.reducer
    }
})