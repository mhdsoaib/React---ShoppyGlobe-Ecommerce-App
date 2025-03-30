import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchQuery: (state, action) => action.payload,
  },
});

export const { setSearchQuery } = searchSlice.actions;

export const selectSearchQuery = (state) => state.search;

export default searchSlice.reducer;
