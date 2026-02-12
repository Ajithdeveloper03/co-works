import { Metadata } from 'next';
import FAQPageContent from '@/components/FAQPageContent';

export const metadata: Metadata = {
    title: 'Explore Our FAQ - Frequently Asked Questions | Universe Coworks',
    description: 'Explore our FAQ to learn about Universe Coworks services, pricing, facilities, and membership policies in Trichy.',
    alternates: {
        canonical: 'https://universecoworks.com/frequently-asked-questions',
    },
    openGraph: {
        url: 'https://universecoworks.com/frequently-asked-questions',
    }
};

export default function FAQPage() {
    return <FAQPageContent />;
}
