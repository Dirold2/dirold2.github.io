import type { NavigationItem } from '@types';

export const locales = ['en', 'de', 'ru'] as const;
export const defaultLocale = 'ru';

export const navigation: NavigationItem[] = [
  { title: 'Home', icon: 'bi bi-house-fill', path: '/', category: 'ADVENS' },
  { title: 'News', icon: 'bi bi-journal-bookmark-fill', path: '/news', category: 'ADVENS' },
  { title: 'Settings', icon: 'bi bi-gear', path: '/settings', category: 'Settings' },
];

export const hostName = process.env.PUBLIC_HOSTNAME || 'http://localhost:3000/';
export const hostNameFiles = process.env.PUBLIC_HOSTNAMEFILES || 'http://files.localhost:3000/';

export const siteTitle = 'PERMA4';
