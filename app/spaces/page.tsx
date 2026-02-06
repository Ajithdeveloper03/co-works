import { Metadata } from 'next';
import SpacesPageContent from '@/components/SpacesPageContent';

export const metadata: Metadata = {
  title: 'Coworking Spaces & Private Offices | Universe Coworks',
  description: 'Explore our range of workspace options: Hot Desks, Dedicated Desks, Private Offices, Meeting Rooms, and Event Spaces in Trichy.',
  alternates: {
    canonical: 'https://universecoworks.com/spaces',
  },
  openGraph: {
    url: 'https://universecoworks.com/spaces',
    title: 'Coworking Spaces & Private Offices | Universe Coworks',
    description: 'Explore our range of workspace options: Hot Desks, Dedicated Desks, Private Offices, Meeting Rooms, and Event Spaces in Trichy.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=75&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Spaces',
      },
    ],
  },
};

export default function SpacesPage() {
  return <SpacesPageContent />;
}
