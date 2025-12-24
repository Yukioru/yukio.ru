import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";
import { PropsWithParamsLocale } from "~/types";
import SmartArrowLink from "~/components/SmartArrowLink";
import IconLink from "~/components/IconLink";
import Icon from "~/components/Icon";
import Animate from "~/components/Animate";
import GradientCard from "~/components/GradientCard";
import morgana from '~/assets/images/morgana.png';
import LocaleSwitcher from "~/components/LocaleSwitcher";
import clsx from "clsx";

export default async function HomeLayout({ children, params }: PropsWithChildren<PropsWithParamsLocale>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col lg:flex-row isolate">
        <GradientCard>
          <div className="absolute top-3 right-3">
            <LocaleSwitcher />
          </div>
          <div className="text-center pt-8">
            <Image
              priority
              width={120}
              height={120}
              src={morgana}
              alt="Yukioru"
              className="mx-auto rounded-full bg-linear-to-br from-red-500 to-red-600 select-none"
            />
          </div>
          <div className="px-6 flex flex-col gap-6">
            <h1
              className={clsx('text-zinc-800 dark:text-zinc-100', [
                locale === 'ja' ? 'leading-7 text-[1.1875rem] sm:text-xl' : 'text-2xl',
              ])}
            >
              {t.rich('title', {
                strong: (chunks) => (
                  <div className="inline-flex flex-col relative">
                    <strong className={clsx([locale === 'ja' ? 'font-semibold' : 'font-medium'])}>{chunks}</strong>
                    <div
                      className={clsx('absolute -bottom-2.5 whitespace-nowrap leading-3 text-zinc-400 pl-0.5', [
                        locale === 'ja' ? 'text-xs font-medium' : 'text-sm font-light',
                      ])}
                    >
                      {t('real_name')}
                    </div>
                  </div>
                )
              })}
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 font-light">
              {t('description')}
            </p>
          </div>
          <div className="flex flex-col mt-auto">
            <div className="px-4 pb-4 pt-0 lg:pt-4 text-sm lg:rounded-b-3xl flex gap-0.5 lg:order-1">
              <IconLink
                href="mailto:i@yukio.ru"
                aria-label="VK"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.45rem]"
              >
                <Icon name="icons:email" />
              </IconLink>
              <IconLink
                href="https://s.yukio.ru/telegram"
                aria-label="Telegram"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.45rem]"
              >
                <Icon name="icons:telegram" />
              </IconLink>
              <IconLink
                href="https://s.yukio.ru/vk"
                aria-label="VK"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.6rem]"
              >
                <Icon name="icons:vk" />
              </IconLink>
              <IconLink
                href="https://s.yukio.ru/x"
                aria-label="X"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.2rem]"
              >
                <Icon name="icons:x" />
              </IconLink>
              <IconLink
                href="https://s.yukio.ru/twitch"
                aria-label="Twitch"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.35rem]"
              >
                <Icon name="icons:twitch" />
              </IconLink>
              <IconLink
                href="https://s.yukio.ru/mal"
                aria-label="MyAnimeList"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="text-[1.5rem]"
              >
                <Icon name="icons:mal" />
              </IconLink>
            </div>
            <div className="border-t lg:border-b border-zinc-200/75 dark:border-zinc-800/75 rounded-b-3xl lg:rounded-none p-4 text-sm bg-zinc-50 dark:bg-zinc-950 flex flex-col gap-1">
              <SmartArrowLink href="/skills">{t('menu_skills')}</SmartArrowLink>
              <SmartArrowLink href="/games">{t('menu_games')}</SmartArrowLink>
            </div>
          </div>
        </GradientCard>
        <Animate mode="sync">{children}</Animate>
      </div>
    </div>
  );
}
