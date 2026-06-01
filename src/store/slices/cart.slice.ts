import { createSlice } from "@reduxjs/toolkit";
import type { CartState } from "../../typescript/interface/cart.interface";

const initialState: CartState = {
  cartItem: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );

      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.cartItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
    },
    increase: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrease: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
  extraReducers: () => {},
});

export const { addItem, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
