import React, { ReactElement } from "react";
import Game from "../game/Game";
import Stats from "../stats/Stats";

export default function Main(): ReactElement | null {
  return (
    <main className="w-full max-w-xs lg:max-w-l">
      <Game />
      <Stats />
    </main>
  );
}
