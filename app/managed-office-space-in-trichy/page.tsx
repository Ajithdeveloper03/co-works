import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    Settings,
    Users,
    Maximize2,
    Layout,
    Zap,
    Shield,
    MessageSquare,
    Coffee,
    Smartphone,
    MapPin,
    Clock,
    Briefcase,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Lock,
    Monitor
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Managed Office Space in Trichy: Optimize Your Work Life | Universe Coworks',
    description: 'Looking for managed office space in Trichy? Explore our blog for insights on how this flexible workspace can elevate your business environment.',
    alternates: {
        canonical: 'https://universecoworks.com/managed-office-space-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/managed-office-space-in-trichy',
        images: [
            {
                url: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1200',
                width: 1200,
                height: 630,
                alt: 'Managed Office Space in Trichy',
            },
        ],
    }
};

const faqs = [
    {
        q: "What is the minimum team size for managed office space?",
        a: "We accommodate teams starting from 10 members up to enterprises requiring 500+ workstations. Our workspace experts will help identify the optimal solution for your specific team size."
    },
    {
        q: "How quickly can we move into a managed office space?",
        a: "Our ready-to-occupy managed office spaces in Trichy can be available within 7-14 days, depending on customization requirements and team size."
    },
    {
        q: "What's included in the monthly rental fee?",
        a: "All-inclusive pricing covers fully furnished workspace, high-speed internet, utilities (electricity, water), housekeeping, maintenance, security, meeting room access, pantry facilities, and reception services."
    },
    {
        q: "Can we customize the office layout and design?",
        a: "Absolutely. Our managed office spaces in Trichy offer complete design flexibility. Choose layouts, color schemes, furniture arrangements, and branding elements that reflect your company culture."
    },
    {
        q: "What are the lease terms?",
        a: "We offer flexible lease agreements ranging from 12 to 36 months, with options customized to your business requirements."
    },
    {
        q: "Do you provide parking facilities?",
        a: "Yes, dedicated parking is available at our locations, accommodating both two-wheelers and four-wheelers for your team and visitors."
    },
    {
        q: "Is 24/7 access available?",
        a: "Most of our managed office spaces in Trichy offer round-the-clock access, ideal for businesses with flexible work hours or global operations. Confirm availability for your specific location."
    }
];

