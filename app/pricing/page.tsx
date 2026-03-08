import { Metadata } from 'next';
import PricingPageContent from '@/components/PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing & Membership Plans | Universe Coworks',
  description: 'Affordable coworking spaces, dedicated desks, and private offices in Trichy. Transparent pricing with no hidden costs for startups and freelancers.',
  alternates: {
    canonical: 'https://universecoworks.com/pricing',
  },
  openGraph: {
    url: 'https://universecoworks.com/pricing',
    title: 'Pricing & Membership Plans | Universe Coworks',
    description: 'Affordable coworking spaces, dedicated desks, and private offices in Trichy. Transparent pricing with no hidden costs for startups and freelancers.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554469384-e58e16dd2698?q=75&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Pricing',
      },
    ],
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
