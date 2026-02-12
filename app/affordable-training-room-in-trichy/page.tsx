import { Metadata } from 'next';
import TrainingRoomPageContent from '@/components/TrainingRoomPageContent';

export const metadata: Metadata = {
    title: 'Affordable Training Room in Trichy: Reserve Today | Universe Coworks',
    description: 'Looking for the perfect training room in Trichy? Discover top venues equipped for your needs. Check out our blog for the best options available!',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-training-room-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-training-room-in-trichy',
    }
};

export default function TrainingRoomPage() {
    return <TrainingRoomPageContent />;
}
