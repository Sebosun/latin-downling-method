import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addError, addSuccess, addComplete } from "../../store/slices/stats";
import { ConjugationTypes } from "../pages/Options";
import SpecialCharacters from "../wrappers/SpecialCharacters";
import Question from "./Question";

export default function Game() {
  const [textInput, setTextInput] = useState("");

  // TODO settings somewhere to:
  // disable space to show the answer (change text then maybe)
  // being more forgvigin wiht the ī ō etc.

  const data = useAppSelector((state) => state.game.currentWord);
  const dispatch = useAppDispatch();

  const [round, setRound] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const [noErrorsMade, setNoErrorsMade] = useState(true);
  const [answer, setAnswer] = useState({ case: "", answer: "", number: "" });
  const [showAnswer, setShowAnswer] = useState(false);

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
      noErrorsMade && dispatch(addComplete());
      setRound(0);
      setNoErrorsMade(true);
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
          autoFocus
          maxLength={25}
          value={textInput}
          onChange={onTextChange}
          type="text"
          ref={ref}
        />
        <SpecialCharacters addInput={addInput} />
        <button
          type="submit"
          className="p-2 my-6 text-2xl border-2 border-black border-solid rounded-md"
        >
          Check
        </button>
      </form>
    </>
  );
}
