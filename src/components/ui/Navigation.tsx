import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Navigation(): ReactElement | null {
  return (
    <nav className=" flex justify-around  text-2xl  ">
      <Link
        className="border-transparent border-b-2 hover:border-sky-800 p-8 "
        to="/"
      >
        Main
      </Link>
      <Link
        className="border-transparent border-b-2 hover:border-sky-800 p-8 "
        to="/options"
      >
        Options
      </Link>
      <Link
        className="border-transparent border-b-2 hover:border-sky-800 p-8 "
        to="/about"
      >
        About
      </Link>
    </nav>
  );
}
