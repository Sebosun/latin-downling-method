import FetchData from "../../FetchData";
import Game from "../game/Game";
import Stats from "../stats/Stats";

export default function Main() {
  return (
    <main className="w-full max-w-xs lg:max-w-l">
      <Game />
      <Stats />
      <FetchData />
    </main>
  );
}
