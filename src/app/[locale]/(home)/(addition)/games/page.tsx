import { PropsWithParamsLocale } from "~/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const experimental_ppr = true;

export default async function SkillsPage({ params }: PropsWithParamsLocale) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Games');

  return (
    <div className="p-6 flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{t('title')}</h2>
      <div>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}
