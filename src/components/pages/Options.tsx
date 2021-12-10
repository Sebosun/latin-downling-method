import { ReactElement } from "react";
import GameOptions from "../game/options/GameOptions";
import MotionMain from "../ui/MotionMain";

export default function Options(): ReactElement | null {
  return (
    <MotionMain>
      <GameOptions />
    </MotionMain>
  );
}
