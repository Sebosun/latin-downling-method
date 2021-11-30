import { createSlice } from "@reduxjs/toolkit";
import { NounTypes } from "../../components/game/options/GameOptions";

interface initialState {
  currentWord: NounTypes;
  wordQueue: [];
}

const initialState: initialState = {
  currentWord: {
    word: "",
    gender: "",
    conjugations: {
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
