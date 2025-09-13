import { PropsWithParamsLocale } from "~/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Tag from "~/components/Tag";
import Motion from "~/components/Motion";

export const experimental_ppr = true;

const skillTree = {
  frontend: ['TypeScript', 'React', 'MobX', 'Redux', 'Next.js', 'Tailwind CSS', 'CSS Modules'],
  backend: ['Node.js', 'Bun', 'Express', 'MongoDB', 'Redis', 'Docker', 'Traefik', 'CI/CD'],
  design: ['Figma', 'Photoshop', 'Lightroom'],
};

export default async function SkillsPage({ params }: PropsWithParamsLocale) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Skills');

  return (
    <Motion
      initial={{ opacity: 0, y: '20%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0, y: '-20%' }}
      transition={{ duration: 0.15, ease: 'easeOut', delay: 0.1 }}
      className="p-6 flex flex-col gap-6 text-zinc-700 dark:text-zinc-300"
    >
      <h2 className="text-2xl font-light text-zinc-800 dark:text-zinc-200">{t('title')}</h2>
      <div className="flex flex-col gap-6">
        <p className="font-light">{t('description')}</p>
        {Object.entries(skillTree).map(([area, skills]) => (
          <div key={area} className="flex flex-col gap-1">
            <p className="text-sm">{t(`areas.${area}`)}</p>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Motion>
  );
}
