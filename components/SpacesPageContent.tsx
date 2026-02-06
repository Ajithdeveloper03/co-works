'use client';

import Image from 'next/image';
import { Check, Users, Monitor, Lock, Coffee, Projector, Calendar, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

const spaces = [
    {
        id: 'coworking',
        title: 'Coworking Space',
        subtitle: 'Open Collaboration Environment',
        desc: 'Designed for Startups, Freelancers, and Remote Professionals. Our open coworking environment combines professional infrastructure with community energy. High-speed fiber internet, ergonomic workstations, and dedicated focus zones create the ideal setting for deep work.',
        idealFor: 'Early-stage founders, Freelancers, Remote employees, Digital nomads',
        features: ['Flexible seating (Hot/Fixed)', '24/7 Facility Access', 'Member-only Events', 'Unlimited Coffee & WiFi'],
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-white',
        reverse: false
    },
    {
        id: 'dedicated',
        title: 'Dedicated Desks',
        subtitle: 'Your Fixed Workstation',
        desc: 'Consistency and Focus in a Shared Professional Environment. Dedicated desks provide assigned workstations with personal storage. Unlike hot desking, offers the same location every day—ideal for professionals who value routine.',
        idealFor: 'Consultants, Content Creators, Corporate Transitions',
        features: ['Fixed desk with Lockable Storage', 'Ergonomic Chair', 'Personal Nameplate', 'Meeting Room Credits'],
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-blue-50',
        reverse: true
    },
    {
        id: 'private',
        title: 'Private Offices',
        subtitle: 'Lockable Team Spaces',
        desc: 'Fully Furnished Offices for 2–10 Member Teams. Deliver the autonomy of dedicated workspace with the flexibility of coworking. Lockable doors ensure security for equipment and confidential work.',
        idealFor: 'Funded Startups, Agencies, Satellite Offices',
        features: ['Customizable Branding', 'Dedicated Phone Line', 'Furniture Configuration', 'Priority Meeting Room Booking'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-white',
        reverse: false
    },
    {
        id: 'managed',
        title: 'Team / Managed Offices',
        subtitle: 'Turnkey Infrastructure',
        desc: 'Custom-Built Spaces for Scaling Teams (10–50+). Universe Coworks handles facility setup, utilities, housekeeping, and IT support—allowing leadership to focus exclusively on business.',
        idealFor: 'Offshore Development Centers, BPO Operations, Scale-ups',
        features: ['Dedicated Cabins for Leadership', 'Custom Workstation Layouts', 'Independent HVAC & Network', 'On-site Admin Support'],
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-gray-50',
        reverse: true
    },
    {
        id: 'meeting',
        title: 'Meeting Rooms',
        subtitle: 'Professional Client Interaction',
        desc: 'Hourly Rental Rooms for Interviews, Pitches, and Client Meetings. Equipped with 55-inch displays and soundproof construction to ensure every interaction reflects professionalism.',
        idealFor: 'Client Presentations, Interviews, Investor Pitches',
        features: ['4-8 Seater Options', 'Video Conferencing (Zoom/Meet)', 'Whiteboards & Flip Charts', 'Complimentary Refreshments'],
        image: 'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg',
        color: 'bg-white',
        reverse: false
    },
    {
        id: 'conference',
        title: 'Conference Rooms',
        subtitle: 'Large-Format Presentation Facilities',
        desc: '15–30 Person Capacity for Board Meetings and Workshops. Designed for high-stakes presentations with professional AV systems including projectors and microphones.',
        idealFor: 'Board Meetings, Team Offsites, Training Programs',
        features: ['Theatre/Boardroom Seating', 'Professional Audio Systems', 'Recording Capabilities', 'Technical Support'],
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-blue-50',
        reverse: true
    },
    {
        id: 'events',
        title: 'Event & Training Spaces',
        subtitle: 'Large-Scale Gathering Venues',
        desc: '50–100 Person Capacity. Transformable venues for knowledge-sharing, community building, and corporate training. Modular furniture allows rapid reconfiguration.',
        idealFor: 'Hackathons, Product Launches, Press Conferences',
        features: ['Flexible Seating (50-100)', 'Stage with Lighting', 'Registration Desk', 'Catering Coordination'],
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=75&w=1200&auto=format&fit=crop',
        color: 'bg-white',
        reverse: false
    }
];

export default function SpacesPageContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-[#1a9ba8] py-20 lg:py-28 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Flexible Workspace Solutions</h1>
                    <p className="text-xl text-white/90">
                        Professional Office Spaces in Trichy, Tamil Nadu for Every Business Stage.
                    </p>
                </div>
            </section>

            {/* Spaces List */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-24">
                    {spaces.map((space, index) => (
                        <div key={space.id} id={space.id} className={`flex flex-col xl:flex-row ${space.reverse ? 'xl:flex-row-reverse' : ''} gap-12 items-center`}>
                            <div className="xl:w-1/2 relative group">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#1a9ba8]/20 to-blue-100' : 'from-blue-100 to-[#1a9ba8]/20'} rounded-2xl transform rotate-2 group-hover:rotate-1 transition-all duration-500`}></div>
                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                                    <Image src={space.image} alt={space.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                            <div className="xl:w-1/2 space-y-6">
                                <div className="inline-block px-3 py-1 bg-[#1a9ba8]/10 text-[#1a9ba8] rounded-full text-sm font-semibold tracking-wide uppercase">
                                    {space.subtitle}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{space.title}</h2>
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1a9ba8]">
                                    <p className="text-sm font-bold text-gray-700 mb-1">Ideal For:</p>
                                    <p className="text-sm text-gray-600">{space.idealFor}</p>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {space.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {space.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-gray-700">
                                            <Check className="h-5 w-5 text-[#20b5c4] flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <Link href="/contact" className={`inline-flex items-center px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg hover:-translate-y-1 ${index % 2 === 0 ? 'bg-[#273a96]' : 'bg-[#00a896]'}`}>
                                        Book This Space <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Flexible Membership Section */}
            <section className="bg-[#0f172a] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a896] rounded-full blur-[100px] opacity-20"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">Flexible Membership Models</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                        Scale Up or Down Without Capital Commitment. Unlike traditional leases, Universe Coworks memberships scale with your business.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
                        {[
                            { t: "Zero Deposits", d: "For coworking & dedicated desks" },
                            { t: "All-Inclusive", d: "Covers electricity, internet, housekeeping" },
                            { t: "Transparent", d: "Monthly invoices with GST compliance" },
                            { t: "Flexible", d: "Cancel or upgrade with 30-day notice" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <Shield className="h-8 w-8 text-[#00a896] mb-4" />
                                <h3 className="font-bold text-lg mb-2 text-white">{item.t}</h3>
                                <p className="text-sm text-gray-400">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Link href="/contact" className="bg-white text-[#0f172a] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                            Schedule a Tour
                        </Link>
                        <p className="mt-6 text-gray-500 text-sm">Flexible plans starting at ₹5,000/month</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
