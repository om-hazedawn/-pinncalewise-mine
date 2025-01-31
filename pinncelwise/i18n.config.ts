import { getRequestConfig } from 'next-i18next/dist/commonjs/config';
import { defaultLocale, locales } from './lib/i18n';

export default getRequestConfig(async () => ({
  defaultLocale,
  locales,
  localePath: './public/locales',
}));
