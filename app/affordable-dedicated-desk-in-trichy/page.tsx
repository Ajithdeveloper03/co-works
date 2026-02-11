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
    Headset,
    Sparkles
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Affordable Dedicated Desk in Trichy for Rent | Universe Coworks',
    description: 'Looking for a dedicated desk in Trichy? Explore the best options available to enhance your work environment and increase your efficiency.',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-dedicated-desk-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-dedicated-desk-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Dedicated Desk in Trichy',
            },
        ],
    }
};

const faqs = [
    {
        q: "Which coworking spaces in Tiruchirappalli (Trichy) offer dedicated desks?",
        a: "Universe Coworks and several premium coworking spaces across Tiruchirappalli provide dedicated desk options. Look for facilities in business districts, Thillai Nagar, and near commercial hubs offering reserved workstations with lockable storage and comprehensive amenities."
    },
    {
        q: "Where can I find affordable dedicated desks in Trichy?",
        a: "Affordable dedicated desks are available throughout Trichy's vibrant coworking spaces, with competitive monthly memberships. Compare amenities, location accessibility, and included services when evaluating affordability. Universe Coworks offers transparent membership plans with all amenities included—no hidden fees."
    },
    {
        q: "What amenities come with dedicated desks in Trichy Coworks coworking spaces?",
        a: "Standard amenities include high-speed internet (50-100 Mbps), lockable storage cabinets, ergonomic furniture, power backup, printing facilities, meeting room access, business address usage, mail handling, pantry services with complimentary beverages, reception support, and community events."
    },
    {
        q: "Are dedicated desks available in Thillai Nagar, Trichy for remote workers?",
        a: "Yes, Thillai Nagar hosts several coworking spaces offering dedicated desks. This prime commercial area provides excellent connectivity, proximity to retail and dining, and professional environments ideal for consultants, business owners, and remote workers meeting local clients."
    },
    {
        q: "Can I book a dedicated desk on a daily basis in Trichy for large teams?",
        a: "Dedicated desks are designed for ongoing monthly use rather than daily bookings. For daily or occasional workspace needs, hot desk day passes offer better value and flexibility. Dedicated desks maximize benefits through consistent use with permanent setup and storage."
    },
    {
        q: "How do dedicated desks differ from open desks in Trichy coworking office spaces?",
        a: "Dedicated desks provide the same reserved workstation daily with lockable storage and personalization rights. Open desks (hot desks) operate first-come, first-served without guaranteed seating or storage. Dedicated desks cost more but offer consistency; open desks provide flexibility at lower rates."
    },
    {
        q: "Do coworking spaces in Trichy offer virtual office services along with dedicated desks and conference rooms?",
        a: "Yes, many spaces including Universe Coworks allow combining dedicated desk memberships with virtual office services. This provides physical workspace plus professional business address, mail handling, and call services—comprehensive solutions for consultants and small businesses."
    },
    {
        q: "Is parking available at coworking spaces in Coimbatore that provide dedicated desks in Trichy?",
        a: "Most premium coworking spaces offering dedicated desks include two-wheeler parking (often complimentary) and four-wheeler parking arrangements. Availability varies by location—confirm parking specifics when touring facilities. Universe Coworks provides secure parking at all locations."
    }
];

