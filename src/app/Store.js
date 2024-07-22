import { configureStore } from "@reduxjs/toolkit";
import classReducer from "../slice/classSlice";


const store = configureStore({
    reducer: {
        classInfo: classReducer
    }
})

export default store;