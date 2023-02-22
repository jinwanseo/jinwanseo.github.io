import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
