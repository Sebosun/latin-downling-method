import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  currentWord: any;
  wordQueue: [];
}

const initialState: initialState = {
  currentWord: {
    word: "",
    type: "",
    declension: "",
    conjugation: {
      singular: {
        nominative: "",
        genetive: "",
        dative: "",
        accusative: "",
        ablative: "",
      },
      plural: {
        nominative: "",
        genetive: "",
        dative: "",
        accusative: "",
        ablative: "",
      },
    },
  },
  wordQueue: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeWord(state, action) {
      state.currentWord = action.payload;
    },
  },
});

export const { changeWord } = gameSlice.actions;
export default gameSlice.reducer;
