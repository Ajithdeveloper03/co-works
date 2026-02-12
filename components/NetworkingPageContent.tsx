'use client';

import { Network, Users, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/context/PopupContext';
import Image from 'next/image';

export default function NetworkingPageContent() {
    const { openPopup } = usePopup();

    return (
        <div className="min-h-screen pt-20 font-sans">
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-headings">
                        Startup Networking
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                        Strong networks build strong startups
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                                alt="Startup Networking"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        <div>
                            <div className="bg-gradient-to-br from-[#00a896] to-[#273a96] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Network className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-headings">
                                Build Meaningful Connections
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                                Connect with fellow founders, investors, and ecosystem partners. Build meaningful relationships that support growth and scale. Because strong networks build strong startups.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Connect with like-minded entrepreneurs",
                                    "Access to investors and mentors",
                                    "Collaboration opportunities",
                                    "Business partnership potential"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-[#00a896] mr-3 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-10 rounded-[2.5rem] text-center border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="bg-[#00a896]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00a896] transition-colors">
                                <Users className="h-8 w-8 text-[#00a896] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3 font-headings">
                                Founder Community
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Join a vibrant community of startup founders and entrepreneurs
                            </p>
                        </div>

                        <div className="bg-gray-50 p-10 rounded-[2.5rem] text-center border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="bg-[#273a96]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#273a96] transition-colors">
                                <Handshake className="h-8 w-8 text-[#273a96] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3 font-headings">
                                Partner Network
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Access ecosystem partners, service providers, and collaborators
                            </p>
                        </div>

                        <div className="bg-gray-50 p-10 rounded-[2.5rem] text-center border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="bg-[#00a896]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00a896] transition-colors">
                                <Network className="h-8 w-8 text-[#00a896] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3 font-headings">
                                Global Connections
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Network with international startups and global companies
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96] text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headings">
                        Grow Your Network
                    </h2>
                    <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
                        Join Universe Coworks and connect with the startup ecosystem.
                    </p>
                    <button
                        onClick={openPopup}
                        className="inline-flex items-center bg-white text-[#273a96] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl group"
                    >
                        Join Our Community <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}
