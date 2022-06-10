import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./ShopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
