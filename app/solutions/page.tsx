import { Metadata } from 'next';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Workspace Solutions for Startups & Enterprises | Universe Coworks',
  description: 'Custom office solutions for growing businesses in Trichy. From single desks for startups to managed office floors for enterprises.',
  alternates: {
    canonical: 'https://universecoworks.com/solutions',
  },
  openGraph: {
    url: 'https://universecoworks.com/solutions',
    title: 'Workspace Solutions for Startups & Enterprises | Universe Coworks',
    description: 'Custom office solutions for growing businesses in Trichy. From single desks for startups to managed office floors for enterprises.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'Universe Coworks Solutions',
      },
    ],
  },
};

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
