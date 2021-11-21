import React, { ReactElement } from "react";

interface QuestionTypes {
  case: string;
  number: string;
  word: string;
  answer: string;
}

export default function Question(props: QuestionTypes) {
  return (
    <div className="text-3xl grid items-center grid-rows-3">
      <p className="text-center capitalize">
        {props.number} {props.case}
      </p>

      <p className=" text-center">
        of <span className="capitalize">{props.word}</span>
      </p>
    </div>
  );
}
