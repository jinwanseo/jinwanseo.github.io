import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InfoSlice {
  theme: String;
}

const initialState: InfoSlice = {
  theme: localStorage.getItem("theme") ?? "light",
};

export const infoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<String>) => {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = infoSlice.actions;

export default infoSlice.reducer;
