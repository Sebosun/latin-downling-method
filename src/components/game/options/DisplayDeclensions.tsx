import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { changeWord } from "../../../store/slices/game";
import { NounTypes } from "./GameOptions";

interface DisplayTypes {
  name: string;
  item: NounTypes[] | undefined;
}

export default function DisplayMore({ name, item }: DisplayTypes) {
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
}
