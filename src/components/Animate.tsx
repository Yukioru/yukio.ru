'use client';

import { PropsWithChildren } from "react";
import { AnimatePresence, AnimatePresenceProps } from "motion/react";

export default function Animate({ children, ...props }: PropsWithChildren<AnimatePresenceProps>) {
  return (
    <AnimatePresence {...props}>
      {children}
    </AnimatePresence>
  );
}
