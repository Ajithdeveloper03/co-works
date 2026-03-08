'use client';

import { Star, Users, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { usePopup } from '@/context/PopupContext';
import Link from 'next/link';

export default function StaticHero() {
    const { openPopup } = usePopup();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.pexels.com/photos/7511743/pexels-photo-7511743.jpeg"
                    alt="Premium Coworking Space in Trichy"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-block px-4 py-1.5 my-6 bg-white rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-extrabold text-[#0f172a] uppercase tracking-wider">
                        Best Coworking space in trichy
                    </span>
                </div>

                {/* Main H1 Title */}
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.2] font-headings">
                    Best Coworking Space in Trichy <br className="hidden md:block" />
                    for Business & Growing Teams
                </h1>

                {/* Highlighted Chips */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                    <div className="px-5 py-2 bg-[#00a896] rounded-md shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <span className="text-xl md:text-2xl font-bold text-white inline-block">
                            Work Smarter.
                        </span>
                    </div>
                    <div className="px-5 py-2 bg-[#273a96] rounded-md shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <span className="text-xl md:text-2xl font-bold text-white inline-block">
                            Grow Faster.
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-lg md:text-lg text-gray-200 mb-4 leading-relaxed font-medium opacity-90">
                    Universe Coworks is a premium coworking space in Trichy offering affordable, fully-managed office space near Trichy Junction.
                    Designed for ambitious freelancers, startups, and professionals who want to focus, grow, and win more clients.
                </p>

                {/* Pricing Line */}
                <div className="mb-6">
                    <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        From just <span className="text-[#00a896]">₹4,999/month</span> <span className="mx-2 text-gray-400">·</span> No long-term contract
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-6 py-4 container mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-white font-bold text-base md:text-lg">4.9/5 Rating(500+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-[#00a896] rounded-lg">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-bold text-base md:text-lg">500+ Members</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-[#00a896] rounded-lg">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-bold text-base md:text-lg">Trichy's #1 Workspace</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                    <button
                        onClick={openPopup}
                        className="w-full sm:w-auto px-10 py-4 bg-[#273a96] text-white rounded-full font-bold text-xl shadow-2xl hover:bg-blue-800 transform hover:scale-105 transition-all"
                    >
                        Book a free tour
                    </button>
                    <Link
                        href="/pricing"
                        className="w-full sm:w-auto px-10 py-4 bg-[#00a896] text-white rounded-full font-bold text-xl shadow-2xl hover:bg-teal-700 transform hover:scale-105 transition-all"
                    >
                        Pricing Details
                    </Link>
                </div>


                {/* Sub-CTA Benefits */}
                <div className="flex items-center justify-center gap-8">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <CheckCircle className="w-6 h-6 text-[#00a896]" />
                        <span>No commitment required</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <CheckCircle className="w-6 h-6 text-[#00a896]" />
                        <span>Day passes available</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
