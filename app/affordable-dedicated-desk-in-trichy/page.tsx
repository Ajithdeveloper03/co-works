import { Metadata } from 'next';
import DedicatedDeskPageContent from '@/components/DedicatedDeskPageContent';

export const metadata: Metadata = {
    title: 'Affordable Dedicated Desk in Trichy for Rent | Universe Coworks',
    description: 'Looking for a dedicated desk in Trichy? Explore the best options available to enhance your work environment and increase your efficiency.',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-dedicated-desk-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-dedicated-desk-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Dedicated Desk in Trichy',
            },
        ],
    }
};

export default function DedicatedDeskPage() {
    return <DedicatedDeskPageContent />;
}


