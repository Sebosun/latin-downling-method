import React, { useEffect, useRef, useState } from "react";
import Question from "./Question";
const nouns: any = {
  first: [
    {
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
    {
      word: "girl",
      type: "noun",
      declension: "first",
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
};

export default function Game() {
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState(nouns.first[0]);
  const [round, setRound] = useState(9);
  // const [number, setNumber] = useState("singular");
  const [answer, setAnswer] = useState({ case: "", answer: "" });

  useEffect(() => {
    // runs on new rounds
    // some function to calculate number of rounds later
    // if then rounds end load another word/restart
    if (round >= 10) {
      const currentCase = Object.keys(data.conjugation.singular)[0];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer });
      setRound(0);
      console.log("round 12", currentCase, answer);
    } else if (round >= 5) {
      const currentCase = Object.keys(data.conjugation.plural)[round - 5];
      const answer = data.conjugation.plural[currentCase];
      setAnswer({ case: currentCase, answer: answer });
      console.log(currentCase, answer);
    } else {
      // key for the current round
      console.log(round);
      const currentCase = Object.keys(data.conjugation.singular)[round];
      const answer = data.conjugation.singular[currentCase];
      setAnswer({ case: currentCase, answer: answer });
      console.log(currentCase, answer);
    }
  }, [round]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput === answer.answer) {
      console.log("Add Score");
      setRound((prev) => prev + 1);
    }
    setTextInput("");
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
      <Question />

      <form onSubmit={submitForm} className="flex flex-col">
        <input
          className="p-3 mt-4 mb-6 text-gray-600 border-2 border-black rounded-md focus-within:border-gray-200"
          maxLength={25}
          value={textInput}
          onChange={onTextChange}
          type="text"
        />

        <button type="button" onClick={() => addInput("ā")}>
          ā
        </button>
        <button type="button" onClick={() => addInput("ē")}>
          ē
        </button>
        <button type="button" onClick={() => addInput("ī")}>
          ī
        </button>
        <button type="button" onClick={() => addInput("ō")}>
          ō
        </button>
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
