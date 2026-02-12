import type { Metadata } from 'next';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers & Hiring Support - Universe Coworks Community',
  description: 'Access local talent and hiring support for growing teams. Connecting startups with skilled professionals from Trichy and Tamil Nadu.',
  alternates: {
    canonical: 'https://universecoworks.com/community/careers',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/careers',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Careers',
      },
    ],
  },
};

export default function CareersPage() {
  return <CareersPageContent />;
}
