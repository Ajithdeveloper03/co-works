import { Metadata } from 'next';
import Image from 'next/image';
import { Share2, Navigation, CheckCircle, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';
import LocationsPageContent from '@/components/LocationsPageContent';

export const metadata: Metadata = {
  title: 'Universe Coworks Locations | Prime Business Hubs in Trichy',
  description: 'Explore our strategic coworking locations in Trichy. Situated in the commercial heart of the city, offering seamless access to key transit and talent hubs.',
  alternates: {
    canonical: 'https://universecoworks.com/locations',
  },
  openGraph: {
    url: 'https://universecoworks.com/locations',
    images: [
      {
        url: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Locations in Trichy',
      },
    ],
  }
};

export default function LocationsPage() {
  return <LocationsPageContent />;
}
