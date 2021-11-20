export default function Stats() {
  return (
    <div className="flex text-2xl justify-around">
      <div className="flex justify-start gap-4">
        <p>Correct:</p>
        <p className="text-green-300">{2}</p>
      </div>

      <div className="flex justify-start gap-4">
        <p>Errors:</p>
        <p className="text-red-500">{0}</p>
      </div>
    </div>
  );
}
