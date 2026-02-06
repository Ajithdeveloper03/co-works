import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://universecoworks.com/',
  },
  openGraph: {
    url: 'https://universecoworks.com/',
  }
};

export default function Home() {
  return <HomeContent />;
}
