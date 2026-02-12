'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    MapPin,
    Wifi,
    Users,
    Zap,
    Clock,
    ArrowRight,
    Monitor,
    CheckCircle2,
    Printer,
    Coffee,
    Lock,
    Smartphone,
    Layout,
    Star,
    MessageSquare,
    Award,
    TrendingUp,
    Heart,
    CalendarCheck,
    Building2
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePopup } from '@/context/PopupContext';
import { useEffect } from 'react';

const faqs = [
    {
        q: "What are the best coworking lounge spaces in Trichy, India for freelancers and startups?",
        a: "The best coworking spaces combine affordable options, reliable infrastructure, flexible commitments, and supportive communities, including a technical training institute. Universe Coworks serves 500+ freelancers and startups with hot desks, high-speed Wi-Fi, meeting rooms, and regular networking events. Our month-to-month plans eliminate long-term risk while providing professional environments that enhance productivity and credibility."
    },
    {
        q: "Which coworking spaces in Trichy offer private office cabins or dedicated desks in a commercial zone?",
        a: "Universe Coworks provides both dedicated desks with lockable storage and personal workspace, plus private office cabins for 2-10 people. Private office cabins include soundproof walls, lockable doors, customizable layouts, and a collaborative environment with 24/7 access options. Dedicated desks offer reserved spots in shared areas with all coworking amenities."
    },
    {
        q: "Are there coworking spaces in Trichy, particularly in the Cantonment area and Thillai Nagar, with free Wi-Fi and meeting rooms of varying sizes, like 700 sq ft?",
        a: "Yes, virtually all quality coworking spaces in Trichy include complimentary high-speed Wi-Fi (typically 50-100 Mbps fiber) as standard. Meeting rooms are available for member bookings with discounted rates. Rooms feature video conferencing equipment, projectors, and whiteboards."
    },
    {
        q: "What amenities do coworking spaces in Trichy, including Khee Coworks and Renganathapuram, usually provide?",
        a: "Standard amenities include high-speed fiber internet, power backup, ergonomic furniture, printing/scanning, pantry with complimentary beverages, meeting rooms with modern interiors, air conditioning, housekeeping, CCTV security, and lockers. Premium spaces add phone booths, wellness rooms, community events, on-site support staff, and 24/7 access."
    },
    {
        q: "Can I book a coworking office property space in Trichy for a day or just a few hours?",
        a: "Yes. Most coworking spaces, including those near a cake shop, offer day passes for full-day hot desk access with all amenities, including laptop use. Meeting rooms can be booked hourly. Day passes include Wi-Fi, printing allowances, and pantry access. Ideal for visiting professionals, trial experiences, or occasional workspace needs."
    },
    {
        q: "Do coworking spaces in Vayalur, Trichy offer virtual office services like a mobile shop?",
        a: "Yes. Virtual office services provide professional business addresses for company registration, GST filing, and correspondence without physical workspace costs. Services include mail handling, forwarding, reception, and typically some complimentary hot desk access or meeting room hours for when physical presence is needed, often in a carpet area suitable for your needs."
    },
    {
        q: "Are coworking spaces in Trichy, like Trichy Coworks, suitable for hosting workshops or events in a space of 1000 sq. ft. or more?",
        a: "Absolutely. Many coworking spaces provide dedicated event venues for 15-100 people with professional AV equipment, flexible seating, and full event support. Universe Coworks offers workshop rooms, seminar halls, and multi-purpose spaces with technical assistance, catering coordination, and promotional support."
    },
    {
        q: "Which coworking spaces in Trichy have flexible membership plans that include furnishing options?",
        a: "Most quality coworking spaces offer multiple flexible options: day passes, weekly plans, monthly memberships with no minimum commitment, quarterly packages, and annual plans. Whether you are a single entrepreneur, a freelancer, or part of a growing team of individuals, Universe Coworks provides a vibrant and collaborative workspace with true month-to-month flexibility, no penalties for downgrading or pausing memberships, plus easy upgrades as needs change."
    }
];

