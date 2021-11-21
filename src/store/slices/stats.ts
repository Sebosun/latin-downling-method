import { createSlice } from "@reduxjs/toolkit";

interface statsTypes {
  success: number;
  error: number;
}

const initialState: statsTypes = {
  success: 0,
  error: 0,
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
  },
});

export const { addSuccess, addError } = statsSlice.actions;
export default statsSlice.reducer;
