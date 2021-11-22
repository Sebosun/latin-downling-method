import { createSlice } from "@reduxjs/toolkit";

interface initialState {}

const initialState = {
  currentWord: {
    word: "rose",
    type: "noun",
    declension: "first",
    conjugation: {
      singular: {
        nominative: "rosa",
        genetive: "rosae",
        dative: "rosae",
        accusative: "rosam",
        ablative: "rosā",
      },
      plural: {
        nominative: "rosae",
        genetive: "rosārum",
        dative: "rosīs",
        accusative: "rosās",
        ablative: "rosīs",
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
