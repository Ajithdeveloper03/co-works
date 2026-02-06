import { Metadata } from 'next';
import CommunityPageContent from '@/components/CommunityPageContent';

export const metadata: Metadata = {
    title: 'Community | Universe Coworks',
    description: "Join Trichy's most vibrant professional community. Connect with founders, attend workshops, and grow your network at Universe Coworks.",
    alternates: {
        canonical: 'https://universecoworks.com/community',
    },
    openGraph: {
        url: 'https://universecoworks.com/community',
        title: 'Community | Universe Coworks',
        description: "Join Trichy's most vibrant professional community. Connect with founders, attend workshops, and grow your network at Universe Coworks.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=75&w=1200&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Universe Coworks Community',
            },
        ],
    },
};

export default function CommunityPage() {
    return <CommunityPageContent />;
}
