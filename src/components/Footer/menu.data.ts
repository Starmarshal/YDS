import {PAGES} from '@/src/app/config/pages.config';

export interface IMenuItem{
  href: string;
  name: string;
}

export const MENU = [
  {
    href: PAGES.PRIVACY,
    name:'Политика конфиденциальности'
  },
  {
    href: PAGES.TERMS,
    name: 'Пользовательское соглашение'
  }
]