export default function CoworkingSpacePageContent() {
    const { openPopup } = usePopup();

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#00a896]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What are the best coworking lounge spaces in Trichy, India for freelancers and startups?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The best coworking spaces combine affordable options, reliable infrastructure, flexible commitments, and supportive communities, including a technical training institute. Universe Coworks serves 500+ freelancers and startups with hot desks, high-speed Wi-Fi, meeting rooms, and regular networking events. Our month-to-month plans eliminate long-term risk while providing professional environments that enhance productivity and credibility."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which coworking spaces in Trichy offer private office cabins or dedicated desks in a commercial zone?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Universe Coworks provides both dedicated desks with lockable storage and personal workspace, plus private office cabins for 2–10 people. Private office cabins include soundproof walls, lockable doors, customizable layouts, and a collaborative environment with 24/7 access options. Dedicated desks offer reserved spots in shared areas with all coworking amenities."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there coworking spaces in Trichy, particularly in the Cantonment area and Thillai Nagar, with free Wi-Fi and meeting rooms of varying sizes, like 700 sq ft?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, virtually all quality coworking spaces in Trichy include complimentary high-speed Wi-Fi (typically 50–100 Mbps fiber) as standard. Meeting rooms are available for member bookings with discounted rates. Rooms feature video conferencing equipment, projectors, and whiteboards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What amenities do coworking spaces in Trichy, including Khee Coworks and Renganathapuram, usually provide?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Standard amenities include high-speed fiber internet, power backup, ergonomic furniture, printing/scanning, pantry with complimentary beverages, meeting rooms with modern interiors, air conditioning, housekeeping, CCTV security, and lockers. Premium spaces add phone booths, wellness rooms, community events, on-site support staff, and 24/7 access."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I book a coworking office property space in Trichy for a day or just a few hours?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Most coworking spaces offer day passes for full-day hot desk access with all amenities. Meeting rooms can be booked hourly. Day passes include Wi-Fi, printing allowances, and pantry access, making them ideal for visiting professionals, trial experiences, or occasional workspace needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do coworking spaces in Vayalur, Trichy offer virtual office services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Virtual office services provide professional business addresses for company registration, GST filing, and correspondence without physical workspace costs. Services include mail handling, forwarding, reception, and usually some complimentary hot desk access or meeting room hours when physical presence is required."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are coworking spaces in Trichy suitable for hosting workshops or events in a space of 1000 sq. ft. or more?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Many coworking spaces provide dedicated event venues for 15–100 people with professional AV equipment, flexible seating, and full event support. Universe Coworks offers workshop rooms, seminar halls, and multi-purpose spaces with technical assistance, catering coordination, and promotional support."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which coworking spaces in Trichy have flexible membership plans that include furnishing options?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most quality coworking spaces offer flexible options such as day passes, weekly plans, monthly memberships with no minimum commitment, quarterly packages, and annual plans. Universe Coworks provides month-to-month flexibility with no penalties for downgrading or pausing memberships, easy upgrades, and fully furnished workspaces suitable for freelancers, entrepreneurs, and growing teams."
                                }
                            }
                        ]
                    })
                }}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://universecoworks.com/"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Workspace solutions",
                        "item": "https://universecoworks.com/best-workspace-solutions-in-trichy"
                    }, {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Co working space",
                        "item": "https://universecoworks.com/coworking-space-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0f1a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop"
                        alt="Coworking Space Trichy"
                        fill
                        priority
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold   tracking-wider mb-6">
                                Premium Office Spaces
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Finding the Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Coworking Space</span> Trichy for You
                            </h1>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                    <span className="text-sm font-medium">500+ Happy Members</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                    <span className="text-sm font-medium">Prime Location</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                    <span className="text-sm font-medium">Rated 4.8/5 Stars</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                    <span className="text-sm font-medium">No Long-Term Commitments</span>
                                </div>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-medium">
                                Flexible pricing day passes to annual plans available for our premium office spaces. Walk in and start working today.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={openPopup}
                                    className="px-10 py-5 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1"
                                >
                                    Book Your Free Tour
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, t: "Prime Location", d: "Easy access to transport" },
                                { icon: Zap, t: "Instant Setup", d: "Walk in and start today" },
                                { icon: Smartphone, t: "Flexible Pricing", d: "Day passes to annual" },
                                { icon: Users, t: "Vibrant Community", d: "Network with 500+ pro" }
                            ].map((card, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-all">
                                    <div className="h-12 w-12 bg-[#00a896] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                                        <card.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="text-white font-bold mb-1">{card.t}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{card.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Why Choose Trichy Coworks Coworking Space?</h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Trichy Coworks offers a vibrant coworking space that fosters creativity and collaboration. With modern amenities, flexible plans, and a community of like-minded professionals, it’s the ideal environment for productivity.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-50 flex items-start gap-6">
                                <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                    <Award className="h-6 w-6 text-[#273a96]" />
                                </div>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed  ">
                                    "Our Commitment: Transparent pricing, flexible commitments, and responsive support. No hidden fees, no complicated contracts—just professional workspace when you need it."
                                </p>
                            </div>
                            <div className="prose prose-sm text-gray-500 font-medium">
                                <p>Since its founding, Universe Coworks has served over 500 freelancers, startups, and remote teams with premium commercial space office solutions. Our facilities are purpose-built based on member feedback, ensuring every amenity serves a real productivity need.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[25rem] lg:h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
                                <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" alt="Modern coworking space Trichy with professionals working together, highlighting 500+ active successes." fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-[#00a896] p-12 rounded-[2.5rem] text-white shadow-2xl hidden lg:block">
                                <p className="text-5xl font-black">500+</p>
                                <p className="text-xs font-bold   tracking-widest mt-2">Active Successes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience Types */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold font-headings">Tailored for Your Growth</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Freelancers */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-8 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                            <div className="h-20 w-20 bg-blue-50 text-[#273a96] rounded-[2rem] flex items-center justify-center">
                                <TrendingUp className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-headings">For Freelancers</h3>
                            <p className="text-gray-500 font-medium text-sm  ">Escape home distractions and coffee shop limitations. Dedicated work zones for remote workers.</p>
                            <ul className="space-y-4 text-left w-full text-sm font-medium text-gray-600">
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Hot desks with zero commitment</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Professional business address</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Meeting rooms for client pitches</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Networking opportunities</li>
                            </ul>
                        </div>

                        {/* Startups */}
                        <div className="bg-[#273a96] p-12 rounded-[3.5rem] shadow-2xl space-y-8 flex flex-col items-center text-center text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
                            <div className="h-20 w-20 bg-white/20 text-white rounded-[2rem] flex items-center justify-center backdrop-blur-md">
                                <Zap className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-headings">For Startups</h3>
                            <p className="text-blue-100 font-medium text-sm  ">Scale smoothly from solo founder to 10-person team without relocating.</p>
                            <ul className="space-y-4 text-left w-full text-sm font-medium">
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> 60-70% cost savings</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Investor-ready meeting rooms</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Access to mentor networks</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Month-to-month flexibility</li>
                            </ul>
                        </div>

                        {/* Teams */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-8 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                            <div className="h-20 w-20 bg-teal-50 text-[#00a896] rounded-[2rem] flex items-center justify-center">
                                <Building2 className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-headings">For Remote Teams</h3>
                            <p className="text-gray-500 font-medium text-sm  ">Establish professional operations in Trichy without full office overhead.</p>
                            <ul className="space-y-4 text-left w-full text-sm font-medium text-gray-600">
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Registered business addresses</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> On-demand desk access</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Mail & courier handling</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896]" /> Local presence setup</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Amenities */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings text-gray-900  tracking-tighter">Premium Amenities Included</h2>
                        <p className="text-xl text-gray-500 font-medium">Infrastructure that powers productivity. Every essential, redefined.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="h-16 w-16 bg-blue-50 text-[#273a96] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#273a96] group-hover:text-white transition-all">
                                    <Wifi className="h-8 w-8" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Infrastructure That Powers Productivity</h4>
                                    <p className="text-lg text-gray-500 leading-relaxed font-medium">Dedicated 100 Mbps fiber connection with backup lines ensuring zero downtime. Separate guest network for client visits.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="h-16 w-16 bg-teal-50 text-[#00a896] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00a896] group-hover:text-white transition-all">
                                    <Layout className="h-8 w-8" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Comfort & Convenience</h4>
                                    <p className="text-lg text-gray-500 leading-relaxed font-medium">Herman Miller-quality chairs tested for 8+ hour comfort, height-adjustable desks, and task lighting in a smart layout.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="h-16 w-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                    <Coffee className="h-8 w-8" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Premium Pantry & Wellness</h4>
                                    <p className="text-lg text-gray-500 leading-relaxed font-medium">Unlimited filter coffee, assorted teas, and purified water. Phone booths for private calls and collaborative breakout zones.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[550px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
                            <Image src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" alt="Woman using a tablet in a secure server room at a modern coworking space Trichy with advanced IT infrastructure." fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-gray-900 to-transparent text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <Lock className="h-8 w-8 text-[#00a896]" />
                                    <h4 className="text-2xl font-bold">24/7 Secure Access</h4>
                                </div>
                                <p className="text-sm opacity-60 font-medium">Smart card entry tracking and comprehensive CCTV coverage with 30-day recording retention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexible Booking */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Try Before You Commit</h2>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">Experience our coworking space in Thillainagar, Trichy with flexible day passes perfect for testing the environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-gray-100 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-[#00a896] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="h-16 w-16 bg-blue-50 text-[#273a96] rounded-2xl flex items-center justify-center">
                                    <CalendarCheck className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-black text-[#273a96]">Flexible Day Passes</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Full amenity access with no long-term commitment required. Book online or walk in based on availability.</p>
                                <button
                                    onClick={openPopup}
                                    className="inline-flex items-center text-[#273a96] font-bold hover:underline gap-2 group/link"
                                >
                                    Reserve Your Desk <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-gray-100 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-[#273a96] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="h-16 w-16 bg-teal-50 text-[#00a896] rounded-2xl flex items-center justify-center">
                                    <MessageSquare className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-black text-[#00a896]">Hourly Meeting Rooms</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">Need presentation space without a full membership? Book meeting rooms hourly for client meetings or interviews.</p>
                                <Link href="/meeting-room-in-trichy" className="inline-flex items-center text-[#00a896] font-bold hover:underline gap-2 group/link">
                                    View All Rooms <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-20 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 border-none rounded-2xl px-10 shadow-sm overflow-hidden">
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-gray-900 hover:no-underline hover:text-[#00a896] text-left py-8">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-10 font-medium">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] p-16 md:p-24 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Member Success Stories</h2>
                            <p className="text-lg text-gray-500 font-medium  ">"Scaled from 1 to 12 employees without changing locations" – Rajesh K., SaaS Startup Founder</p>
                            <div className="flex gap-4">
                                <div className="h-12 w-12 bg-[#273a96] rounded-xl flex items-center justify-center text-white"><Star className="h-6 w-6" /></div>
                                <div>
                                    <p className="font-bold text-gray-900">Proven Track Record</p>
                                    <p className="text-xs text-gray-500 font-medium font-headings tracking-widest  ">4.8/5 Rating based on 200+ reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative h-64 rounded-[3rem] overflow-hidden shadow-2xl skew-y-0 lg:skew-y-1">
                            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" alt="Team Work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            <div className="absolute inset-0 bg-[#273a96] opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-[#0a0f1a] opacity-90"></div>
                        <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200" alt="CTA BG" fill sizes="100vw" className="object-cover opacity-10" />
                        <div className="relative z-10 max-w-4xl mx-auto text-white">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white leading-tight">
                                Ready to Experience the Best Coworking Space in Trichy?
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Book Your Free Tour Today. See our facilities, meet our community, and test our workspace before committing. Tours available Mon–Sat, 10 AM–6 PM.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <button
                                    onClick={openPopup}
                                    className="px-4 py-4 bg-[#00a896] text-white rounded-full font-black text-md hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group   tracking-widest text-sm"
                                >
                                    SCHEDULE YOUR FREE VISIT <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button
                                    onClick={openPopup}
                                    className="px-8 py-4 bg-white text-[#273a96] rounded-full font-black text-md hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center"
                                >
                                    Call Our Team
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-6">
                        <p className="font-bold text-gray-500   tracking-widest text-xs">A Community-First Approach</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-40">
                            <div className="flex items-center gap-2"><Heart className="h-4 w-4" /> Networking Events</div>
                            <div className="flex items-center gap-2"><Heart className="h-4 w-4" /> Skill-Sharing</div>
                            <div className="flex items-center gap-2"><Heart className="h-4 w-4" /> Mentorship</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
