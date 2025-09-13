import { PropsWithChildren } from "react";

export default function Tag({ children }: PropsWithChildren) {
  return (
    <span className="px-1.5 py-0.5 border font-light border-zinc-400 text-zinc-700 dark:text-zinc-300 dark:border-zinc-700 text-sm rounded-lg">
      {children}
    </span>
  );
}