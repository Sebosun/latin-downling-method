import React, { ReactElement, useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { changeWord } from "./store/slices/game";

const nouns: any = {
  first: [
    {
      word: "rose",
      type: "noun",
      declension: "first",
      gender: "femine",
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
    {
      word: "girl",
      type: "noun",
      declension: "first",
      gender: "feminie",
      conjugation: {
        singular: {
          nominative: "puella",
          genetive: "puellae",
          dative: "puellae",
          accusative: "puellam",
          ablative: "puellā",
        },
        plural: {
          nominative: "puellae",
          genetive: "puellārum",
          dative: "puellīs",
          accusative: "puellās",
          ablative: "puellīs",
        },
      },
    },
  ],
  third: [
    {
      word: "sheep",
      type: "noun",
      declension: "third",
      gender: "feminine",
      conjugation: {
        singular: {
          nominative: "ovis",
          genetive: "ovis",
          dative: "ovī",
          accusative: "ovem",
          ablative: "ove",
        },
        plural: {
          nominative: "ovēs",
          genetive: "ovium",
          dative: "ovibus",
          accusative: "ovīs/ovēs",
          ablative: "ovibus",
        },
      },
    },
  ],
};

export default function FetchData(): ReactElement | null {
  const dispatch = useAppDispatch();

  const getRandomNoun = () => {
    const keys = Object.keys(nouns);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    const randomDeclension = nouns[randomKey];
    const randomNounLenght = Math.floor(
      Math.random() * randomDeclension.length
    );
    const randomNoun = randomDeclension[randomNounLenght];

    dispatch(changeWord(randomNoun));
  };

  useEffect(() => {
    getRandomNoun();
  }, []);
  return null;
}
