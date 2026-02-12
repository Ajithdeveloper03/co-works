'use client';

import { Briefcase, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { usePopup } from '@/context/PopupContext';
import Image from 'next/image';

export default function CareersPageContent() {
    const { openPopup } = usePopup();

    return (
        <div className="min-h-screen pt-20 font-sans">
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-headings">
                        Careers & Hiring Support
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                        Building teams and creating opportunities
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <div className="bg-gradient-to-br from-[#00a896] to-[#273a96] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Briefcase className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-headings">
                                Hire Top Talent
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                                Access local talent and hiring support for growing teams. We connect startups with skilled professionals from the region. Helping businesses grow while creating employment in Trichy.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Access to qualified candidates",
                                    "Job posting assistance",
                                    "Interview space availability",
                                    "Campus recruitment support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-[#00a896] mr-3 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                                alt="Careers and Hiring"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-12 rounded-[3rem] text-center border border-gray-100 mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-[#0f172a] mb-4 font-headings">
                                Talent Pool Access
                            </h3>
                            <div className="w-24 h-1.5 bg-[#00a896] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                                <div className="bg-[#00a896]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00a896] transition-colors">
                                    <Users className="h-8 w-8 text-[#00a896] group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="font-bold text-xl text-[#0f172a] mb-3 font-headings">
                                    Engineering Talent
                                </h4>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Access graduates from top engineering colleges
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                                <div className="bg-[#273a96]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#273a96] transition-colors">
                                    <TrendingUp className="h-8 w-8 text-[#273a96] group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="font-bold text-xl text-[#0f172a] mb-3 font-headings">
                                    Business Professionals
                                </h4>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Management and business school graduates
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                                <div className="bg-[#00a896]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00a896] transition-colors">
                                    <Briefcase className="h-8 w-8 text-[#00a896] group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="font-bold text-xl text-[#0f172a] mb-3 font-headings">
                                    Experienced Professionals
                                </h4>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Connect with experienced talent in various domains
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#0f172a] mb-6 font-headings">
                            For Job Seekers
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                            Looking for exciting opportunities with startups and growing companies? Connect with employers at Universe Coworks and find your next career move.
                        </p>
                        <button
                            onClick={openPopup}
                            className="inline-flex items-center bg-[#00a896] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#00897b] transition-all transform hover:scale-105 shadow-2xl hover:shadow-[#00a896]/30 group"
                        >
                            Connect with Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00a896] to-[#273a96] text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headings">
                        Ready to Build Your Team?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
                        Let us help you find the right talent for your growing business.
                    </p>
                    <button
                        onClick={openPopup}
                        className="inline-flex items-center bg-white text-[#273a96] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl group"
                    >
                        Get Hiring Support <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}
