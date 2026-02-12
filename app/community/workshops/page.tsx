import type { Metadata } from 'next';
import WorkshopsPageContent from '@/components/WorkshopsPageContent';

export const metadata: Metadata = {
  title: 'Workshops & Training - Universe Coworks Community',
  description: 'Skill-focused workshops and training programs led by industry experts and mentors at Universe Coworks.',
  alternates: {
    canonical: 'https://universecoworks.com/community/workshops',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/workshops',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Workshops',
      },
    ],
  },
};

export default function WorkshopsPage() {
  return <WorkshopsPageContent />;
}
