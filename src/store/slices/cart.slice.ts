import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  CartItem,
  CartProduct,
  CartState,
} from "../../typescript/interface/cart.interface";
import {
  addToCartFns,
  getCartItemsFns,
  removeFromCartFns,
  updateCartQuantityFns,
} from "../../api/function/cart.function";
// import type { Product } from "../../typescript/interface/product.interface";

const initialState: CartState = {
  cartItem: [],
  loading: false,
  error: null,
};
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId: string) => {
    const response = await getCartItemsFns(userId);

    return response.rows.map((row: any) => ({
      $id: row.$id,
      userId: row.userId,
      productId: row.productId,
      name: row.productName, // ✅ FIX
      image: row.image,
      price: row.price,
      quantity: row.quantity,
    }));
  },
);
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, product }: { userId: string; product: CartProduct }) => {
    // ← use Product, not any
    const response = await addToCartFns({ userId, product });
    return response;
  },
);
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (cartId: string) => {
    await removeFromCartFns(cartId);

    return cartId;
  },
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ cartId, quantity }: { cartId: string; quantity: number }) => {
    await updateCartQuantityFns(cartId, quantity);
    return { cartId, quantity };
  },
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decrease: (state, action) => {
      const item = state.cartItem.find((item) => item.$id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    increase: (state, action) => {
      const item = state.cartItem.find((item) => item.$id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCart.fulfilled, (state, action) => {
        console.log("FETCH CART SUCCESS");
        state.loading = false;
        state.error = null; // ✅ IMPORTANT
        state.cartItem = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        console.log("FETCH CART ERROR:", action.error);
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const updated = action.payload as unknown as CartItem;
        const existingIndex = state.cartItem.findIndex(
          (item) => item.$id === updated.$id,
        );

        if (existingIndex !== -1) {
          // Item existed — update quantity in state
          state.cartItem[existingIndex] = updated;
        } else {
          // New item — push to cart
          state.cartItem.push(updated);
        }
      })

      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cartItem = state.cartItem.filter(
          (item) => item.$id !== action.payload,
        );
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const item = state.cartItem.find(
          (i) => i.$id === action.payload.cartId,
        );
        if (item) {
          item.quantity = action.payload.quantity;
        }
      });
  },
});

export const { increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
