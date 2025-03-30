import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";  // Import searchSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,  // Add searchReducer to store
  },
});

export default store;
