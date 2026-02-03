import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    CheckCircle2,
    Coffee,
    Wifi,
    Monitor,
    Clock,
    Users,
    ShieldCheck,
    ArrowRight,
    Zap,
    Printer,
    Gamepad2,
    Lock,
    MessageSquare,
    HelpCircle,
    Plus,
    Minus,
    MapPin,
    Smartphone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Hot Desk in Trichy: Your Flexible Workspace Solution | Universe Coworks',
    description: 'Looking for a flexible work environment? Explore the advantages of a Hot Desk in Trichy and how it can enhance your work experience.',
    alternates: {
        canonical: 'https://universecoworks.com/hot-desk-in-trichy',
    }
};

const faqs = [
    {
        q: "What is a hot desk at Universe Coworks?",
        a: "A hot desk is a flexible workspace where you use any available desk in our shared environment. Unlike dedicated desks, you choose different spots each visit, providing maximum flexibility and cost savings while accessing all premium amenities in a hybrid workspace."
    },
    {
        q: "How much does a hot desk in Trichy cost?",
        a: "We offer daily passes, 5 days to 10 days packages, and unlimited monthly memberships. Contact us for current pricing and promotional offers for new members."
    },
    {
        q: "What amenities are included?",
        a: "Your membership includes high-speed WiFi, ergonomic seating, power backup, printing/scanning, complimentary beverages, reception services, secure lockers, and meeting room access—all without additional charges."
    },
    {
        q: "Can I use hot desk daily?",
        a: "Yes! Our unlimited monthly packages allow daily access. Work as many days as needed throughout the month, choosing your preferred workspace based on availability."
    },
    {
        q: "Do I need advance booking?",
        a: "While walk-ins are welcome, we recommend booking in advance, especially during peak hours, to guarantee your workspace availability."
    },
    {
        q: "What's the difference between hot desk and dedicated desk?",
        a: "Hot desks offer flexible use of any available workspace, ideal for variable schedules and cost-effectiveness. Dedicated desks provide fixed, personalized workspace reserved exclusively for you with personal storage."
    },
    {
        q: "Can I meet clients at hot desk workspace?",
        a: "Yes! Book our private meeting rooms for professional client interactions. Our reception area also offers comfortable seating for brief meetings."
    },
    {
        q: "What are the working hours?",
        a: "Monthly members enjoy 24/7 access. Daily and multi-day pass holders access workspace from 9 AM to 7 PM. Extended hours can be arranged based on membership level."
    },
    {
        q: "Is storage available?",
        a: "Hot desk members receive secure day-use lockers for laptops, documents, and personal items during your working day."
    },
    {
        q: "Is high-speed internet included?",
        a: "Absolutely! All members enjoy complimentary high-speed internet with dedicated bandwidth for video conferencing, file uploads, and cloud-based work, plus backup connectivity."
    },
    {
        q: "Where is Universe Coworks located in Trichy?",
        a: "We're strategically located in Trichy's prime commercial area, easily accessible from major transportation hubs, business districts, and residential areas."
    },
    {
        q: "Can I upgrade to dedicated desk later?",
        a: "Yes! Seamlessly upgrade from hot desk to dedicated desk or private cabin anytime. Your membership tenure and benefits transfer smoothly to your new workspace."
    },
    {
        q: "Is parking available?",
        a: "Yes, we provide secure parking for two-wheelers and four-wheelers. Monthly members receive priority parking access."
    }
];

const summaryText = "Looking for the best hot desk coworking spaces available in Trichy? Trichy Coworks and Universe Coworks Trichy are among the top choices for flexible workspace in the city. Both offer modern coworks environments and convenient amenities to help professionals stay productive. Ready to experience flexible workspace? Visit Trichy Coworks Universe Coworks Trichy today and discover how our hot desk solutions elevate your productivity with the flexibility modern professionals demand. Book your workspace now!";

