import type { Metadata } from 'next';
import EventsPageContent from '@/components/EventsPageContent';

export const metadata: Metadata = {
  title: 'Events & Meetups - Universe Coworks Community',
  description: 'Join our regular events and meetups that bring founders, professionals, and innovators together at Universe Coworks.',
  alternates: {
    canonical: 'https://universecoworks.com/community/events',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/events',
    images: [
      {
        url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Events',
      },
    ],
  },
};

export default function EventsPage() {
  return <EventsPageContent />;
}
