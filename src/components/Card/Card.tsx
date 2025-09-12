import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

function Card({ children, className, ...props }: Readonly<PropsWithChildren<HTMLProps<HTMLDivElement>>>) {
  return (
    <div className={clsx('bg-white border border-zinc-200/60 rounded-3xl', className)} {...props}>
      {children}
    </div>
  );
}

export default Card;
