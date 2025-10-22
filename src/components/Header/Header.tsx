import Link from 'next/link';
import ThemeToggle from '@/src/components/ThemeToggle';
import Menu from '@/src/components/Header/Menu';

export default function Header() {
  return(
    <header className="border-b border-white/50 px-4 sm:px-6 py-4 flex justify-between items-center bg-black fixed z-10 w-full">
      {/* Имя - всегда видно */}
      <Link
        href="/"
        className='flex items-center gap-3 font-semibold text-white text-sm sm:text-base z-30'
      >
        Юревич Дмитрий
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Меню - скрывается на мобильных */}
        <div className="hidden md:block">
          <Menu/>
        </div>

        {/* Переключатель темы - всегда виден */}
        <div className="z-30">
          <ThemeToggle/>
        </div>

        {/* Бургер-иконка - видна только на мобильных */}
        <div className="md:hidden z-30">
          <Menu/>
        </div>
      </div>
    </header>
  )
}