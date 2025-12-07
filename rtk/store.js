"use client";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import { Provider } from "react-redux";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
