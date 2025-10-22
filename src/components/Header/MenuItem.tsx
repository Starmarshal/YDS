import Link from 'next/link';
import {IMenuItem} from '@/src/components/Header/menu.data';

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export default function MenuItem({menuItem, isActive}:Props) {

  return(
    <Link
      className={isActive ? 'text-white' : 'text-white/80'}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  )
}