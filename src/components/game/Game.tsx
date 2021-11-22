import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addError, addSuccess } from "../../store/slices/stats";
import { changeWord } from "../../store/slices/game";
import SpecialCharacters from "../wrappers/SpecialCharacters";
import Question from "./Question";

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

export default function Game() {
  const [textInput, setTextInput] = useState("");

  const { currentWord } = useAppSelector((state) => state.game);
  //any for now
  // const [data, setData] = useState<any>(currentWord);
  const data: any = currentWord;
  const [round, setRound] = useState(9);
  const [answer, setAnswer] = useState({ case: "", answer: "", number: "" });
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useAppDispatch();

  const handleShowAnswer = () => {
    // using space adds one space to the input, trimming it here
    setTextInput((prev) => prev.trim());
    setShowAnswer(true);
  };
  useEffect(() => {
    // runs on new rounds
    // some function to calculate number of rounds later
    // if then rounds end load another word/restart
    if (round >= 10) {
      const currentCase = Object.keys(data.conjugation.singular)[0];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
      setRound(0);
      console.log("round 12", currentCase, answer);
    } else if (round >= 5) {
      const currentCase = Object.keys(data.conjugation.plural)[round - 5];
      const answer = data.conjugation.plural[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "plural" });
      console.log(currentCase, answer);
    } else {
      // key for the current round
      console.log(round);
      const currentCase = Object.keys(data.conjugation.singular)[round];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
      console.log(currentCase, answer);
    }
  }, [round]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput.trim() === answer.answer && !showAnswer) {
      setRound((prev) => prev + 1);
      dispatch(addSuccess());
      setShowAnswer(false);
    } else {
      setRound((prev) => prev + 1);
      dispatch(addError());
      setShowAnswer(false);
    }
    setTextInput("");
  };

  const justDispatchItDoode = () => {
    dispatch(changeWord(nouns.third[0]));
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };
  const addInput = (char: "ā" | "ē" | "ī" | "ō") => {
    // error checking on max lenght but rn its whatever
    setTextInput((prev) => prev.concat(char));
  };

  return (
    <>
      <Question
        case={answer.case}
        number={answer.number}
        word={data.word}
        answer={answer.answer}
        showAnswer={showAnswer}
        handleShowAnswer={handleShowAnswer}
      />

      <form onSubmit={submitForm} className="flex flex-col">
        <input
          className="p-3 mt-4 mb-6 text-gray-600 border-2 border-black rounded-md focus-within:border-gray-200"
          maxLength={25}
          value={textInput}
          onChange={onTextChange}
          type="text"
        />

        <SpecialCharacters addInput={addInput} />
        <button
          type="submit"
          className="p-2 my-6 text-2xl border-2 border-black border-solid rounded-md"
        >
          Check
        </button>
      </form>
      <button onClick={justDispatchItDoode}>Here</button>
    </>
  );
}
