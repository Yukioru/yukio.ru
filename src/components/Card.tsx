import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

export default function Card({ children, className, ...props }: Readonly<PropsWithChildren<HTMLProps<HTMLDivElement>>>) {
  return (
    <div className={clsx('bg-white dark:bg-zinc-900 border border-zinc-200/75 rounded-3xl', className)} {...props}>
      {children}
    </div>
  );
}

