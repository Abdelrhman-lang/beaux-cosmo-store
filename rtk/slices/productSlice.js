"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("/api/get-products");
    return res.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "/products/fetchSingleProduct",
  async (productId, thunkApi) => {
    try {
      const res = await axios.get(
        `/api/get-single-product?productId=${productId}`
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || "Faild To Fetch Product"
      );
    }
  }
);

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    singleProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      // All Product
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Faild to Fetch Products";
      })
      // Single Product
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
