import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us | Universe Coworks',
  description: 'Get in touch with Universe Coworks for office space inquiries, virtual office setups, and partnership opportunities in Trichy.',
  alternates: {
    canonical: 'https://universecoworks.com/contact',
  },
  openGraph: {
    url: 'https://universecoworks.com/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Contact Universe Coworks',
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
