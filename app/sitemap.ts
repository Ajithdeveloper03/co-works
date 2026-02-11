import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://universecoworks.com';

    const routes = [
        '',
        '/about',
        '/contact',
        '/pricing',
        '/solutions',
        '/spaces',
        '/locations',
        '/community',
        '/community/events',
        '/community/workshops',
        '/community/networking',
        '/community/careers',
        '/hot-desk-in-trichy',
        '/affordable-dedicated-desk-in-trichy',
        '/affordable-private-office-space-in-trichy',
        '/meeting-room-in-trichy',
        '/affordable-training-room-in-trichy',
        '/managed-office-space-in-trichy',
        '/best-workspace-solutions-in-trichy',
        '/virtual-office-in-trichy',
        '/virtual-office',
        '/coworking-space-trichy',
        '/frequently-asked-questions',
        '/insights/blogs',
        ...blogPosts.map((post) => `/insights/blogs/${post.slug}`),
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
