import { Metadata } from 'next';
import PrivateOfficePageContent from '@/components/PrivateOfficePageContent';

export const metadata: Metadata = {
    title: 'Affordable Private Office Space in Trichy for Professionals | Universe Coworks',
    description: 'Looking for private office space in Trichy? Explore flexible options that enhance productivity and comfort. Read our blog to learn more!',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-private-office-space-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-private-office-space-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Private Office Space in Trichy',
            },
        ],
    }
};

export default function PrivateOfficePage() {
    return <PrivateOfficePageContent />;
}
