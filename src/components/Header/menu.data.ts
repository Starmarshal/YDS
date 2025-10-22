import {PAGES} from '@/src/app/config/pages.config';

export interface IMenuItem{
  href: string;
  name: string;
}

export const MENU = [
  {
    href: PAGES.HOME,
    name:'Главная'
  },
  {
    href: PAGES.ABOUT,
    name:'Обо мне'
  },
  {
    href: PAGES.EXPERIENCE,
    name: 'Опыт'
  },
  {
    href: PAGES.CONTACTS,
    name: 'Контакты'
  },
]