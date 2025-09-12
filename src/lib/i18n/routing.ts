import { defineRouting } from "next-intl/routing";

export const localeCookieName = 'user.locale';

export const routing = defineRouting({
  locales: ["en", "ru", "ja"],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
  localeCookie: {
    name: localeCookieName,
    maxAge: 60 * 60 * 24 * 365,
  }
});
