import { Metadata } from 'next';
import VirtualOfficePageContent from '@/components/VirtualOfficePageContent';

export const metadata: Metadata = {
    title: 'Affordable Virtual Office in Trichy for Entrepreneurs | Universe Coworks',
    description: 'Transform your business with a virtual office in Trichy. Discover how this innovative solution can enhance your company\'s presence and efficiency.',
    alternates: {
        canonical: 'https://universecoworks.com/virtual-office-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/virtual-office-in-trichy',
    }
};

export default function VirtualOfficePage() {
    return <VirtualOfficePageContent />;
}
