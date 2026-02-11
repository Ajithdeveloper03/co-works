
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.metadata.title} | Universe Coworks Insights`,
        description: post.metadata.description,
        keywords: post.metadata.keywords,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.description,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            {post.schemas?.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}
            <article className="min-h-screen bg-gray-50 pb-20">
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[400px] w-full bg-[#0f172a]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="100vw"
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 max-w-4xl mx-auto w-full">
                        <Link
                            href="/insights/blogs"
                            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Insights
                        </Link>

                        <div className="flex items-center space-x-4 mb-6">
                            <span className="bg-[#273a96] text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-headings">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center text-blue-200 mr-2 border border-blue-800">
                                    <User className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-white">{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                    <div className="bg-white rounded-t-[2.5rem] p-6 sm:p-10 md:p-14 shadow-xl border border-gray-100">
                        {post.content}
                    </div>

                    {/* Share / Footer of Article */}
                    <div className="mt-10 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-b-[2.5rem] shadow-lg mx-4 sm:mx-0">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold text-[#0f172a] mb-1">Share this article</h4>
                            <p className="text-sm text-gray-500">Spread the knowledge with your network</p>
                        </div>
                        <div className="flex space-x-3">
                            {/* Simple share buttons placeholders - functional links can be added later */}
                            <button className="p-2 rounded-full bg-blue-100 text-[#273a96] hover:bg-[#273a96] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </button>
                            <button className="p-2 rounded-full bg-blue-100 text-[#273a96] hover:bg-[#273a96] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </button>
                            <button className="p-2 rounded-full bg-blue-100 text-[#273a96] hover:bg-[#273a96] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
