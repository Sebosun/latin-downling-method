import React, { ReactElement } from "react";
import GameOptions from "../game/options/GameOptions";

export default function Options(): ReactElement | null {
  return (
    <main className="min-w-full wrapper">
      <GameOptions />
    </main>
  );
}
