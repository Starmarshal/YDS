import { Metadata } from 'next';
import Terms from '@/src/app/(public)/terms/Terms';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение',
  description: 'Пользовательское соглашение для веб-сайта FinFlexity'
};

export default function TermsPage() {
  return (
    <Terms/>
  );
}