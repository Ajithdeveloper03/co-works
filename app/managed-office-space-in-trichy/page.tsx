import { Metadata } from 'next';
import ManagedOfficePageContent from '@/components/ManagedOfficePageContent';

export const metadata: Metadata = {
    title: 'Managed Office Space in Trichy: Optimize Your Work Life | Universe Coworks',
    description: 'Looking for managed office space in Trichy? Explore our blog for insights on how this flexible workspace can elevate your business environment.',
    alternates: {
        canonical: 'https://universecoworks.com/managed-office-space-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/managed-office-space-in-trichy',
        images: [
            {
                url: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1200',
                width: 1200,
                height: 630,
                alt: 'Managed Office Space in Trichy',
            },
        ],
    }
};

export default function ManagedOfficePage() {
    return <ManagedOfficePageContent />;
}
