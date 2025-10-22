import { Metadata } from 'next';
import Privacy from '@/src/app/(public)/privacy/Privacy';

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных'
};

export default function PrivacyPolicyPage() {
  return (
    <Privacy/>
  );
}