import { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'Redefining Where Innovation Happens | Universe Coworks About Page',
  description: 'Learn about Universe Coworks\' mission to build world-class infrastructure in Trichy, empowering startups and offshore enterprises with global-standard facilities.',
  alternates: {
    canonical: 'https://universecoworks.com/about',
  },
  openGraph: {
    url: 'https://universecoworks.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 600,
        alt: 'Universe Coworks About',
      },
    ],
  }
};

export default function AboutPage() {
  return <AboutPageContent />;
}
