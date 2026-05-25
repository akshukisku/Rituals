import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice"
import productReducer from "./slices/product.slice"

export const Store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
    }
})