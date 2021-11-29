import { createSlice } from "@reduxjs/toolkit";

interface statsTypes {
  success: number;
  error: number;
  perfect: number;
  sets: number;
}

const initialState: statsTypes = {
  success: 0,
  error: 0,
  perfect: 0,
  sets: 0, // on the user end its called Rounds. different name here not to confuse ourselves with two rounds variables
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
    addPerfect(state) {
      state.perfect++;
    },
    addSets(state) {
      state.sets++;
    },
  },
});

export const { addSuccess, addError, addPerfect, addSets } = statsSlice.actions;
export default statsSlice.reducer;
