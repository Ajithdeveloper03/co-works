'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Users, Coffee, ArrowRight, Star, Briefcase, GraduationCap, Mic, CheckCircle, Search, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePopup } from '@/context/PopupContext';

export default function CommunityPageContent() {
    const { openPopup } = usePopup();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('events');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const tabs = [
        { id: 'events', label: 'Events & Meetups', icon: Calendar },
        { id: 'workshops', label: 'Workshops', icon: GraduationCap },
        { id: 'networking', label: 'Networking', icon: Users },
        { id: 'careers', label: 'Careers', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-[#0f172a] overflow-hidden text-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=75&w=1200&auto=format&fit=crop"
                        alt="Vibrant Community"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 md:pt-16">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 text-[#00a896] px-4 py-1.5 rounded-full mb-6 font-bold uppercase tracking-widest text-xs animate-fade-in font-headings">
                        <Users className="h-3 w-3" />
                        <span>500+ Member Network</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 animate-fade-in-up font-headings leading-tight tracking-tight">
                        Trichy's Premier <br />
                        <span className="text-[#00a896]">Professional Ecosystem</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100 font-medium leading-relaxed">
                        At Universe Coworks, we've built more than a space—we've created a dynamic ecosystem where founders and innovators connect, collaborate, and grow together.
                    </p>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-[72px] z-40 bg-white shadow-sm border-b border-gray-100 overflow-x-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 py-6 border-b-2 font-bold text-sm md:text-base transition-colors ${activeTab === tab.id
                                    ? 'border-[#00a896] text-[#00a896]'
                                    : 'border-transparent text-gray-500 hover:text-[#273a96]'
                                    }`}
                            >
                                <tab.icon className="h-5 w-5" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[600px]">

                {/* Events Tab */}
                {activeTab === 'events' && (
                    <div className="animate-fade-in space-y-20">
                        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] font-headings tracking-tight">Where Conversations Turn Into Collaborations</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Building a business in a Tier-2 city can feel isolating. Universe Coworks changes that through regular networking events and community gatherings designed to bring Trichy's brightest minds together in authentic, productive settings.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { t: "Trichy Startup Mixer", d: "Our monthly Trichy Startup Mixer has become the region's premier gathering for founders, investors, and ecosystem builders. Every first Friday, ambitious professionals share their journeys, discover collaborators, meet potential co-founders, and learn from peers who've walked the path before them.", i: "https://images.pexels.com/photos/7103117/pexels-photo-7103117.jpeg" },
                                        { t: "Friday Community Lunches", d: "Our Friday Community Lunches create relaxed environments where business happens naturally. Some of our community's most valuable collaborations began over shared meals, proving that the best connections form when guards are down and conversations flow freely.", i: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" },
                                        { t: "Industry Roundtables", d: "We also host industry roundtables focused on real challenges—fundraising strategies, hiring tactics, marketing frameworks, and technology trends. These curated discussions bring together professionals facing similar obstacles, creating peer learning opportunities unavailable elsewhere in Trichy.", i: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#273a96] hover:shadow-lg transition-all cursor-default group">
                                            <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                                <Image src={item.i} alt={item.t} fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0f172a] text-lg mb-2 font-headings">{item.t}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-[600px] bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=75&w=1200&auto=format&fit=crop" alt="Mixer Event" fill className="object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                        <p className="text-white italic text-lg mb-4">"I met my technical co-founder at a Universe Coworks event. Six months later, we've built our MVP and are in investor conversations."</p>
                                        <p className="text-[#00a896] font-bold">— Rahul M., SaaS Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Workshops Tab */}
                {activeTab === 'workshops' && (
                    <div className="animate-fade-in">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] font-headings tracking-tight">Practical Knowledge for Real-World Success</h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Access to quality business education in Trichy through skill-focused workshops delivering immediately actionable knowledge.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {[
                                { t: "Small Cohorts", d: "Sessions are deliberately kept small (15-25 participants) ensuring genuine interaction, hands-on exercises, and personalized guidance.", icon: Users },
                                { t: "Expert Instructors", d: "We don't bring theoretical academics; our instructors are operators with battle scars: founders who've built and exited, marketers managing significant budgets, investors evaluating hundreds of deals annually.", icon: CheckCircle },
                                { t: "Subsidized Cost", d: "Most workshops are free or heavily subsidized for members, removing financial barriers to continuous learning and skill development.", icon: Star }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:-translate-y-2 transition-transform">
                                    <div className="w-16 h-16 bg-blue-50 text-[#273a96] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 font-headings">{item.t}</h3>
                                    <p className="text-gray-500">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#0f172a] rounded-[3rem] overflow-hidden relative shadow-2xl">
                            <div className="absolute inset-0">
                                <Image src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=75&w=1200&auto=format&fit=crop" alt="Workshop" fill className="object-cover opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] to-[#273a96]/80"></div>
                            </div>
                            <div className="relative z-10 p-12 md:p-20 text-white">
                                <h3 className="text-3xl font-bold mb-8 text-white font-headings">Curriculum Highlights</h3>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        "Company Registration & GST Compliance",
                                        "Fundraising Strategies & Investor Outreach",
                                        "Digital Marketing on a Budget",
                                        "No-code Tools for Non-tech Founders",
                                        "Product Development Fundamentals",
                                        "Remote Team Management"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-4">
                                            <CheckCircle className="h-6 w-6 text-[#00a896] flex-shrink-0" />
                                            <span className="text-lg text-gray-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Networking Tab */}
                {activeTab === 'networking' && (
                    <div className="animate-fade-in">
                        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
                            <div className="order-2 lg:order-1 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                                <Image src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=75&w=1200&auto=format&fit=crop" alt="Networking" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#273a96]/90 to-transparent flex items-end p-10">
                                    <div className="text-white">
                                        <p className="text-2xl font-bold italic mb-4">"Through Universe Coworks, I found my first customer and hired my first employee. The membership ROI is 100X."</p>
                                        <p className="text-[#00a896] font-bold uppercase tracking-wider">— Priya K., EdTech Founder</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] font-headings tracking-tight">Build the Network That Builds Your Business</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Your network determines your access to opportunities, capital, talent, and knowledge. Universe Coworks provides structured access to the people who'll help you build and scale.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Our community of 500+ professionals includes fellow founders at various stages, angel investors interested in Tamil Nadu's startup scene, experienced mentors offering guidance, and pre-vetted service providers—CAs, lawyers, marketers, developers—who understand startup constraints.
                                </p>

                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                                    <h4 className="font-bold text-lg mb-6 flex items-center"><Rocket className="h-5 w-5 mr-2 text-[#00a896]" /> Who You'll Meet</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Fellow Founders", "Angel Investors", "Experienced Mentors", "Vetted Providers"].map((item, i) => (
                                            <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-bold text-gray-700 text-center border border-gray-100">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-lg text-[#0f172a]">How We Facilitate Connections:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Searchable Member Directory & Structured Introduction",
                                            "Community Manager Facilitated Connections",
                                            "Monthly Peer Advisory Circles for Founders",
                                            "Physical & Digital Collaboration Boards for Opportunities"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <div className="h-2 w-2 rounded-full bg-[#00a896] mr-3"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Careers Tab */}
                {activeTab === 'careers' && (
                    <div className="animate-fade-in">
                        <div className="bg-[#273a96] rounded-[3rem] overflow-hidden text-white relative mb-16">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00a896] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                            <div className="grid lg:grid-cols-2">
                                <div className="p-12 md:p-20 flex flex-col justify-center">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headings tracking-tight">Connecting Talent With Opportunity</h2>
                                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                        We're committed to creating large-scale employment in Trichy by helping startups build teams while connecting local talent with meaningful opportunities. Since inception, our members have created 200+ jobs in Trichy, distributing over ₹5 Crore annually in salaries to local professionals—proving that innovation and employment grow together when ecosystems are built intentionally.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 text-center">
                                        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                            <p className="text-3xl font-bold text-[#00a896] mb-1">200+</p>
                                            <p className="text-xs uppercase tracking-wider">Jobs Created</p>
                                        </div>
                                        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                            <p className="text-3xl font-bold text-[#00a896] mb-1">₹5Cr+</p>
                                            <p className="text-xs uppercase tracking-wider">Salaries Distributed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative min-h-[400px]">
                                    <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=75&w=1200&auto=format&fit=crop" alt="Hiring" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                                <div className="w-14 h-14 bg-blue-50 text-[#273a96] rounded-xl flex items-center justify-center mb-6">
                                    <Briefcase className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-headings">For Growing Businesses</h3>
                                For growing businesses, we provide access to Trichy's skilled workforce—NIT/BITS graduates, professionals returned from metros, fresh talent from local colleges. Our hiring support includes job posting on our exclusive talent board, resume screening, interview space, salary benchmarking, and offer negotiation guidance.
                                <Link href="/contact" className="block w-full py-4 text-center border-2 border-[#273a96] text-[#273a96] font-bold rounded-xl hover:bg-[#273a96] hover:text-white transition-colors">
                                    Post a Job
                                </Link>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                                <div className="w-14 h-14 bg-teal-50 text-[#00a896] rounded-xl flex items-center justify-center mb-6">
                                    <GraduationCap className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-headings">For Professionals</h3>
                                For professionals, we offer vetted startup job openings, career guidance, resume reviews, interview preparation, and skill development workshops aligned with market demands.
                                <Link href="/contact" className="block w-full py-4 text-center bg-[#00a896] text-white font-bold rounded-xl hover:bg-[#00897b] transition-colors">
                                    Find a Job
                                </Link>
                            </div>
                        </div> */}
                    </div>
                )}
            </div>

            {/* Final CTA */}
            <section className="bg-white py-16 text-center border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8 font-headings tracking-tight max-w-2xl mx-auto">Join Trichy's most connected professional community.<br />The future is collaborative.</h2>
                <div className="flex justify-center gap-6">
                    <button onClick={openPopup} className="px-8 py-4 bg-[#273a96] text-white font-bold rounded-full hover:bg-[#1e2a78] transition-colors">
                        Attend Next Event
                    </button>
                    <Link href="/pricing" className="px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-full hover:border-[#273a96] hover:text-[#273a96] transition-colors">
                        Explore Membership
                    </Link>
                </div>
            </section>
        </div>
    );
}
