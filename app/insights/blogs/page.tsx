import { Metadata } from 'next';
import BlogsPageContent from '@/components/BlogsPageContent';

export const metadata: Metadata = {
  title: 'Insights & Blogs - Startup Ecosystem Stories | Universe Coworks',
  description: 'Explore trends, guides, success stories, and latest insights from Trichy\'s fastest-growing startup ecosystem at Universe Coworks.',
  alternates: {
    canonical: 'https://universecoworks.com/insights/blogs',
  },
  openGraph: {
    url: 'https://universecoworks.com/insights/blogs',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=1200',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Insights',
      },
    ],
  },
};

export default function BlogsPage() {
  return <BlogsPageContent />;
}
