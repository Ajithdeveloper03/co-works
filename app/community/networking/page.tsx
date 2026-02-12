import type { Metadata } from 'next';
import NetworkingPageContent from '@/components/NetworkingPageContent';

export const metadata: Metadata = {
  title: 'Startup Networking - Universe Coworks Community',
  description: 'Connect with fellow founders, investors, and ecosystem partners at Universe Coworks. Build meaningful relationships that support growth and scale.',
  alternates: {
    canonical: 'https://universecoworks.com/community/networking',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/networking',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Networking',
      },
    ],
  },
};

export default function NetworkingPage() {
  return <NetworkingPageContent />;
}
