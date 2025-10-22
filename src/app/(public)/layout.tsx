import type {PropsWithChildren} from 'react';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';

export default function Layout({children}: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header/>
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {children}
      </main>
      <Footer/>
    </div>
  );
}