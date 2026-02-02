import { Metadata } from 'next';
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
    Building2,
    LockKeyhole,
    CheckSquare,
    PackageCheck,
    Maximize2,
    Presentation,
    Megaphone,
    Briefcase
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Best Workspace Solutions in Trichy for Your Business | Universe Coworks',
    description: 'Uncover innovative Workspace Solutions in Trichy to transform your office environment. Check out our blog for insights on optimizing your workspace.',
    alternates: {
        canonical: 'https://universecoworks.com/best-workspace-solutions-in-trichy',
    }
};

const faqs = [
    {
        q: "What are the best coworking spaces in Tiruchirappalli for startups?",
        a: "The best coworking spaces offer affordable pricing, flexible plans, robust infrastructure, and a supportive community. Look for high-speed internet, meeting rooms, networking events, and scalability options as your team grows."
    },
    {
        q: "Are there affordable office space solutions near Isha Yoga Center in Trichy?",
        a: "Yes. Shared office and coworking solutions start from a few hundred rupees per day, with monthly plans available at competitive rates. This eliminates upfront furniture costs and maintenance expenses while providing premium amenities."
    },
    {
        q: "What facilities are included in shared office spaces?",
        a: "Typical facilities include high-speed Wi-Fi, power backup, ergonomic furniture, printing/scanning, pantry with refreshments, housekeeping, air conditioning, meeting room access, and security systems."
    },
    {
        q: "How do virtual office services work in Trichy?",
        a: "Virtual offices provide a registered business address for company registration and mail handling without renting physical space. Services include correspondence management and optional meeting room access, as well as on-demand access to coworking desks or meeting rooms."
    },
    {
        q: "Do coworking spaces in Mumbai offer private cabins?",
        a: "Yes. Most coworking spaces in Trichy offer private cabins for teams (2–10 people) and dedicated desks for individuals, providing options for both collaborative and confidential work environments."
    },
    {
        q: "How can I book a workspace for short durations?",
        a: "Daily passes, weekly plans, and monthly memberships are available through online booking or direct inquiries. Many spaces offer trial passes to experience the environment before committing."
    },
    {
        q: "What should I consider when choosing a workspace?",
        a: "Key criteria include location accessibility, internet speed, meeting room availability, pricing transparency, membership flexibility, community atmosphere, security features, and scalability options."
    }
];

