import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice"


export const Store = configureStore({
    reducer:{
        auth:authReducer
    }
})