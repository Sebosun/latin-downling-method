import React, { useRef } from "react";
import Stats from "./components/stats/Stats";

const dummyData = {
  rose: {
    singular: {
      nominative: "rosa",
      genetive: "rosae",
      dative: "rosae",
      accusative: "rosam",
      ablative: "rosā",
    },
    plural: {
      nominative: "rosae",
      gentive: "rosārum",
      dative: "rosīs",
      accsative: "rosās",
      ablative: "rosīs",
    },
  },
};

function App() {
  // const ref = useRef<HTMLInputElement>(null);

  const ref = useRef<HTMLInputElement | null>(null);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current) throw new Error("Ref is empty");
    console.log(ref.current.value);
    ref.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center h-full  bg-gradient-to-r from-sky-600 to-sky-500 ">
      <main>
        <p className="text-center text-3xl">Singular Accusative</p>
        <p className="mb-4 mt-2 text-center text-3xl">of dōnum</p>

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
        <Stats />
      </main>
    </div>
  );
}

export default App;
