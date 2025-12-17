"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
// Thunk
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { product, quantity, userEmail, weigth, ingredient, skinType },
    thunkApi
  ) => {
    try {
      const res = await axios.post("/api/create-cart", {
        userEmail,
        productId: product.id,
        title: product.title,
        price: product.newPrice,
        image: product.image,
        quantity: quantity || 1,
        weigth: weigth,
        ingredient: ingredient,
        skinType: skinType,
      });
      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product Added to Cart",
          showConfirmButton: false,
          timer: 1500,
        });
        thunkApi.dispatch(getUserCartItems({ userEmail }));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || "Faild to Add Product to Cart"
      );
    }
  }
);

export const getUserCartItems = createAsyncThunk(
  "cart/getUserCartItems",
  async ({ userEmail }, thunkApi) => {
    try {
      const res = await axios.get(
        `/api/get-user-cartItems?userEmail=${userEmail}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || "Faild to Get User Cart Items"
      );
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async ({ userEmail }, thunkApi) => {
    try {
      const res = await axios.delete(`/api/clear-cart?userEmail=${userEmail}`);
      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Cart is Empty",
          showConfirmButton: false,
          timer: 1500,
        });
        thunkApi.dispatch(getUserCartItems({ userEmail }));
      }
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || "Faild to Get User Cart Items"
      );
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async ({ cartItemId, userEmail }, thunkApi) => {
    try {
      const res = await axios.delete(
        `/api/delete-item-from-cart?cartItemId=${cartItemId}`
      );
      if (res.status === 200) {
        return thunkApi.dispatch(getUserCartItems({ userEmail }));
      }
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || "Faild to delete item from cart"
      );
    }
  }
);

// total price function

const calcTotalPrice = (items) => {
  return items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
};
// Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
    totalPrice: 0,
  },
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      // add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.totalPrice = calcTotalPrice(state.items);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get user cart items
      .addCase(getUserCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalPrice = calcTotalPrice(state.items);
      })
      .addCase(getUserCartItems.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      // after delete
      .addCase(deleteFromCart.fulfilled, (state) => {
        state.totalPrice = calcTotalPrice(state.items);
      })
      // after clear cart
      .addCase(clearCart.fulfilled, (state) => {
        state.totalPrice = 0;
      });
  },
});

export default cartSlice.reducer;
