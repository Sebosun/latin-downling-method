import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
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

export default function Options(): ReactElement | null {
  const parsed: NounsObject = conjugations;
  const keys: string[] = Object.keys(parsed.nouns);

  return (
    <main className="w-full max-h-96  bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4 max-w-xs lg:max-w-l">
      <div className="flex flex-col">
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
      <Link to="/"> Main </Link>
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
    return <li onClick={(e) => setAsCurrent(item)}>{item.word}</li>;
  });

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <button
        className=" border-b-2 border-sky-600 hover:bg-sky-400  my-2 p-1"
        onClick={handleShow}
      >
        {name}
      </button>
      {show && <ul className="mx-2">{mapped}</ul>}
    </>
  );
};
