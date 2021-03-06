import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addError,
  addSuccess,
  addPerfect,
  addSets,
} from "../../store/slices/stats";

import { ConjugationTypes } from "./options/GameOptions";
import SpecialCharacters from "../wrappers/SpecialCharacters";
import Question from "./Question";
import { motion } from "framer-motion";

export default function Game() {
  // TODO settings somewhere to:
  // disable space to show the answer (change text then maybe)
  // being more forgvigin wiht the ī ō etc.
  const [textInput, setTextInput] = useState("");
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState({ case: "", answer: "", number: "" });
  const [showAnswer, setShowAnswer] = useState(false);
  const [noErrorsMade, setNoErrorsMade] = useState(true);

  const ref = useRef<HTMLInputElement | null>(null);

  const data = useAppSelector((state) => state.game.currentWord);
  const dispatch = useAppDispatch();
  // runs on new rounds
  // some function to calculate number of rounds later
  // if then rounds end load another word/restart
  useEffect(() => {
    console.log(round, answer);
    if (round >= 10) {
      const currentCase = Object.keys(data.conjugations.singular)[0];
      const answer =
        data.conjugations.singular[currentCase as keyof ConjugationTypes];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
      roundEndHandler();
      setRound(0);
    } else if (round >= 5) {
      const currentCase = Object.keys(data.conjugations.plural)[round - 5];
      const answer =
        data.conjugations.plural[currentCase as keyof ConjugationTypes];
      setAnswer({ case: currentCase, answer: answer, number: "plural" });
    } else {
      const currentCase = Object.keys(data.conjugations.singular)[round];
      const answer =
        data.conjugations.singular[currentCase as keyof ConjugationTypes];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
    }
  }, [round, data]);

  // handles non-game-logic related states at the end of the round
  const roundEndHandler = () => {
    noErrorsMade && dispatch(addPerfect());
    dispatch(addSets());
    setNoErrorsMade(true);
  };

  const submitLogic = () => {
    // if the answer was correct
    ref.current && ref.current.focus();
    if (textInput.trim() === answer.answer.trim()) {
      // if we failed/revealed an answer already
      if (showAnswer) {
        setRound((prev) => prev + 1);
        setShowAnswer(false);
        // if the answer was correct
      } else {
        setRound((prev) => prev + 1);
        dispatch(addSuccess());
        setShowAnswer(false);
      }
      //if we fail / click to reveal an answer
    } else {
      setShowAnswer(true);
      setNoErrorsMade(false);
      dispatch(addError());
    }

    setTextInput("");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitLogic();
  };

  // runs on spacebar clicks
  const handleShowAnswer = () => {
    submitLogic();
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const addInput = (char: "ā" | "ē" | "ī" | "ō" | "ū") => {
    // error checking on max lenght but rn its whatever
    setTextInput((prev) => prev.concat(char));
    ref.current && ref.current.focus();
  };

  return (
    <motion.div
      initial={showAnswer && { opacity: 1 }}
      animate={
        showAnswer
          ? {
              x: [-10, 10, -10, 10, 0],
              y: [-1, 1, -1, 1, 0],
              opacity: 1,
              borderColor: "red",
            }
          : {
              x: 0,
              opacity: 1,
            }
      }
      transition={{ duration: 0.2 }}
    >
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
          className="p-3 mt-4 mb-6 text-2xl text-center text-gray-600 border-2 border-black rounded-md focus-within:border-gray-200"
          autoFocus
          maxLength={25}
          value={textInput}
          onChange={onTextChange}
          type="text"
          ref={ref}
        />
        <SpecialCharacters addInput={addInput} />
        <motion.button
          type="submit"
          className={`${
            showAnswer && "border-red-500 text-red-500"
          } p-2 my-6 text-2xl border-2 border-black border-solid rounded-md`}
        >
          Check
        </motion.button>
      </form>
    </motion.div>
  );
}
