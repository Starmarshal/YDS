import {PAGES} from '@/src/app/config/pages.config';

export interface IMenuItem {
  href: string;
  name: string;
}

export const MENU: IMenuItem[] = [
  {
    href: PAGES.HOME || '/',
    name: 'Главная'
  },
  {
    href: PAGES.ABOUT || '/about',
    name: 'Обо мне'
  },
  {
    href: PAGES.EXPERIENCE || '/experience',
    name: 'Опыт'
  },
  {
    href: PAGES.CONTACTS || '/contacts',
    name: 'Контакты'
  },
];

export const isValidMenuItem = (item: any): item is IMenuItem => {
  return item && typeof item.href === 'string' && typeof item.name === 'string';
};