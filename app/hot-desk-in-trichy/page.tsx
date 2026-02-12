import { Metadata } from 'next';
import HotDeskPageContent from '@/components/HotDeskPageContent';

export const metadata: Metadata = {
    title: 'Hot Desk in Trichy: Your Flexible Workspace Solution | Universe Coworks',
    description: 'Looking for a flexible work environment? Explore the advantages of a Hot Desk in Trichy and how it can enhance your work experience.',
    alternates: {
        canonical: 'https://universecoworks.com/hot-desk-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/hot-desk-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Hot Desk in Trichy',
            },
        ],
    }
};

export default function HotDeskPage() {
    return <HotDeskPageContent />;
}
