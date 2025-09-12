import { PropsWithParamsLocale } from "~/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Tag from "~/components/Tag";

export const experimental_ppr = true;

export default async function SkillsPage({ params }: PropsWithParamsLocale) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Skills');

  return (
    <div className="p-6 flex flex-col gap-4 text-zinc-700">
      <h2 className="text-2xl font-light">{t('title')}</h2>
      <div className="flex flex-col gap-4">
        <p>{t('description')}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{t('areas.frontend')}</p>
          <div className="flex flex-wrap gap-1">
            <Tag>TypeScript</Tag>
            <Tag>React</Tag>
            <Tag>MobX</Tag>
            <Tag>Redux</Tag>
            <Tag>Next.js</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>CSS Modules</Tag>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{t('areas.backend')}</p>
          <div className="flex flex-wrap gap-1">
            <Tag>Node.js</Tag>
            <Tag>Bun</Tag>
            <Tag>Express</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Redis</Tag>
            <Tag>Socket.io</Tag>
            <Tag>Docker</Tag>
            <Tag>Traefik</Tag>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{t('areas.design')}</p>
          <div className="flex flex-wrap gap-1">
            <Tag>Figma</Tag>
            <Tag>Photoshop</Tag>
            <Tag>Lightroom</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
