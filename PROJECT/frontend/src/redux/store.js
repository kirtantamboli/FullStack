//note step 1
import { configureStore } from "@reduxjs/toolkit";

import  {countReducer}  from "./counterSlice.js";
console.log(countReducer);

const store =configureStore({
    reducer :{
        counter : countReducer
    }
})

export const reducer = counterSlice.reducer;