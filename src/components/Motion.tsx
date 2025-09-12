'use client';

import { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "motion/react";

export default function Motion({ children, ...props }: PropsWithChildren<HTMLMotionProps<'div'>>) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
}
