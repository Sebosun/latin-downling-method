import Game from "../game/Game";
import Stats from "../stats/Stats";

export default function Main() {
  return (
    <main className="bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4 lg:p-10">
      <Game />
      <Stats />
    </main>
  );
}
