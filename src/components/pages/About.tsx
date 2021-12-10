import React, { ReactElement } from "react";
import MotionMain from "../ui/MotionMain";

export default function About(): ReactElement | null {
  return (
    <MotionMain>
      <p className="text-xl text-justify">
        You can read more about the Downling method{" "}
        <span>
          <a
            className="text-sky-300"
            href="https://www.wcdrutgers.net/Latin.htm"
          >
            here
          </a>
        </span>
        (it's an ancient site, not really suit for mobile)
      </p>
    </MotionMain>
  );
}