export default function ManagedOfficePage() {
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
                                "name": "What is the minimum team size for managed office space?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accommodate teams starting from 10 members up to enterprises requiring 500+ workstations. Our workspace experts help identify the optimal solution based on your team size and business needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How quickly can we move into a managed office space?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our ready-to-occupy managed office spaces in Trichy can be available within 7–14 days, depending on customization requirements and team size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What’s included in the monthly rental fee?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The all-inclusive pricing covers fully furnished workspaces, high-speed internet, utilities such as electricity and water, housekeeping, maintenance, security, meeting room access, pantry facilities, and reception services."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can we customize the office layout and design?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our managed office spaces in Trichy offer complete design flexibility. You can customize layouts, color schemes, furniture arrangements, and branding elements to reflect your company culture."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the lease terms?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We offer flexible lease agreements ranging from 12 to 36 months, with options customized to your business requirements. Our workspace consultants help tailor the best lease plan for you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide parking facilities?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, dedicated parking facilities are available at our locations for both two-wheelers and four-wheelers, ensuring convenience for your team and visitors."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is 24/7 access available?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most of our managed office spaces in Trichy provide 24/7 access, making them ideal for businesses with flexible work hours or global operations. Availability may vary by location."
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
                        "name": "Managed office",
                        "item": "https://universecoworks.com/managed-office-space-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0f1a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"
                        alt="Managed Office Trichy"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold   tracking-wider mb-6">
                            Enterprise Workspace Solutions
                        </span>
                        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Premium Managed Office Space in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Trichy</span> | Universe Coworks
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-medium">
                            Transform Your Business with Flexible Workspace Solutions in Tiruchirappalli. Universe Coworks delivers fully furnished, plug-and-play office solutions designed for growing teams, startups, and established enterprises.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-[#00a896] text-white rounded-full font-bold text-sm hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1">
                                Schedule a Site Visit Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto leading-tight">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Why Choose Universe Coworks for Managed Office Space in Trichy?</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Customized Workspace Solutions",
                                desc: "At Universe Coworks, we understand that your office space represents your business identity. Our managed office spaces offer complete design flexibility, allowing you to customize layouts, choose color schemes, and create interiors that reflect your brand values.",
                                icon: <Settings className="h-10 w-10" />,
                                img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800"
                            },
                            {
                                title: "Hassle-Free Setup & Operations",
                                desc: "Skip the complexities of traditional office setup. Our ready-to-move managed office space comes fully equipped with modern furniture, high-speed internet, advanced IT infrastructure, and all essential amenities. We handle all facility management.",
                                icon: <Zap className="h-10 w-10" />,
                                img: "https://images.pexels.com/photos/5444194/pexels-photo-5444194.jpeg"
                            },
                            {
                                title: "Scalable Solutions for All Sizes",
                                desc: "Whether you're a startup team of 10 or an enterprise with 200+ employees, our managed office spaces scale with your business. We provide flexible solutions from compact private offices to expansive floor plans.",
                                icon: <Maximize2 className="h-10 w-10" />,
                                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-64 w-full">
                                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="p-10 relative">
                                    <div className="bg-white p-4 rounded-2xl inline-block -mt-20 relative z-10 shadow-lg text-[#00a896] mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#00a896] transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Amenities */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Comprehensive Amenities at Our Trichy Managed Office Spaces</h2>
                        <p className="text-xl text-gray-500 font-medium">Every essential designed to support your high-performance team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-10 bg-white rounded-[2.5rem] shadow-sm space-y-8">
                            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#273a96]">
                                <Monitor className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Professional Infrastructure</h3>
                            <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Fully furnished workstations</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> High-speed internet with backup</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> 24/7 power & climate control</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Advanced CCTV security</li>
                            </ul>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] shadow-sm space-y-8">
                            <div className="h-16 w-16 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00a896]">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Collaborative Spaces</h3>
                            <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Equipped meeting rooms</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Private cabins for focus</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Collaborative breakout zones</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Professional reception</li>
                            </ul>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] shadow-sm space-y-8">
                            <div className="h-16 w-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                                <Shield className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Essential Services</h3>
                            <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Housekeeping & maintenance</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> IT support management</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Pantry with refreshments</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Mail & admin assistance</li>
                            </ul>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] shadow-sm space-y-8">
                            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#273a96]">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Prime Location Benefits</h3>
                            <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Centrally located hubs</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Transportation accessibility</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Close to commercial centers</li>
                                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#00a896] shrink-0" /> Professional business address</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Benefits */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-12">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-headings">Who Benefits from Our Managed Office Space in Trichy?</h2>
                            <div className="space-y-8">
                                {[
                                    { t: "Startups and Growing Businesses", d: "Launch without heavy capital investment. Professional infrastructure from day one." },
                                    { t: "Small and Medium Enterprises (SMEs)", d: "Expand with flexible lease terms and scalable workspace options without commitments." },
                                    { t: "Corporate Teams and Enterprises", d: "Brand-aligned office environments for teams of 50 to 500+ members." },
                                    { t: "Remote Teams Seeking Physical Presence", d: "A professional workspace that facilitates collaboration in Tiruchirappalli." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="shrink-0 h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-[#00a896] group-hover:text-white transition-all">
                                            <CheckCircle2 className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#00a896] transition-colors">{item.t}</h4>
                                            <p className="text-gray-500 font-medium mt-2">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image src="https://images.pexels.com/photos/7550286/pexels-photo-7550286.jpeg" alt="Business Growth" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[#273a96] p-12 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                                <div className="text-5xl font-bold">500+</div>
                                <div className="text-sm font-bold   tracking-widest text-blue-200 mt-2">Team Capacity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantage Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00a896] opacity-5 blur-[120px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-headings">The Universe Coworks Advantage</h2>
                        <p className="text-xl text-blue-200 font-medium  ">More Than Just Office Space – A Partner in Your Success Story.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Briefcase, t: "Cost-Effective Business Solution", d: "Eliminate upfront capital expenditure. Predictable monthly expenses and improved cash flow." },
                            { icon: Clock, t: "Flexible Lease Terms", d: "Tailored rental agreements ranging from 12 to 36 months to match your business cycle." },
                            { icon: ShieldCheck, t: "Professional Support Team", d: "Dedicated facility management ensuring your managed space operates smoothly 24/7." },
                            { icon: Users, t: "Community and Networking", d: "Join a thriving ecosystem of innovative companies and entrepreneurs driving business growth." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                                <div className="h-16 w-16 bg-[#00a896] rounded-2xl flex items-center justify-center mb-8 ">
                                    <item.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl text-white font-bold mb-4">{item.t}</h3>
                                <p className="text-gray-400 font-medium text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Managed vs Traditional */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Managed Office vs. Traditional Office</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Setup Time", d: "Move into our managed space within 7-14 days versus traditional offices which require months of setup." },
                            { t: "Financial Commitment", d: "Single all-inclusive monthly fee versus managing multiple vendors for furniture, IT, and housekeeping." },
                            { t: "Flexibility", d: "Adapt your workspace size as needed versus being locked into rigid long-term property leases." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="text-[#00a896] font-black   text-4xl mb-6 opacity-20">0{i + 1}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#273a96]">{item.t}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-teal-900/5 rounded-3xl text-center">
                        <p className="text-lg font-bold text-teal-800">Focus on Core Business: Let us manage facility operations while you concentrate on revenue-generating activities.</p>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl skew-x-1">
                            <Image src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg" alt="Trichy Locations" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold font-headings">Universe Coworks Locations Across Trichy</h2>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                Our managed office spaces are strategically located in Tiruchirappalli's prime business districts, including Thillai Nagar and surrounding commercial zones.
                            </p>
                            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                                <MapPin className="h-10 w-10 text-[#00a896]" />
                                <div>
                                    <p className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-2">Each location offers excellent connectivity</p>
                                    <p className="text-sm text-gray-500 font-medium">Proximity to business centers and access to essential amenities.</p>
                                </div>
                            </div>
                            <Link href="/contact" className="inline-flex items-center text-[#273a96] font-bold text-lg hover:underline gap-2 group">
                                Schedule a site visit <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings text-gray-900">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-20 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 border-none rounded-2xl px-8 shadow-sm overflow-hidden">
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-gray-900 hover:no-underline hover:text-[#00a896] text-left py-8">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-10 font-medium">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Residency Question */}
                    <div className="bg-blue-50/50 border border-blue-100 p-12 rounded-[3.5rem] max-w-4xl mx-auto shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <MapPin className="h-32 w-32" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-blue-900 relative z-10">What don't you like about living in Tiruchirappalli, India?</h3>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium   relative z-10">
                            While Tiruchirappalli boasts rich culture and history, some may find the lack of modern amenities or limited entertainment options less appealing. Additionally, traffic congestion and hot weather can be challenging. However, the community spirit and affordable living often outweigh these drawbacks for many residents seeking managed office space in Trichy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#273a96] to-[#00a896] opacity-90"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Ready to Transform Your Workspace Experience?
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Discover why leading businesses in Trichy choose Universe Coworks for their managed office space needs. Our professional team is ready to recommend solutions that accelerate your business growth.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <Link href="/contact" className="px-12 py-5 bg-white text-[#273a96] rounded-full font-bold text-md hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group   tracking-widest text-sm">
                                    Schedule SITE Visit Today <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </div>
    );
}
