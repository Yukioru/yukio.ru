import Image from "next/image";
import Card from "~/components/Card";
import morgana from '~/assets/images/morgana.png';
import { PropsWithParamsLocale } from "~/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";
import SmartArrowLink from "~/components/SmartArrowLink";

export const experimental_ppr = true;

export default async function HomeLayout({ children, params }: PropsWithChildren<PropsWithParamsLocale>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col lg:flex-row isolate">
        <Card className="max-w-96 mx-auto flex flex-col gap-10">
          <div className="text-center pt-8">
            <Image
              priority
              width={120}
              height={120}
              src={morgana}
              alt="Yukioru"
              className="mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-600 select-none"
            />
          </div>
          <div className="px-6 flex flex-col gap-4">
            <h1 className="text-2xl text-zinc-800">
              {t.rich('title', {
                strong: (chunks) => <strong className="font-medium">{chunks}</strong>
              })}
            </h1>
            <p className="text-zinc-700 font-light">
              {t('description')}
            </p>
          </div>
          <div className="border-t border-t-zinc-200/75 px-4 py-4 text-sm rounded-b-3xl bg-zinc-50">
            <SmartArrowLink href="/skills">Skills</SmartArrowLink>
          </div>
        </Card>
        {children}
      </div>
    </div>
  );
}
