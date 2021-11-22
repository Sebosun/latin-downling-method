import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/stats";
import gameReducer from "./slices/game";

const store = configureStore({
  reducer: {
    stats: settingsReducer,
    game: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
