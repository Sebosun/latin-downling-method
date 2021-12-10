import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface MotionTypes {
  children: JSX.Element | JSX.Element[];
}

export default function MotionMain({
  children,
}: MotionTypes): ReactElement | null {
  return (
    <motion.main
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="wrapper"
    >
      {children}
    </motion.main>
  );
}
