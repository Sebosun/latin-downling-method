import { ReactElement, useState } from "react";
import conjugations from "../../conjugations.json";
import { useAppDispatch } from "../../store/hooks";
import { changeWord } from "../../store/slices/game";

export interface NounsObject {
  nouns: {
    first?: NounTypes[];
    second?: NounTypes[];
    third?: NounTypes[];
    fourth?: NounTypes[];
    fifth?: NounTypes[];
  };
}

export interface NounTypes {
  word: string;
  gender: string;
  conjugations: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
}

export interface ConjugationTypes {
  nominative: string;
  genetive: string;
  dative: string;
  accusative: string;
  ablative: string;
}

export interface PronounsObject {
  demonstratives: Pronoun[];
  interrogatives: Pronoun[];
}

export interface Pronoun {
  name: string;
  masculine: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
  feminine: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
  neuter: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
}

export default function Options(): ReactElement | null {
  const parsed: NounsObject = conjugations;
  const keys: string[] = Object.keys(parsed.nouns);

  console.log(parsed, keys);
  return (
    <main className="w-full   max-h-96 overflow-y-auto bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4">
      <div className="lg:flex  gap-5 text-2xl justify-center">
        {keys.map((item) => {
          return (
            <ul>
              <li>
                <DisplayMore
                  name={item}
                  item={parsed.nouns[item as keyof NounsObject["nouns"]]}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </main>
  );
}
interface DisplayTypes {
  name: string;
  item: NounTypes[] | undefined;
}
const DisplayMore = ({ name, item }: DisplayTypes): ReactElement => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const setAsCurrent = (item: NounTypes) => {
    console.log(item);
    dispatch(changeWord(item));
  };

  const mapped = item?.map((item) => {
    return (
      <li
        role="button"
        className="hover:border-sky-500 border-t-2 border-b-2  border-transparent"
        onClick={() => setAsCurrent(item)}
      >
        {item.word}
      </li>
    );
  });

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  console.log(name);
  return (
    <>
      <button
        className="border-b-2 border-sky-600 hover:bg-sky-400 my-2 p-1"
        onClick={handleShow}
      >
        {name}
      </button>
      {show && <ul className="text-xl  lg:text-center">{mapped}</ul>}
    </>
  );
};
