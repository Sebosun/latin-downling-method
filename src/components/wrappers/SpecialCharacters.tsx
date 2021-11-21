import React, { ReactElement } from "react";

interface SpecialCharactersTypes {
  addInput: (char: "ā" | "ē" | "ī" | "ō") => void;
}

export default function SpecialCharacters({
  addInput,
}: SpecialCharactersTypes): ReactElement | null {
  return (
    <div className="flex flex-wrap  justify-between ">
      <button
        type="button"
        className="text-xl border-2 rounded-xl w-12 hover:bg-sky-300 border-black p-1"
        onClick={() => addInput("ā")}
      >
        ā
      </button>
      <button
        type="button"
        className="text-xl border-2 rounded-xl w-12 hover:bg-sky-300 border-black p-1"
        onClick={() => addInput("ē")}
      >
        ē
      </button>
      <button
        type="button"
        className="text-xl border-2 rounded-xl w-12 hover:bg-sky-300 border-black p-1"
        onClick={() => addInput("ī")}
      >
        ī
      </button>
      <button
        type="button"
        className="text-xl border-2 rounded-xl w-12 hover:bg-sky-300 border-black p-1"
        onClick={() => addInput("ō")}
      >
        ō
      </button>
    </div>
  );
}
