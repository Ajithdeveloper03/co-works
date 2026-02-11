'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';

const BlogsPageContent = () => {
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
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
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

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed font-sans line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-900">{post.author}</span>
                                    </div>
                                    <Link href={`/insights/blogs/${post.slug}`} className="flex items-center text-[#00a896] font-bold text-sm hover:underline">
                                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </section>


        </div>
    );
}

export default BlogsPageContent;
