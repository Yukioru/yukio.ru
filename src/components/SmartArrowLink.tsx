'use client';

import clsx from "clsx";
import { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { Link, usePathname } from "~/lib/i18n/navigation";
import Icon from "~/components/Icon";
import { twMerge } from "tailwind-merge";

type ArrowLinkProps<RouteType> = LinkProps<RouteType> & HTMLProps<HTMLAnchorElement> & {
  locale?: string;
}

export default function SmartArrowLink<RouteType>({ className, children, ...props }: ArrowLinkProps<RouteType>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={twMerge(clsx([
        'flex gap-4 py-3 px-4',
        'rounded-xl cursor-pointer transition-colors',
        'hover:bg-zinc-200/50',
      ], [
        pathname.startsWith(props.href.toString())
          ? 'bg-zinc-200/50 text-zinc-700'
          : 'bg-transparent text-zinc-600',
      ], className))}
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</div>
      <div className="flex ml-auto items-center">
        <Icon name="icons:arrow-right" className="text-lg" />
      </div>
    </Link>
  );
}
