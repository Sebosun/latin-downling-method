import useKeypress from "react-use-keypress";

export default function Question(props) {
  useKeypress(" ", () => {
    props.handleShowAnswer();
  });
  return (
    <div className="text-3xl grid items-center grid-rows-3">
      <p className="text-center capitalize">
        {props.number} {props.case}
      </p>

      <p className=" text-center">
        of <span className="capitalize">{props.word}</span>
      </p>
      {!props.showAnswer && (
        <p className="text-gray-600 text-xl text-center">
          Use space to show answer
        </p>
      )}
      {props.showAnswer && (
        <p className="text-red-600 text-xl text-center">{props.answer}</p>
      )}
    </div>
  );
}
