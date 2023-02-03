import { configureStore} from "@reduxjs/toolkit";


import num from "./redux/num"



export default configureStore({
    reducer:{
        num:num.reducer
    }
})