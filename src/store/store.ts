import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import productReducer from "./slices/product.slice";
import cartReducer from "./slices/cart.slice";
import wishlistReducer from "./slices/wishlist.slice";
import categoryReducer from "./slices/category.slice"

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root-todos",
  version: 1,
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const Store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});


export const persistor = persistStore(Store)