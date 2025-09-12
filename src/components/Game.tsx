import { ImageProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface GameProps {
  image: ImageProps['src'];
  title: string;
  uid: string;
}

export default function Game({ image, title, uid }: GameProps) {
  return (
    <div className="flex gap-3 sm:gap-3 items-center">
      <Image
        width={42}
        height={42}
        src={image}
        alt={title}
        className="rounded-lg bg-zinc-200/75 flex-shrink-0 border border-zinc-100 select-none"
      />
      <div className="flex gap-0.5 sm:gap-3 items-start sm:items-center flex-col sm:flex-row grow">
        <div className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </div>
        <div className="flex gap-1 items-center uppercase py-0.5 px-1 text-sm bg-zinc-200/75 rounded-lg sm:ml-auto">
          <div className="text-xs leading-5 mt-0.5">UID:</div>
          <div className="font-mono tracking-widest leading-5 select-all">
            {uid}
          </div>
        </div>
      </div>
    </div>
  );
}