export default function DedicatedDeskPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#273a96]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Which coworking spaces in Tiruchirappalli (Trichy) offer dedicated desks?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Universe Coworks and several premium coworking spaces across Tiruchirappalli provide dedicated desk options. Look for facilities in business districts, Thillai Nagar, and near commercial hubs offering reserved workstations with lockable storage and comprehensive amenities."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where can I find affordable dedicated desks in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Affordable dedicated desks are available throughout Trichy’s coworking spaces with competitive monthly memberships. Compare amenities, location accessibility, and included services when evaluating affordability. Universe Coworks offers transparent membership plans with all amenities included and no hidden fees."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What amenities come with dedicated desks in Trichy Coworks coworking spaces?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Standard amenities include high-speed internet (50–100 Mbps), lockable storage cabinets, ergonomic furniture, power backup, printing facilities, meeting room access, business address usage, mail handling, pantry services with complimentary beverages, reception support, and community events."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are dedicated desks available in Thillai Nagar, Trichy for remote workers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Thillai Nagar hosts several coworking spaces offering dedicated desks. This prime commercial area provides excellent connectivity, proximity to retail and dining, and professional environments ideal for consultants, business owners, and remote workers meeting local clients."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I book a dedicated desk on a daily basis in Trichy for large teams?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Dedicated desks are intended for monthly use rather than daily bookings. For short-term or occasional needs, hot desk day passes offer better value and flexibility. Dedicated desks are best for consistent users who need permanent setup and storage."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do dedicated desks differ from open desks in Trichy coworking office spaces?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Dedicated desks provide the same reserved workstation every day with lockable storage and personalization options. Open desks (hot desks) are first-come, first-served without guaranteed seating or storage. Dedicated desks cost more but offer consistency, while open desks are more flexible and affordable."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do coworking spaces in Trichy offer virtual office services along with dedicated desks and conference rooms?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, many coworking spaces including Universe Coworks allow dedicated desk memberships to be combined with virtual office services. This includes a professional business address, mail handling, and call services, along with physical workspace and conference room access."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is parking available at coworking spaces that provide dedicated desks in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most premium coworking spaces offering dedicated desks provide two-wheeler parking, often complimentary, and arrangements for four-wheelers. Availability varies by location, so it is best to confirm during site visits. Universe Coworks provides secure parking at all locations."
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
                        "name": "Workspace Solutions",
                        "item": "https://universecoworks.com/best-workspace-solutions-in-trichy"
                    }, {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Coworking Space",
                        "item": "https://universecoworks.com/coworking-space-trichy"
                    }, {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Dedicated desk",
                        "item": "https://universecoworks.com/affordable-dedicated-desk-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Two women working together at a fixed workstation with computer and office supplies, representing a dedicated desk in Trichy."
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-3/5">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#273a96]/20 border border-[#273a96]/30 text-blue-400 text-md font-bold uppercase tracking-wider mb-6">
                                Your Guaranteed Workspace
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Find Your Perfect <span className="text-blue-500">Dedicated Desk</span> in Trichy for Rent
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-8 font-medium">
                                Professional dedicated desks with lockable storage, business address benefits, and priority amenities across India. No more searching for seats—your desk, your space, every day.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    "200+ Professionals Using Dedicated Desks",
                                    "Prime Locations Across Trichy",
                                    "Month-to-Month Flexibility",
                                    "Same Desk, Same Spot Daily"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-blue-100">
                                        <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                        <span className="text-md font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 items-center">
                                <Link href="/contact" className="px-10 py-5 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1">
                                    Book Free Tour
                                </Link>
                                <Link href="/contact" className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                    Check Availability
                                </Link>
                            </div>
                            <p className="mt-6 text-md text-gray-400 font-medium ml-2  ">
                                "Reserve your desk in 2 minutes • No long-term contract"
                            </p>
                        </div>

                        <div className="lg:w-2/5 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl skew-y-1 group">
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                                <Image src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=800" alt="Focused work environment with multiple professionals using laptops at a dedicated desk in Trichy" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-blue-300 font-black text-2xl">From ₹5,500/Mo</p>
                                <p className="text-gray-400 text-md leading-relaxed">Dedicated desks in Trichy are typically offered on month-to-month plans. Daily options may be available at select locations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Why Choose Universe Coworks</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Award, t: "Proven Track Record", d: "Over 200 professionals trust our dedicated solutions daily." },
                            { icon: Zap, t: "Flexible Commitment", d: "Month-to-month memberships with no penalties for changing plans." },
                            { icon: Users, t: "Professional Community", d: "Work alongside serious entrepreneurs and consultants." },
                            { icon: Headset, t: "Comprehensive Support", d: "On-site community managers and reception services." }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-[#273a96] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#00a896] transition-colors group-hover:rotate-6">
                                    <feature.icon className="h-8 w-8 text-[#273a96] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-all">{feature.t}</h3>
                                <p className="text-gray-500 text-md font-medium leading-relaxed group-hover:text-blue-100 transition-all">{feature.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What is Dedicated Desk */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[25rem] lg:h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl skew-x-0 lg:skew-x-1">
                                <Image src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1200" alt=".Spacious modern office with individual workstations, representing a dedicated desk in Trichy for professionals." fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[#00a896] p-12 rounded-[2.5rem] text-white shadow-2xl hidden lg:block">
                                <p className="text-4xl font-black">100%</p>
                                <p className="text-md font-bold uppercase tracking-widest mt-2">Personal Possession</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight">What is a Dedicated Desk?</h2>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                A dedicated desk in Trichy is your personally reserved workstation within a shared coworking space. While you work alongside other professionals, your specific desk belongs exclusively to you throughout your membership period.
                            </p>
                            <div className="grid grid-cols-1 gap-6 pt-6">
                                {[
                                    { icon: CalendarCheck, t: "Reserved Daily", d: "The same desk and location every day—no need to arrive early." },
                                    { icon: LockKeyhole, t: "Personal Storage", d: "Lockable cabinets or pedestals for laptops and files." },
                                    { icon: Monitor, t: "Customization Rights", d: "Add dual monitors, desk organizers, or nameplates." },
                                    { icon: Layout, t: "All Coworking Benefits", d: "Access to meeting rooms, internet, printing, and pantry." }
                                ].map((char, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="h-10 w-10 bg-[#273a96]/10 text-[#273a96] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#273a96] group-hover:text-white transition-all">
                                            <char.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#00a896] transition-colors">{char.t}</h4>
                                            <p className="text-md text-gray-500 font-medium mt-1">{char.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Comparison Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold font-headings text-center mb-20">Dedicated Desk vs Hot Desk</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 bg-gray-50 rounded-[4rem] border border-gray-100 space-y-8 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                            <div className="text-[#00a896] font-black text-xl bg-teal-50 inline-block px-6 py-2 rounded-full mb-4">Hot Desks</div>
                            <h3 className="text-3xl font-black text-gray-900">Flexible Seating</h3>
                            <p className="text-gray-500 font-medium leading-relaxed   border-l-4 border-teal-200 pl-6">"Choose any available workstation when you arrive. Maximum flexibility, no guaranteed location."</p>
                            <div className="space-y-4">
                                <p className="font-bold text-md uppercase tracking-widest text-[#00a896]">Best For:</p>
                                <ul className="grid grid-cols-1 gap-3">
                                    {["Freelancers with irregular schedules", "Digital nomads", "Occasional users", "Varied seating preference"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-md text-gray-600 font-medium">
                                            <ArrowRight className="h-4 w-4 text-teal-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-12 bg-[#273a96] rounded-[4rem] text-white space-y-8 shadow-3xl transform transition-all hover:-translate-y-2">
                            <div className="text-blue-300 font-black text-xl bg-white/10 inline-block px-6 py-2 rounded-full mb-4">Dedicated Desks</div>
                            <h3 className="text-3xl font-black">Reserved Workstations</h3>
                            <p className="text-blue-100 font-medium leading-relaxed   border-l-4 border-blue-400/30 pl-6">"Permanent assigned seating with lockable storage and personalization. You own your spot."</p>
                            <div className="space-y-4">
                                <p className="font-bold text-md uppercase tracking-widest text-blue-300">Best For:</p>
                                <ul className="grid grid-cols-1 gap-3">
                                    {["Professionals needing consistency", "Consultants meeting regular clients", "Developers with multi-monitor setups", "Building routine relationships"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-md text-blue-100 font-medium opacity-90">
                                            <ArrowRight className="h-4 w-4 text-white" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-[#f8fafc] p-10 rounded-[3rem] text-center border border-gray-100">
                        <p className="text-gray-500 font-medium leading-relaxed">
                            <span className="font-black text-[#273a96] uppercase tracking-widest text-md block mb-4">Key Difference: Consistency & Storage</span>
                            Hot desks offer flexibility and lower cost; dedicated desks provide stability, personal space, and professional credibility through consistent workspace usage.
                        </p>
                    </div>
                </div>
            </section >

            {/* Locations section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-4">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Which Coworking Spaces in Trichy Offer Dedicated Desks?</h2>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                Universe Coworks provides dedicated desk solutions across multiple Trichy locations including Thillai Nagar, Cantonment, and central business commercial zones.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { t: "Prime Locations", d: "Situated in accessible business areas with proximity to transport hubs." },
                                    { t: "Professional Environment", d: "Focused atmospheres designed for productivity and serious work." },
                                    { t: "Flexible Terms", d: "Month-to-month memberships. Upgrade, downgrade, or pause anytime." },
                                    { t: "Community Access", d: "Participate in networking events and skill-sharing workshops." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-[#273a96] group-hover:bg-[#273a96] group-hover:text-white transition-all">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.t}</h4>
                                            <p className="text-md text-gray-500 mt-1">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="relative h-64 lg:h-96 w-full rounded-[3rem] overflow-hidden shadow-2xl mt-12">
                                <Image src="https://images.pexels.com/photos/7438096/pexels-photo-7438096.jpeg" alt="Trichy Office" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <div className="relative h-64 lg:h-96 w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg" alt="Dedicated Space" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                        </div>
                    </div >
                </div >
            </section >

            {/* Amenities Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Amenities Included with Dedicated Desks</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold font-headings text-[#273a96] border-b border-gray-100 pb-4">Infrastructure</h3>
                            {[
                                { icon: Wifi, t: "100 Mbps Internet", d: "Dedicated fiber with reliable secondary backups." },
                                { icon: Monitor, t: "Ergonomic Setup", d: "Adjustable chairs and spacious desks for 8+ hr comfort." },
                                { icon: Zap, t: "Power Backup", d: "Generator and UPS systems protecting your operations." },
                                { icon: LockKeyhole, t: "Lockable Storage", d: "Secure pedestals for laptops and valuables." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="h-10 w-10 bg-blue-50 text-[#273a96] rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">{item.t}</h4>
                                        <p className="text-md text-gray-500 mt-1">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold font-headings text-[#00a896] border-b border-gray-100 pb-4">Professional Services</h3>
                            {[
                                { icon: Building2, t: "Business Address", d: "Use our prestigious address for GST and client trust." },
                                { icon: PackageCheck, t: "Mail Handling", d: "Reception management for letters and courier packages." },
                                { icon: MessageSquare, t: "Meeting Access", d: "Discounted priority booking for professional boardrooms." },
                                { icon: Printer, t: "Printing & Scanning", d: "Monthly quotas included for high-speed equipment." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="h-10 w-10 bg-teal-50 text-[#00a896] rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">{item.t}</h4>
                                        <p className="text-md text-gray-500 mt-1">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold font-headings text-orange-600 border-b border-gray-100 pb-4">Conveniences</h3>
                            {[
                                { icon: Coffee, t: "Premium Pantry", d: "Unlimited filter coffee, assorted teas, and water." },
                                { icon: Headset, t: "Reception Services", d: "Front desk support for visitors and admin needs." },
                                { icon: Sparkles, t: "Housekeeping", d: "Daily cleaning and sanitization for organized work." },
                                { icon: Users, t: "Community Events", d: "Monthly mixers and skill-sharing workshops." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="h-10 w-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                                        {item.icon === Sparkles ? <CheckCircle2 className="h-5 w-5" /> : <item.icon className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-tight">{item.t}</h4>
                                        <p className="text-md text-gray-500 mt-1">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* FAQs */}
            <section className="py-24 bg-gray-50 overflow-hidden">
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
                                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-10 font-medium">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-[#0f172a] opacity-90"></div>
                        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" alt="CTA BG" fill className="object-cover opacity-10" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Book Your Dedicated Desk in Trichy Today
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Experience our dedicated desk environments firsthand. See available desks, meet our community, and understand how reserved workspaces enhance your professional routine.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/contact" className="px-12 py-5 bg-[#00a896] text-white rounded-full font-black text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 group flex items-center">
                                    SCHEDULE FREE TOUR <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link href="/contact" className="px-12 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-xl hover:bg-white/20 transition-all">
                                    Check Desk Availability
                                </Link>
                            </div>
                            <div className="mt-12 flex justify-center items-center gap-8">
                                <div className="text-white">
                                    <p className="text-md font-black uppercase tracking-widest opacity-60 mb-1">Call Support</p>
                                    <p className="font-bold underline text-blue-300">86755 56079</p>
                                </div>
                                <div className="text-white border-l border-white/20 pl-8">
                                    <p className="text-md font-black uppercase tracking-widest opacity-60 mb-1">Satisfaction Guarantee</p>
                                    <p className="font-bold text-[#00a896]">First Month Risk-Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}


