import { useAppSelector } from "../../store/hooks";

export default function Stats() {
  const { success, error } = useAppSelector((state) => state.stats);
  return (
    <div className="flex text-2xl justify-around">
      <div className="flex justify-start gap-4">
        <p>Correct:</p>
        <p className="text-green-300">{success}</p>
      </div>

      <div className="flex justify-start gap-4">
        <p>Errors:</p>
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  );
}
