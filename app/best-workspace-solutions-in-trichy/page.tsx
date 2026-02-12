import { Metadata } from 'next';
import WorkspaceSolutionsPageContent from '@/components/WorkspaceSolutionsPageContent';

export const metadata: Metadata = {
    title: 'Best Workspace Solutions in Trichy for Your Business | Universe Coworks',
    description: 'Uncover innovative Workspace Solutions in Trichy to transform your office environment. Check out our blog for insights on optimizing your workspace.',
    alternates: {
        canonical: 'https://universecoworks.com/best-workspace-solutions-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/best-workspace-solutions-in-trichy',
    }
};

export default function WorkspaceSolutionsPage() {
    return <WorkspaceSolutionsPageContent />;
}