export default function WorkspaceSolutionsPage() {
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
                                "name": "What are the best coworking spaces in Tiruchirappalli for startups?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The best coworking spaces offer affordable pricing, flexible plans, strong infrastructure, and a supportive community. Key features to look for include high-speed internet, meeting rooms, networking events, and scalability options as your team grows."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there affordable office space solutions near Isha Yoga Center in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Shared office and coworking solutions are available starting from a few hundred rupees per day, with competitive monthly plans. These options remove upfront furniture and maintenance costs while providing premium amenities."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What facilities are included in shared office spaces?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Facilities typically include high-speed Wi-Fi, power backup, ergonomic furniture, printing and scanning, a pantry with refreshments, housekeeping, air conditioning, meeting room access, and security systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do virtual office services work in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Virtual offices provide a registered business address for company registration and mail handling without renting physical space. Services include correspondence management and optional access to meeting rooms, coworking desks, or office spaces when required."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do coworking spaces in Trichy offer private cabins?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Most coworking spaces in Trichy offer private cabins for teams of 2–10 people and dedicated desks for individuals, supporting both collaborative and confidential working environments."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I book a workspace for short durations?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can book workspaces using daily passes, weekly plans, or monthly memberships through online booking platforms or direct inquiries. Many spaces also provide trial passes to experience the workspace before committing."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What should I consider when choosing a workspace?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Important factors include location accessibility, internet speed, meeting room availability, transparent pricing, membership flexibility, community environment, security measures, and scalability options."
                                }
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0f1a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop"
                        alt="Team of freelancers and startup professionals collaborating in a modern meeting room, showcasing a flexible workspace solution in Trichy."
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold uppercase tracking-wider mb-6">
                            Empowering Businesses
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Workspace Solutions</span> in Trichy: Boost Your Business
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12 font-light">
                            Transform your office environment with innovative solutions designed for modern enterprises, startups, and remote professionals.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-10 py-5 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1">
                                Book Your Workspace Now
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                Schedule a Tour
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold font-headings leading-tight">Why Choose Our Workspace Solutions in Trichy?</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TrendingUp,
                                t: "Cost Efficiency",
                                d: "Pay only for the space you need. Avoid high deposits and furnishing expenses while accessing any available desk as needed."
                            },
                            {
                                icon: Maximize2,
                                t: "Flexibility",
                                d: "Scale your workspace up or down seamlessly. Move from a hot desk to a dedicated desk to a private cabin with ease."
                            },
                            {
                                icon: Building2,
                                t: "Professional Infrastructure",
                                d: "Fully equipped from day one. High-speed internet, power backup, and modern furniture ready for immediate use."
                            },
                            {
                                icon: MapPin,
                                t: "Prime Location",
                                d: "Accessible workspace in Thillai Nagar, Trichy's business district with close proximity to public transport hubs."
                            },
                            {
                                icon: Users,
                                t: "Community & Networking",
                                d: "Connect with entrepreneurs and industry professionals through regular events and collaborative shared spaces."
                            },
                            {
                                icon: ShieldCheck,
                                t: "Seamless Management",
                                d: "Zero operational hassles. We handle housekeeping, utilities, and security so you can focus on your business growth."
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-[#273a96] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#00a896] transition-colors group-hover:rotate-6">
                                    <benefit.icon className="h-7 w-7 text-[#273a96] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-all">{benefit.t}</h3>
                                <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-blue-100 transition-all">{benefit.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold font-headings text-gray-900 border-l-[12px] border-[#00a896] pl-6 inline-block">Our Workspace Solutions</h2>
                    </div>

                    <div className="space-y-16">
                        {/* Coworking & Dedicated */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Solution 1: Coworking */}
                            <div className="bg-white rounded-[4rem] overflow-hidden shadow-sm flex flex-col h-full border border-gray-100 group hover:shadow-2xl transition-all duration-700">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" alt="Team meeting in a modern conference room, showcasing a collaborative workspace solution in Trichy." fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute top-6 left-6 px-6 py-2 bg-[#00a896] text-white text-xs font-black uppercase tracking-widest rounded-full">Freelancers & Startups</div>
                                </div>
                                <div className="p-12 flex-1 space-y-6">
                                    <h3 className="text-3xl font-black text-gray-900">Coworking Spaces</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        Experience collaborative work environments perfect for remote workers and entrepreneurs. Choose any available workstation each day—ideal for professionals who value variety.
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#273a96] mb-3">Key Features:</h4>
                                        <p className="text-md text-gray-500 leading-normal">High-speed fiber, ergonomic seating, unlimited coffee, breakout zones, and monthly networking plans.</p>
                                    </div>
                                    <Link href="/coworking-space-trichy" className="inline-flex items-center text-[#00a896] font-bold gap-2 group/link">
                                        Explore Coworking <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Solution 2: Dedicated Desk */}
                            <div className="bg-white rounded-[4rem] overflow-hidden shadow-sm flex flex-col h-full border border-gray-100 group hover:shadow-2xl transition-all duration-700">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image src="https://images.pexels.com/photos/7580913/pexels-photo-7580913.jpeg" alt="Professional woman working at a reserved seating desk, representing a flexible workspace solution in Trichy." fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute top-6 left-6 px-6 py-2 bg-[#273a96] text-white text-xs font-black uppercase tracking-widest rounded-full">Reserved Seating</div>
                                </div>
                                <div className="p-12 flex-1 space-y-6">
                                    <h3 className="text-3xl font-black text-gray-900">Dedicated Desks</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        Get your own reserved workstation in our shared coworking environment. Consistency with the flexibility to personalize your space, plus lockable storage.
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#273a96] mb-3">Key Features:</h4>
                                        <p className="text-md text-gray-500 leading-normal">Fixed desk location, personal storage cabinet, business address usage, and priority meeting room booking.</p>
                                    </div>
                                    <Link href="/affordable-dedicated-desk-in-trichy" className="inline-flex items-center text-[#273a96] font-bold gap-2 group/link">
                                        Reserve Your Desk <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Private Cabin Solution */}
                        <div className="bg-[#0a0f1a] rounded-[5rem] overflow-hidden shadow-2xl relative">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 p-12 lg:p-24 space-y-10 text-white relative z-10">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">Premium Enclosure</span>
                                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Private Office Cabins</h3>
                                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                                        Secure, soundproof cabins for teams of 2–10 members requiring privacy and focused work environments. Fully furnished with customizable layouts.
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                        {[
                                            { icon: Lock, t: "Acoustic Privacy" },
                                            { icon: Clock, t: "24/7 Access" },
                                            { icon: CheckSquare, t: "Branded Options" },
                                            { icon: Layout, t: "Whiteboard Ready" }
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                                                    <feat.icon className="h-5 w-5 text-blue-500" />
                                                </div>
                                                <span className="text-sm font-bold opacity-80">{feat.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-8">
                                        <Link href="/affordable-private-office-space-in-trichy" className="px-12 py-5 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-700 transition-all inline-flex items-center">
                                            View Private Offices <ArrowRight className="ml-3 h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 relative min-h-[500px]">
                                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" alt="Modern private office cabins with soundproof enclosures, showcasing a premium workspace solution in Trichy." fill className="object-cover" />
                                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0f1a] to-transparent hidden lg:block"></div>
                                </div>
                            </div>
                        </div>

                        {/* Managed Office Solutions */}
                        <div className="bg-white rounded-[5rem] p-12 lg:p-24 border border-gray-100 shadow-sm">
                            <div className="flex flex-col lg:flex-row gap-20 items-center">
                                <div className="lg:w-2/5 space-y-8">
                                    <h3 className="text-4xl font-black text-gray-900">Managed Office Solutions</h3>
                                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                                        Fully managed office spaces for teams of 10–50 members with exclusive floors and enterprise infrastructure. Eliminate operational hassles completely.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Private suite with custom branding",
                                            "In-office meeting rooms & pantry",
                                            "Dedicated IT infrastructure & utilities",
                                            "Professional facilities management"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-700 bg-gray-50 p-4 rounded-2xl">
                                                <div className="h-6 w-6 bg-[#00a896] text-white rounded-full flex items-center justify-center shrink-0 text-[10px]">★</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/managed-office-space-in-trichy" className="inline-flex items-center text-gray-900 font-black gap-2 group hover:underline underline-offset-8">
                                        Request Managed Suite <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                                <div className="lg:w-3/5 grid grid-cols-2 gap-4">
                                    <div className="relative h-72 w-full rounded-[3rem] overflow-hidden shadow-xl mt-12">
                                        <Image src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=600" alt="Managed Office 1" fill className="object-cover" />
                                    </div>
                                    <div className="relative h-72 w-full rounded-[3rem] overflow-hidden shadow-xl">
                                        <Image src="https://images.pexels.com/photos/8068878/pexels-photo-8068878.jpeg" alt="Managed Office 2" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event & Meetings */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Event Spaces */}
                            <div className="bg-gray-900 rounded-[4rem] p-12 lg:p-16 text-white space-y-8 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#00a896] opacity-10 blur-3xl rounded-full"></div>
                                <Megaphone className="h-12 w-12 text-[#00a896] mb-4" />
                                <h3 className="text-3xl font-black text-white">Event & Training Spaces</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    Versatile event spaces accommodating 15–100 people for workshops, seminars, and product launches. Full technical assistance included.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {["Configurable Seating", "Presentation Stage", "AV Systems", "Technical Assistance"].map((tag, i) => (
                                        <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                                <div className="pt-8">
                                    <Link href="/affordable-training-room-in-trichy" className="text-white font-black underline underline-offset-8 decoration-2 decoration-[#00a896] hover:text-[#00a896] transition-colors">
                                        Book Event Venue
                                    </Link>
                                </div>
                            </div>

                            {/* Meeting Rooms */}
                            <div className="bg-[#273a96] rounded-[4rem] p-12 lg:p-16 text-white space-y-8 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 h-40 w-40 bg-white opacity-5 blur-3xl rounded-full"></div>
                                <Presentation className="h-12 w-12 text-blue-300 mb-4" />
                                <h3 className="text-3xl font-black text-white">Meeting & Conference Facilities</h3>
                                <p className="text-blue-100 font-light leading-relaxed">
                                    Professional meeting spaces equipped with HD projectors and video conferencing for 4–20 people. Hourly or half-day sessions available.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {["Smart TV/Projector", "Video Conferencing", "Whiteboards", "Soundproof"].map((tag, i) => (
                                        <span key={i} className="px-5 py-2 bg-white/10 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                                <div className="pt-8">
                                    <Link href="/meeting-room-in-trichy" className="text-white font-black underline underline-offset-8 decoration-2 decoration-blue-300 hover:text-blue-300 transition-colors">
                                        Reserve Meeting Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Highlight */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#f8fafc] rounded-[5rem] p-12 lg:p-24 border border-gray-100">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-4xl font-bold font-headings">Standard Facilities Included</h2>
                                <p className="text-lg text-gray-500 font-light">
                                    All our workspace solutions in Trichy, India include every essential utility to power your business from day one.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { icon: Wifi, t: "Broadband Connectivity" },
                                        { icon: Zap, t: "Uninterrupted Power" },
                                        { icon: Printer, t: "Printing & Scanning" },
                                        { icon: Coffee, t: "Complimentary Pantry" },
                                        { icon: Sparkles, t: "Daily Housekeeping" },
                                        { icon: Layout, t: "Ergonomic Furniture" },
                                        { icon: ShieldCheck, t: "CCTV Security" },
                                        { icon: Briefcase, t: "On-site Support" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-200">
                                                {item.icon === Sparkles ? <CheckCircle2 className="h-6 w-6 text-[#00a896]" /> : <item.icon className="h-6 w-6 text-[#00a896]" />}
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="relative h-[550px] w-full rounded-[4rem] overflow-hidden shadow-2xl skew-y-1">
                                    <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200" alt="Ready-to-use office desk with computer and plants, highlighting a zero setup workspace solution in Trichy." fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 hidden md:block">
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Operational Ready</p>
                                    <p className="text-3xl font-black text-[#273a96]">Zero Setup Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Process Steps */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-headings">How to Book Your Workspace</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { s: "Step 01", t: "Explore Plans", d: "Browse our workspace solutions online or schedule a free site tour." },
                            { s: "Step 02", t: "Choose Duration", d: "Select your duration—from a day pass to long-term monthly plans." },
                            { s: "Step 03", t: "Easy Registration", d: "Complete a simple digital registration with zero upfront hidden costs." },
                            { s: "Step 04", t: "Start Working", d: "Walk in and start working immediately with our fully equipped setup." }
                        ].map((step, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 relative group overflow-hidden h-72 flex flex-col justify-end">
                                <div className="absolute top-10 left-10 text-6xl font-black text-gray-200 group-hover:text-[#00a896] group-hover:opacity-10 transition-all">{step.s}</div>
                                <div className="relative z-10 space-y-3">
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#00a896] transition-colors">{step.t}</h4>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-20 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border-none rounded-2xl px-10 shadow-sm overflow-hidden">
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-gray-900 hover:no-underline hover:text-[#00a896] text-left py-8">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-10 font-light">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-[#0a0f1a] opacity-90"></div>
                        <Image src="https://images.unsplash.com/photo-1549719385-af4ebca2d2fa?q=80&w=1200" alt="CTA BG" fill className="object-cover opacity-10" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                                Ready to Boost Your Business Performance?
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
                                Whether you're a freelancer seeking community, a startup needing private space, or an entrepreneur requiring a virtual office address, Trichy Coworks delivers flexible solutions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/contact" className="px-12 py-5 bg-[#00a896] text-white rounded-full font-black text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group uppercase tracking-widest text-sm">
                                    BOOK WORKSPACE ONLINE <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link href="/contact" className="px-12 py-5 bg-white text-[#273a96] rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center">
                                    SCHEDULE A FREE TOUR
                                </Link>
                            </div>
                            <p className="mt-12 text-sm text-gray-400 font-bold tracking-widest uppercase">Combine affordability, professionalism, and community</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

// Helper component for housekeeping icon if Sparkles isn't imported correctly
function Sparkles(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="m5 3 1 1" />
            <path d="m19 3-1 1" />
            <path d="m5 19 1-1" />
            <path d="m19 19-1-1" />
        </svg>
    );
}

