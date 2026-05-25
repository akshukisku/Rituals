import { createSlice } from "@reduxjs/toolkit";
import type { ProductState } from "../../typescript/interface/product.interface";

const initialState:ProductState = {
  isLoading: false,
  isError: null,
  products: [],

  dialog: {
    open: false,
    isSelectedproducts: null,
    isAddProductLoading: false,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDialogOpen:(state)=>{
      state.dialog.open=true;
      state.dialog.isSelectedproducts=null;
    },
    setDialogClose:(state)=>{
      state.dialog.open=false;
    }
  },
  extraReducers: () => {},
});

export const {setDialogClose,setDialogOpen} = productSlice.actions
export default productSlice.reducer;
