import Link from 'next/link';
import { IMenuItem } from '@/src/components/Header/menu.data';

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
  mobile?: boolean;
  onClose?: () => void;
}

export default function MenuItem({ menuItem, isActive, mobile = false, onClose }: Props) {
  // Защита от undefined
  if (!menuItem || !menuItem.href || !menuItem.name) {
    console.warn('Invalid menu item:', menuItem);
    return null;
  }

  const handleClick = () => {
    if (mobile && onClose) {
      // Небольшая задержка для плавного закрытия
      setTimeout(onClose, 100);
    }
  };

  if (mobile) {
    return (
      <Link
        className={`text-xl font-medium py-3 border-b border-white/20 ${
          isActive ? 'text-white font-semibold' : 'text-white/80'
        }`}
        href={menuItem.href}
        onClick={handleClick}
      >
        {menuItem.name}
      </Link>
    );
  }

  return (
    <Link
      className={`text-sm lg:text-base ${
        isActive ? 'text-white font-semibold' : 'text-white/80'
      }`}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}