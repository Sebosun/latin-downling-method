import React, { ReactElement } from "react";
import GameOptions from "../game/options/GameOptions";

export default function Options(): ReactElement | null {
  return (
    <main className="w-full max-h-96 overflow-y-auto bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4">
      <GameOptions />;
    </main>
  );
}
