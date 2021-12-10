import Game from "../game/Game";
import Stats from "../stats/Stats";
import MotionMain from "../ui/MotionMain";

export default function Main() {
  return (
    <MotionMain>
      <Game />
      <Stats />
    </MotionMain>
  );
}
