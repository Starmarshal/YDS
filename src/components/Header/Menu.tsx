'use client';

import {useState, useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {MENU, isValidMenuItem} from './menu.data';
import MenuItem from './MenuItem';
import {match} from 'path-to-regexp';

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validMenuItems = MENU.filter(isValidMenuItem);

  if (!validMenuItems.length) {
    console.error('No valid menu items found');
    return null;
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 relative z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <span
          className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}/>
        <span
          className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}/>
        <span
          className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}/>
      </button>

      <nav className="hidden md:flex gap-4 lg:gap-6">
        {validMenuItems.map(menuItem => (
          <MenuItem
            key={menuItem.name}
            menuItem={menuItem}
            isActive={!!match(menuItem.href)(pathname)}
          />
        ))}
      </nav>

      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-20"
            onClick={handleClose}
          />

          <div className="md:hidden fixed top-16 left-0 right-0 bg-black border-b border-white/50 z-20 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {validMenuItems.map(menuItem => (
                <MenuItem
                  key={menuItem.name}
                  menuItem={menuItem}
                  isActive={!!match(menuItem.href)(pathname)}
                  mobile
                  onClose={handleClose}
                />
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}