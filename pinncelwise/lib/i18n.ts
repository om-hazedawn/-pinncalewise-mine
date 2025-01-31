export const defaultLocale = 'en';
export const locales = ['en', 'zh-HK'];

export type Locale = typeof locales[number];

export const getLocaleFromPath = (path: string): Locale => {
  const locale = path.split('/')[1];
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
};

export const removeLocaleFromPath = (path: string): string => {
  const locale = getLocaleFromPath(path);
  return path.replace(`/${locale}`, '');
};
