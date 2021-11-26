import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addError, addSuccess } from "../../store/slices/stats";
import SpecialCharacters from "../wrappers/SpecialCharacters";
import Question from "./Question";
export default function Game() {
  const [textInput, setTextInput] = useState("");

  //any for now
  // const [data, setData] = useState<any>(currentWord);

  // TODO settings somewhere to:
  // disable space to show the answer (change text then maybe)
  // being more forgvigin wiht the ī ō etc.

  const data = useAppSelector((state) => state.game.currentWord);
  const dispatch = useAppDispatch();

  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState({ case: "", answer: "", number: "" });
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // runs on new rounds
    // some function to calculate number of rounds later
    // if then rounds end load another word/restart
    if (round >= 10) {
      const currentCase = Object.keys(data.conjugation.singular)[0];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
      setRound(0);
    } else if (round >= 5) {
      const currentCase = Object.keys(data.conjugation.plural)[round - 5];
      const answer = data.conjugation.plural[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "plural" });
    } else {
      // key for the current round
      console.log(round);
      const currentCase = Object.keys(data.conjugation.singular)[round];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer, number: "singular" });
    }
  }, [round, data]);

  const submitLogic = () => {
    if (textInput.trim() === answer.answer.trim()) {
      if (showAnswer) {
        setRound((prev) => prev + 1);
        setShowAnswer(false);
      } else {
        setRound((prev) => prev + 1);
        dispatch(addSuccess());
        setShowAnswer(false);
      }
    } else {
      setShowAnswer(true);
      dispatch(addError());
    }
    setTextInput("");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitLogic();
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleShowAnswer = () => {
    submitLogic();
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
          autoFocus
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
    </>
  );
}
