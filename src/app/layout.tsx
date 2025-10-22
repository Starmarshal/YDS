import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/src/providers/ThemeProvider';

const geistSans = Geist({
  display: 'swap',
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s YDS',
    default: ''
  },
  description: 'Site for YDS',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className="antialiased theme-light"
      >
      <body
        className={`${geistSans.variable} antialiased`}
      >
      {children}
      </body>
      </html>
    </ThemeProvider>
  );
}
