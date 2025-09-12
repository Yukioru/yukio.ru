import { PropsWithParamsLocale } from "~/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Motion from "~/components/Motion";
import Game from "~/components/Game";

import wuwa from '~/assets/images/wuwa.png';
import hsr from '~/assets/images/hsr.png';
import zzz from '~/assets/images/zzz.png';

export const experimental_ppr = true;

export default async function SkillsPage({ params }: PropsWithParamsLocale) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Games');

  return (
    <Motion
      initial={{ opacity: 0, y: '20%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0, y: '-20%' }}
      transition={{ duration: 0.15, ease: 'easeOut', delay: 0.1 }}
      className="p-6 flex flex-col gap-6 text-zinc-700"
    >
      <h2 className="text-2xl font-light">{t('title')}</h2>
      <div className="flex flex-col gap-8">
        <p className="font-light">{t('description')}</p>
        <div className="flex flex-col gap-6">
          <Game
            image={wuwa}
            title={t('wuwa')}
            server={t('eu_server')}
            uid="600115012"
          />
          <Game
            image={hsr}
            title={t('hsr')}
            server={t('eu_server')}
            uid="701308909"
          />
          <Game
            image={zzz}
            title={t('zzz')}
            server={t('eu_server')}
            uid="1500088921"
          />
        </div>
      </div>
    </Motion>
  );
}
