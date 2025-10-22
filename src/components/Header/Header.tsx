import Link from 'next/link';
import ThemeToggle from '@/src/components/ThemeToggle';
import Menu from '@/src/components/Header/Menu';

export default function Header() {
  return(
    <header className="border-b border-white/50 px-6 py-4 flex justify-between items-center bg-black fixed z-10 w-full">
      <Link
        href="/"
        className='flex items-center gap-3 font-semibold text-white'
      >
        Юревич Дмитрий
      </Link>
      <div className="flex items-center gap-6">
        <Menu/>
        <ThemeToggle/>
      </div>
    </header>
  )
}