import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/stats";

const store = configureStore({
  reducer: {
    stats: settingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
