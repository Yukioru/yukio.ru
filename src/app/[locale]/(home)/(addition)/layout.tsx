'use client';

import { PropsWithChildren, useRef } from "react";
import clsx from "clsx";
import { Link, useRouter } from "~/lib/i18n/navigation";
import Icon from "~/components/Icon";
import Motion from "~/components/Motion";
import Animate from "~/components/Animate";

export const experimental_ppr = true;

export default function AdditionLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const motionRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (motionRef.current) {
      const motionDiv = motionRef.current;
      motionDiv.style.opacity = '0';
      motionDiv.style.transform = 'translateX(-20%)';
      motionDiv.style.transition = 'opacity 0.15s ease-out, transform 0.15s ease-out';
      await new Promise(resolve => setTimeout(resolve, 150));
    }
    
    router.push('/');
  };

  return (
    <Motion
      ref={motionRef}
      initial={{ opacity: 0, x: '-20%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '-20%' }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={clsx([
        'bg-white dark:bg-zinc-900 border border-zinc-200/75 dark:border-zinc-700/75 rounded-3xl overflow-y-hidden',
        'flex flex-col gap-10 relative',
        'max-w-96',
        'pt-6 -mt-6 lg:pt-0 lg:mt-0 lg:pl-6 lg:-ml-6 -z-10',
        'rounded-t-none lg:rounded-t-3xl lg:rounded-l-none addition-shadow',
      ])}
    >
      <Link 
        href="/" 
        onClick={handleCloseClick}
        className="absolute right-0 top-6 lg:top-0 p-4 w-6 h-6 box-content flex items-center justify-center text-zinc-600 dark:text-zinc-300"
      >
        <Icon name="icons:close" className="text-2xl" />
      </Link>
      <Animate mode="sync">
        {children}
      </Animate>
    </Motion>
  );
}
