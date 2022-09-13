import { createSlice } from "@reduxjs/toolkit";

const globleSlice = createSlice({
  name: "globle",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
  },
});

export const { toggleDarkMode } = globleSlice.actions;
export default globleSlice.reducer;
