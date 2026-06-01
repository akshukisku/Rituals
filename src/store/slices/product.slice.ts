import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  Product,
  ProductPayLoad,
  ProductState,
} from "../../typescript/interface/product.interface";
import {
  addProductFns,
  editProductfns,
  fetchProductListfns,
  deleteProductfns,
} from "../../api/function/product.function";
import { toast } from "sonner";

const initialState: ProductState = {
  isLoading: false,
  isError: null,
  products: [],
  imagePreview: null,
  dialog: {
    open: false,
    isSelectedproducts: null,
    isAddProductLoading: false,
    isDialogLoading: false,
  },
};

export const fetchProductList = createAsyncThunk(
  "/admin/listProd",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchProductListfns();
      return res.rows;
    } catch {
      const message = "Failed to Fetch Product List";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "/admin/addProd",
  async (data: ProductPayLoad, { rejectWithValue }) => {
    try {
      const res = await addProductFns(data);
      toast.success("Product has been added successfully");
      return res;
    } catch {
      const message = "Failed to Add Product";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const editProduct = createAsyncThunk<
  Product,
  { id: string; data: ProductPayLoad }
>("/admin/editProduct", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await editProductfns({ id, data });
    toast.success("Product updated successfully");
    return response as unknown as Product;
  } catch {
    const message = "Failed to Edit Product";
    toast.error(message);
    return rejectWithValue(message);
  }
});

export const deleteProduct = createAsyncThunk<
  string,
  { id: string; imageId?: string }
>("/admin/deleteProduct", async ({ id, imageId }, { rejectWithValue }) => {
  try {
    await deleteProductfns(id, imageId);
    toast.success("Product deleted successfully");
    return id;
  } catch {
    const message = "Failed to Delete Product";
    toast.error(message);
    return rejectWithValue(message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDialogOpen: (state) => {
      state.dialog.open = true;
      state.dialog.isSelectedproducts = null;
      state.imagePreview = null;
    },
    setDialogClose: (state) => {
      state.dialog.open = false;
      state.dialog.isSelectedproducts = null;
      state.imagePreview = null;
    },
    setImagePreview: (state, action) => {
      state.imagePreview = action.payload;
    },
    closeImagePreview: (state) => {
      state.imagePreview = null;
    },
    setEditDialogOpen: (state, action) => {
      state.dialog.open = true;
      state.dialog.isSelectedproducts = action.payload;
      state.imagePreview = action.payload?.images ?? null;
    },
    setEditDialogClose: (state) => {
      state.dialog.open = false;
      state.dialog.isSelectedproducts = null;
      state.imagePreview = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.dialog.isDialogLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.dialog.isDialogLoading = false;
        state.products.unshift(action.payload as unknown as Product);
        state.dialog.open = false;
        state.imagePreview = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.dialog.isDialogLoading = false;
        state.isError = (action.payload as string) ?? "Failed to Add Product";
      });

    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.products = action.payload as unknown as Product[];
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError =
          (action.payload as string) ?? "Failed to Fetch Product List";
      });

    builder
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.dialog.isAddProductLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.dialog.open = false;
        state.imagePreview = null;
        state.dialog.isAddProductLoading = false;
        state.dialog.isSelectedproducts = null;

        state.products = state.products.map((item) =>
          item.$id === action.payload.$id
            ? (action.payload as unknown as Product)
            : item
        );
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.dialog.isAddProductLoading = false;
        state.isError = (action.payload as string) ?? "Failed to Edit Product";
      });

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.products = state.products.filter(
          (item) => item.$id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError =
          (action.payload as string) ?? "Failed to Delete Product";
      });
  },
});

export const {
  setDialogClose,
  setDialogOpen,
  setImagePreview,
  closeImagePreview,
  setEditDialogOpen,
  setEditDialogClose,
} = productSlice.actions;

export default productSlice.reducer;