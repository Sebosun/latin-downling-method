import FetchData from "../../FetchData";
import Game from "../game/Game";
import Stats from "../stats/Stats";

export default function Main() {
  return (
    <main className="w-full bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4 max-w-xs lg:max-w-l">
      <Game />
      <Stats />
      <FetchData />
    </main>
  );
}
