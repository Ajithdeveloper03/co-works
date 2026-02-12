import { Metadata } from 'next';
import MeetingRoomPageContent from '@/components/MeetingRoomPageContent';

export const metadata: Metadata = {
    title: 'Find the Perfect Meeting Room in Trichy for Success | Universe Coworks',
    description: 'Looking for a professional meeting room in Trichy? Discover the best options available for your next corporate event or gathering in our latest blog post.',
    alternates: {
        canonical: 'https://universecoworks.com/meeting-room-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/meeting-room-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Meeting Rooms in Trichy',
            },
        ],
    }
};

export default function MeetingRoomPage() {
    return <MeetingRoomPageContent />;
}
