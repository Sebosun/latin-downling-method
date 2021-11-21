import useKeypress from "react-use-keypress";

export default function Question(props) {
  useKeypress(" ", () => {
    console.log("Space pressed");
  });

  return (
    <div className="text-3xl grid items-center grid-rows-3">
      <p className="text-center capitalize">
        {props.number} {props.case}
      </p>

      <p className=" text-center">
        of <span className="capitalize">{props.word}</span>
      </p>
      <p className="tet-gray-400">Use space to show answer</p>
    </div>
  );
}
