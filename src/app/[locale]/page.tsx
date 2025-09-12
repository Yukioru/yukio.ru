import Image from "next/image";
import Card from "~/components/Card";
import morgana from '~/assets/images/morgana.png';
import { PropsWithParamsLocale } from "~/types";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const experimental_ppr = true;

export default function Home({ params }: PropsWithParamsLocale) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="max-w-96 mx-auto flex flex-col gap-6">
        <div className="text-center pt-6 pb-4">
          <Image
            priority
            width={120}
            height={120}
            src={morgana}
            alt="Yukioru Morgana"
            className="mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-600 select-none"
          />
        </div>
        <div className="px-6 pb-6 flex flex-col gap-2">
          <h1 className="text-2xl text-zinc-800">
            {t.rich('title', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </h1>
          <p className="text-zinc-700">
            {t('description')}
          </p>
        </div>
      </Card>
    </div>
  );
}
