import Game from "../game/Game";
import Stats from "../stats/Stats";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <main className="wrapper">
      <Game />
      <Stats />
    </main>
  );
}
