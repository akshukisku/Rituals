import { createSlice } from "@reduxjs/toolkit";
import type { WishlistState } from "../../typescript/interface/wishlist.interface";

const initialState: WishlistState = {
  list: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWish: (state, action) => {
      const item = state.list.find((item) => item.$id === action.payload.$id);

      if (!item) {
        state.list.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.list = state.list.filter((item) => item.$id !== action.payload);
    },
  },
  extraReducers: () => {},
});

export const { addWish, removeWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