export default function HotDeskPage() {
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
                        "name": "Hot desk",
                        "item": "https://universecoworks.com/hot-desk-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2000&auto=format&fit=crop"
                        alt="Laptop placed on a long shared desk near large windows in a modern office, showcasing a hot desk in Trichy."
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
                            Flexible Workspace Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Hot Desk in Trichy – Flexible Workspace at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Universe Coworks</span>
                        </h1>
                        <p className="text-xl md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light">
                            Looking for a professional hot desk in Trichy? Universe Coworks provides flexible workspace solutions for freelancers, remote workers, startups, and business professionals who need quality infrastructure without long-term commitments.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:shadow-[#00a896]/20 hover:-translate-y-1">
                                Book Your Workspace Now
                            </Link>
                            <Link href="#pricing" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                                View Pricing Plans
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating element */}
                {/* <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:flex items-center justify-center pointer-events-none">
                    <div className="relative w-full aspect-square max-w-lg">
                        <div className="absolute inset-0 bg-[#00a896]/20 blur-[120px] rounded-full"></div>
                        <div className="relative z-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl transform rotate-3">
                            <div className="grid grid-cols-2 gap-4">
                                {[Wifi, Coffee, ShieldCheck, Clock].map((Icon, i) => (
                                    <div key={i} className="bg-white/10 p-6 rounded-2xl flex flex-col items-center text-center group transition-all hover:bg-white/20">
                                        <Icon className="h-8 w-8 text-[#00a896] mb-3 group-hover:scale-110 transition-transform" />
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">Premium Access</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
                                    alt="Space Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[#273a96] p-12 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Flexibility Guaranteed</div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-5 text-gray-900 selection:text-white">
                            <div className="inline-block px-4 py-1 bg-blue-100 text-[#273a96] rounded-full text-xs font-black uppercase tracking-widest mb-2">
                                Strategic Excellence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-headings leading-tight">
                                Why Choose Our Hot Desk Workspace?
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                                <p>
                                    Our hot desk solution combines professional amenities with complete flexibility. Located in Trichy's prime commercial area, Thillai Nagar, Universe Coworks offers ergonomic seating, high-speed internet, power backup, meeting rooms, and a collaborative environment that enhances productivity.
                                </p>
                                <p>
                                    Whether you need workspace for a day, week, or month, our flexible packages adapt to your schedule and budget, including access to conference rooms. Work when you need to, scale as you grow, and connect with a vibrant professional community.
                                </p>
                            </div>
                            <div className="pt-6">
                                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                                    <div className="h-16 w-16 bg-[#00a896]/10 rounded-2xl flex items-center justify-center text-[#00a896]">
                                        <MapPin className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900">Prime Thillai Nagar Location</h3>
                                        <p className="text-gray-500 font-medium">Heart of Trichy's Business Hub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">What's Included with Your Hot Desk</h2>
                        <p className="text-xl text-gray-600 font-light">Every hot desk membership provides access to premium facilities for a productive workforce.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Wifi, title: "High-Speed WiFi", desc: "Reliable fiber internet with dedicated bandwidth.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600" },
                            { icon: Monitor, title: "Ergonomic Furniture", desc: "Premium seating designed for long-duration focus.", img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=600" },
                            { icon: Printer, title: "Office Services", desc: "Printing, scanning, and professional mail handling.", img: "https://images.pexels.com/photos/7511749/pexels-photo-7511749.jpeg" },
                            { icon: Coffee, title: "Refreshments", desc: "Complimentary beverages to keep you energized.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600" },
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-[#273a96] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden relative">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <Image src={feature.img} alt={feature.title} fill className="object-cover" />
                                </div>
                                <div className="relative z-10">
                                    <div className="bg-white group-hover:bg-[#00a896] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors transform group-hover:rotate-6">
                                        <feature.icon className="h-8 w-8 text-[#273a11] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-[#0f172a] rounded-[3rem] text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a896] opacity-20 blur-[100px] rounded-full"></div>
                        <p className="text-2xl md:text-3xl leading-relaxed   font-light relative z-10 max-w-4xl mx-auto">
                            "Our climate-controlled workspace with natural lighting creates the ideal environment for focused work."
                        </p>
                    </div>
                </div>
            </section>

            {/* Perfect for Professionals */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 font-headings">Perfect for Modern Professionals</h2>
                        <div className="h-2 w-32 bg-[#00a896] rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Freelancers and Consultants",
                                desc: "Maintain professional credibility with a quality workspace minus traditional office overhead and clutter. Project the right image during client interactions while enjoying flexibility.",
                                icon: <Users className="h-10 w-10" />
                            },
                            {
                                title: "Remote Workers",
                                desc: "Escape home distractions with dedicated workspace, reliable internet, and professional surroundings that separate work from personal life.",
                                icon: <Gamepad2 className="h-10 w-10" />
                            },
                            {
                                title: "Startups",
                                desc: "Scale efficiently with flexible hot desk options that grow with your team without long-term lease commitments.",
                                icon: <Zap className="h-10 w-10" />
                            },
                            {
                                title: "Business Travelers",
                                desc: "Access instant workspace during Trichy visits without hotel business center limitations.",
                                icon: <Smartphone className="h-10 w-10" />
                            }
                        ].map((profile, i) => (
                            <div key={i} className="flex gap-8 p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="shrink-0 h-20 w-20 bg-blue-50 text-[#273a96] rounded-[2rem] flex items-center justify-center group-hover:bg-[#273a96] group-hover:text-white transition-all duration-500">
                                    {profile.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#00a896] transition-colors">{profile.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">{profile.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Options */}
            <section id="pricing" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-headings leading-tight">Flexible Pricing Options</h2>
                            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                                Choose from daily passes for occasional use in Tiruchirappalli, multi-day packages (5 days to 10 days) for regular visitors, or unlimited monthly memberships for full-time workspace access.
                            </p>
                            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                                <p className="font-bold text-[#273a96] flex items-center gap-3">
                                    <ShieldCheck className="h-6 w-6" />
                                    Transparent Pricing
                                </p>
                                <p className="mt-2 text-gray-600 text-sm">All packages include essential amenities with no hidden fees.</p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[3rem] border-2 border-gray-100 space-y-8 hover:border-[#00a896] transition-all group">
                                <h3 className="text-2xl font-bold">Daily Pass</h3>
                                <p className="text-gray-500 font-light">Perfect for occasional use in Trichy. 9 AM to 7 PM access.</p>
                                <ul className="space-y-4">
                                    {["Any available seat", "High-speed WiFi", "Tea & Coffee included", "Reception service"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-4 bg-gray-900 text-white rounded-2xl font-bold group-hover:bg-[#00a896] transition-colors">Select Plan</Link>
                            </div>

                            <div className="p-10 rounded-[3rem] bg-[#0f172a] text-white shadow-2xl space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 px-6 py-2 bg-[#00a896] text-sm font-bold rounded-bl-3xl">POPULAR</div>
                                <h3 className="text-2xl font-bold text-white">Monthly Unlimited</h3>
                                <p className="text-gray-400 font-light">Best for regular workers. 24/7 facility access.</p>
                                <ul className="space-y-4">
                                    {["24/7 Access", "Premium WiFi", "Credits for Meeting Rooms", "Mail handling", "Priority Parking"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-medium text-blue-100">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-4 bg-[#00a896] text-white rounded-2xl font-bold hover:bg-[#00897b] transition-colors">Select Plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-20 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border-none rounded-2xl px-6 shadow-sm overflow-hidden">
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-gray-900 hover:no-underline hover:text-[#00a896] text-left py-6">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 font-light">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="bg-[#f0f9ff] border-l-4 border-[#00a896] p-10 rounded-2xl max-w-4xl mx-auto">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium  ">
                            {summaryText}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                    <div className="relative p-12 md:p-24 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-1/2 h-full">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                                alt="CTA Image"
                                fill
                                className="object-cover opacity-60"
                            />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                Ready to experience flexible workspace?
                            </h2>
                            <p className="text-lg text-blue-100 mb-6 font-light leading-relaxed">
                                Visit Trichy Coworks Universe Coworks Trichy today and discover how our hot desk solutions elevate your productivity with the flexibility modern professionals demand. Book your workspace now!
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact" className="px-10 py-5 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center group">
                                    Book Now <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a href="tel:+918675556079" className="px-10 py-5 bg-white text-[#273a96] rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                                    Call: +91 86755-56079
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
