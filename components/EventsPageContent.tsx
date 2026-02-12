'use client';

import { Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/context/PopupContext';
import Image from 'next/image';

export default function EventsPageContent() {
    const { openPopup } = usePopup();

    return (
        <div className="min-h-screen pt-20 font-sans">
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-headings">
                        Events & Meetups
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                        Where conversations turn into collaborations
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                                alt="Community Events"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <div className="bg-gradient-to-br from-[#00a896] to-[#273a96] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Calendar className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-headings">
                                Regular Community Events
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                                Regular events that bring founders, professionals, and innovators together. Share ideas, build connections, and grow your network organically. Where conversations turn into collaborations.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Monthly founder meetups and networking sessions",
                                    "Industry-specific knowledge sharing events",
                                    "Guest speaker sessions with successful entrepreneurs",
                                    "Pitch nights and demo days for startups",
                                    "Social gatherings and team-building activities"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="h-6 w-6 rounded-full bg-[#00a896]/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                                            <span className="text-[#00a896] text-xs font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-[#0f172a] mb-4 font-headings">
                                Event Categories
                            </h3>
                            <div className="w-24 h-1.5 bg-[#00a896] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Networking Events", desc: "Connect with fellow entrepreneurs and professionals", icon: Users },
                                { title: "Knowledge Sessions", desc: "Learn from industry experts and thought leaders", icon: Sparkles },
                                { title: "Social Gatherings", desc: "Casual meetups to build lasting relationships", icon: Calendar }
                            ].map((cat, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all text-center group border border-gray-100">
                                    <div className="bg-[#00a896]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00a896] transition-colors">
                                        <cat.icon className="h-8 w-8 text-[#00a896] group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-xl text-[#0f172a] mb-3 font-headings">
                                        {cat.title}
                                    </h4>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        {cat.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96] text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headings">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
                        Become a member and get exclusive access to all our events and meetups.
                    </p>
                    <button
                        onClick={openPopup}
                        className="inline-flex items-center bg-white text-[#273a96] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl group"
                    >
                        Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}
