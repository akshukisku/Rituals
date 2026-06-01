import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  Category,
  CategoryPayLoad,
  CategoryState,
} from "../../typescript/interface/category.interface";
import {
  addCategoryFns,
  editCategoryfns,
  fetchCategoryListfns,
  deleteCategoryfns,
} from "../../api/function/category.function";

const initialState: CategoryState = {
  isLoading: false,
  isError: null,
  categories: [],
  imagePreview: null,
  dialog: {
    open: false,
    isSelectedCategory: null,
    isAddCategoryLoading: false,
    isDialogLoading: false,
  },
};

export const fetchCategoryList = createAsyncThunk(
  "/admin/listCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchCategoryListfns();
      return res.rows;
    } catch {
      return rejectWithValue("Failed to Fetch Category List");
    }
  },
);

export const addCategory = createAsyncThunk(
  "/admin/addCategory",
  async (data: CategoryPayLoad, { rejectWithValue }) => {
    try {
      const res = await addCategoryFns(data);
      return res;
    } catch {
      return rejectWithValue("Failed to Add Category");
    }
  },
);

export const editCategory = createAsyncThunk<
  Category,
  { id: string; data: CategoryPayLoad }
>("/admin/editCategory", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await editCategoryfns({ id, data });
    return response as unknown as Category;
  } catch {
    return rejectWithValue("Failed to Edit Category");
  }
});
export const deleteCategory = createAsyncThunk<string, string>(
  "/admin/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await deleteCategoryfns(id);
      return id;
    } catch {
      return rejectWithValue("Failed to Delete Category");
    }
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryDialogOpen: (state) => {
      state.dialog.open = true;
      state.dialog.isSelectedCategory = null;
      state.imagePreview = null;
    },
    setCategoryDialogClose: (state) => {
      state.dialog.open = false;
      state.dialog.isSelectedCategory = null;
      state.imagePreview = null;
    },
    setCategoryImagePreview: (state, action) => {
      state.imagePreview = action.payload;
    },
    closeCategoryImagePreview: (state) => {
      state.imagePreview = null;
    },
    setEditCategoryDialogOpen: (state, action) => {
      state.dialog.open = true;
      state.dialog.isSelectedCategory = action.payload;
      state.imagePreview = action.payload?.imageUrl ?? null;
    },
    setEditCategoryDialogClose: (state) => {
      state.dialog.isSelectedCategory = null;
      state.imagePreview = null;
    },
  },
  extraReducers: (builder) => {
    // ── Add Category ──────────────────────────────────────────────
    builder
      .addCase(addCategory.pending, (state) => {
        state.isError = null;
        state.dialog.isDialogLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.dialog.isDialogLoading = false;
        state.isError = null;
        state.categories.unshift(action.payload as unknown as Category);
        state.dialog.open = false;
        state.imagePreview = null;
        state.dialog.isSelectedCategory = null;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.dialog.isDialogLoading = false;
        state.isError = (action.payload as string) ?? "Failed to Add Category";
      });

    // ── Fetch Categories ─────────────────────────────────────────
    builder
      .addCase(fetchCategoryList.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.categories = action.payload as unknown as Category[];
      })
      .addCase(fetchCategoryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError =
          (action.payload as string) ?? "Failed to Fetch Category List";
      });

    // ── Edit Category ─────────────────────────────────────────────
    builder
      .addCase(editCategory.pending, (state) => {
        state.isError = null;
        state.dialog.isAddCategoryLoading = true;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.isError = null;
        state.dialog.isAddCategoryLoading = false;
        state.dialog.open = false;
        state.dialog.isSelectedCategory = null;
        state.imagePreview = null;

        state.categories = state.categories.map((item) =>
          item.$id === action.payload.$id
            ? (action.payload as unknown as Category)
            : item,
        );
      })
      .addCase(editCategory.rejected, (state, action) => {
        state.dialog.isAddCategoryLoading = false;
        state.isError = (action.payload as string) ?? "Failed to Edit Category";
      });
    builder
      .addCase(deleteCategory.pending, (state) => {
        state.isError = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isError = null;
        state.categories = state.categories.filter(
          (item) => item.$id !== action.payload,
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isError =
          (action.payload as string) ?? "Failed to Delete Category";
      });
  },
});

export const {
  setCategoryDialogClose,
  setCategoryDialogOpen,
  setCategoryImagePreview,
  closeCategoryImagePreview,
  setEditCategoryDialogOpen,
  setEditCategoryDialogClose,
} = categorySlice.actions;

export default categorySlice.reducer;
