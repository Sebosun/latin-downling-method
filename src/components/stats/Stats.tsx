import { useAppSelector } from "../../store/hooks";

export default function Stats() {
  const { success, error, perfect, sets } = useAppSelector(
    (state) => state.stats
  );
  // TODO if full set is done without errors note that too
  return (
    <div className="flex text-2xl gap-4 flex-col">
      <div className="flex text-2xl justify-around">
        <div className="flex justify-start gap-4">
          <p>Correct:</p>
          <p className="text-green-500">{success}</p>
        </div>
        <div className="flex justify-start gap-4">
          <p>Errors:</p>
          <p className="text-red-500">{error}</p>
        </div>
      </div>

      <div className="flex justify-around gap-4">
        <div className="flex justify-start gap-4">
          <p>Perfect: </p>
          <p>{perfect}</p>
        </div>

        <div className="flex justify-start gap-4">
          <p>Rounds</p>
          <p>{sets}</p>
        </div>
      </div>
    </div>
  );
}
