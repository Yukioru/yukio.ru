import clsx from "clsx";
import { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "~/lib/i18n/navigation";

type IconLinkProps<RouteType> = LinkProps<RouteType> & HTMLProps<HTMLAnchorElement> & {
  locale?: string;
}

export default function IconLink<RouteType>({ className, children, ...props }: IconLinkProps<RouteType>) {
  return (
    <Link
      {...props}
      className={twMerge(clsx([
        'flex items-center justify-center p-2 text-[1.1rem] w-10 h-10',
        'rounded-xl cursor-pointer transition-colors',
        'bg-transparent text-zinc-600 hover:bg-zinc-200/50',
      ], className))}
    >
      {children}
    </Link>
  );
}