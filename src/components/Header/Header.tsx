import Menu from '@/src/components/Menu';

export default function Header() {
  return(
    <header className="border-b border-white/10 px-20 py-4 flex items-center bg-black">
      <Menu/>
    </header>
  )
}