import Card from "~/components/Card";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Link } from "~/lib/i18n/navigation";
import Icon from "~/components/Icon";

export const experimental_ppr = true;

export default function AdditionLayout({ children }: PropsWithChildren) {
  return (
    <Card
      className={clsx([
        'flex flex-col gap-10 relative',
        'max-w-96 lg:max-w-80',
        'pt-6 -mt-6 lg:pt-0 lg:mt-0 lg:pl-6 lg:-ml-6 -z-10',
        'rounded-t-none lg:rounded-t-3xl lg:rounded-l-none addition-shadow'
      ])}
    >
      <Link href="/" className="absolute right-0 top-6 lg:top-0 p-4 w-6 h-6 box-content flex items-center justify-center">
        <Icon name="icons:close" className="text-xl" />
      </Link>
      {children}
    </Card>
  );
}
