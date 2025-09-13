'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { routing } from "~/lib/i18n/routing";
import { Link, usePathname } from "~/lib/i18n/navigation";

import en from '~/assets/images/en.png';
import ru from '~/assets/images/ru.png';
import ja from '~/assets/images/ja.png';

function getFlagImage(locale: string) {
  switch (locale) {
    case 'ru': return ru;
    case 'en': return en;
    case 'ja': return ja;
    default: return en;
  }
};

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const localeLabels: Record<string, string> = {
    'ru': 'RU',
    'en': 'EN',
    'ja': 'JA'
  };

  const otherLocales = routing.locales.filter(locale => locale !== currentLocale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer gap-1 px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 dark:hover:bg-zinc-700 hover:bg-zinc-100 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
          {localeLabels[currentLocale]}
        </span>
        <Image 
          src={getFlagImage(currentLocale)}
          alt={`${localeLabels[currentLocale]} flag`}
          width={16}
          height={16}
          className="border border-zinc-200 dark:border-zinc-600 rounded-sm"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl shadow-lg dark:shadow-2xl z-50 min-w-[70px]">
          {otherLocales.map((locale) => (
            <Link
              key={locale}
              href={pathname}
              locale={locale}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              <span className="font-medium text-zinc-800 dark:text-zinc-300">
                {localeLabels[locale]}
              </span>
              <Image 
                src={getFlagImage(locale)}
                alt={`${localeLabels[locale]} flag`}
                width={16}
                height={16}
                className="border border-zinc-200 dark:border-zinc-600 rounded-sm"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}