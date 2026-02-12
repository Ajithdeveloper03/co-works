import { Metadata } from 'next';
import CoworkingSpacePageContent from '@/components/CoworkingSpacePageContent';

export const metadata: Metadata = {
    title: 'Coworking Space Trichy: Your Perfect Work Environment | Universe Coworks',
    description: 'Looking for a coworking space in Trichy? Discover the best office space Trichy has to offer with flexible options and affordable office space for rent Trichy.',
    alternates: {
        canonical: 'https://universecoworks.com/coworking-space-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/coworking-space-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Coworking Space in Trichy',
            },
        ],
    }
};

export default function CoworkingSpacePage() {
    return <CoworkingSpacePageContent />;
}
