import { createSlice } from "@reduxjs/toolkit";

interface statsTypes {
  success: number;
  error: number;
  complete: number;
}

const initialState: statsTypes = {
  success: 0,
  error: 0,
  complete: 0,
};

const statsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addSuccess(state) {
      state.success++;
    },
    addError(state) {
      state.error++;
    },
    addComplete(state) {
      state.complete++;
    },
  },
});

export const { addSuccess, addError, addComplete } = statsSlice.actions;
export default statsSlice.reducer;
