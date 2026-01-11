import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  pathnames: {
    '/': '/',
    '/birthday/[year]/[month]/[day]': {
      ja: '/birthday/[year]/[month]/[day]',
      en: '/birthday/[year]/[month]/[day]'
    },
    '/birthstones': {
      ja: '/birthstones',
      en: '/birthstones'
    },
    '/birthflowers': {
      ja: '/birthflowers',
      en: '/birthflowers'
    },
    '/birthcolors': {
      ja: '/birthcolors',
      en: '/birthcolors'
    },
    '/age-calculator': {
      ja: '/age-calculator',
      en: '/age-calculator'
    },
    '/wareki': {
      ja: '/wareki',
      en: '/wareki'
    },
    '/yakudoshi': {
      ja: '/yakudoshi',
      en: '/yakudoshi'
    }
  }
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
