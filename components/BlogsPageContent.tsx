'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "Why Tier-2 Cities are the Future of Indian Startups",
        excerpt: "With rising costs in Bangalore and Mumbai, founders are looking at cities like Trichy for sustainable growth. innovative infrastructure solutions are making this possible.",
        category: "Market Trends",
        author: "Universe Team",
        date: "Jan 10, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "5 Productivity Hacks for Remote Teams in Coworking Spaces",
        excerpt: "Maximizing output when working from a shared space requires a blend of discipline and utilizing the right amenities. Here is how our most successful members do it.",
        category: "Productivity",
        author: "Priya Sundaram",
        date: "Jan 5, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Virtual Offices: A Game Changer for Freelancers",
        excerpt: "How a professional business address can increase your client conversion rate by 40% without the overhead of a physical office.",
        category: "Guides",
        author: "Suresh Natarajan",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "The Rise of Women Entrepreneurs in Trichy",
        excerpt: "Celebrating the success stories of female founders building global businesses from the heart of Tamil Nadu.",
        category: "Community",
        author: "Anjali Mehta",
        date: "Dec 15, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=75&w=800&auto=format&fit=crop"
    }
];

export default function BlogsPageContent() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#273a96] rounded-full blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-200 rounded-full text-sm font-semibold mb-6 border border-blue-800">
                        Latest Insights
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings text-white">Stories from the Universe</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
                        Trends, guides, and success stories from Trichy's fastest-growing startup ecosystem.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-5 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {blogs.map((post) => (
                        <div key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#273a96]">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[#273a96] transition-colors leading-tight font-headings">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed font-sans">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-900">{post.author}</span>
                                    </div>
                                    <Link href="#" className="flex items-center text-[#00a896] font-bold text-sm hover:underline">
                                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-full font-bold hover:bg-[#273a96] hover:text-white hover:border-transparent transition-all shadow-sm">
                        Load More Articles
                    </button>
                </div>
            </section>


        </div>
    );
}
