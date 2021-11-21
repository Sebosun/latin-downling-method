import React, { useRef } from "react";
import Question from "./Question";

export default function Game() {
  const ref = useRef<HTMLInputElement | null>(null);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current) throw new Error("Ref is empty");
    console.log(ref.current.value);
    ref.current.value = "";
  };
  return (
    <>
      <Question />

      <form onSubmit={submitForm} className="flex flex-col">
        <input
          className="p-3 mt-4 mb-6 text-gray-600 border-2 border-black rounded-md focus-within:border-gray-200"
          maxLength={20}
          ref={ref}
          type="text"
        />
        <button
          type="submit"
          className="p-2 my-6 rounded-md text-2xl border-2 border-black border-solid"
        >
          Check
        </button>
      </form>
    </>
  );
}
