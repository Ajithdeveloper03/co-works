'use client';

import {
    ShieldCheck,
    MapPin,
    Mail,
    Layout,
    Headset,
    Zap,
    ArrowRight,
    TrendingUp,
    Globe,
    Lock,
    FileCheck,
    Smartphone,
    CheckCircle2,
    Building2,
    Clock,
    Briefcase,
    Users,
    Maximize2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePopup } from '@/context/PopupContext';

const faqs = [
    {
        q: "What is a virtual office in Trichy and how does it work?",
        a: "A virtual office provides your business with a professional physical address in Trichy for registration, correspondence, and credibility—without requiring you to rent or occupy actual office space. You receive mail handling, GST compliance support, and optional access to meeting rooms or workspaces when needed. It works by separating your business address from your work location, giving you flexibility while maintaining professional infrastructure."
    },
    {
        q: "How can I use a virtual office in Trichy for GST registration?",
        a: "Virtual office addresses are fully acceptable for GST registration. You'll receive the necessary documentation from Universe Coworks, including address proof and owner consent. Our team assists with form completion and submission to ensure compliance with tax department requirements. The process is identical to using a traditional office address, with faster setup and lower costs."
    },
    {
        q: "What are the benefits of choosing a virtual office in Trichy for company registration?",
        a: "Virtual offices enable immediate company registration without capital-intensive office leases. Benefits include significant cost savings (60-80% versus traditional offices), instant credibility through a professional address, compliance readiness, scalability as your business grows, and the flexibility to work remotely while maintaining local presence. This model is ideal for startups, freelancers, and businesses testing new markets."
    },
    {
        q: "What documents are needed to set up a virtual office in Trichy?",
        a: "Typically, you'll need government-issued identity proof (Aadhaar, PAN), business registration documents (or incorporation intent), address proof, and passport-size photographs. Specific requirements may vary based on your business structure and chosen services. Universe Coworks provides a detailed checklist during onboarding and assists with document preparation to streamline the process."
    },
    {
        q: "How much does a virtual office in Trichy typically cost per month?",
        a: "Pricing ranges from ₹2,000 to ₹8,000 monthly, depending on package features, location premium, and service inclusions. Basic packages cover business address and mail handling, while comprehensive plans add receptionist services, meeting room credits, and extended workspace access. Universe Coworks offers transparent pricing with customizable options to match your budget and requirements."
    },
    {
        q: "Which locations in Trichy offer the best virtual office services?",
        a: "The best locations balance prestige, accessibility, and a prestigious address for client convenience. Universe Coworks operates from prime Trichy business districts with excellent connectivity and professional infrastructure. When selecting a location, consider proximity to your target market, transportation links, and alignment with your brand image. Our team helps you evaluate options based on your specific business needs."
    },
    {
        q: "Can I receive mail and packages at a virtual office address in Trichy?",
        a: "Absolutely. Mail and package handling is a core virtual office service. Universe Coworks receives all correspondence, notifies you promptly, and offers flexible options: forward to your preferred address, schedule in-person pickup, or request digital scanning for immediate access. This ensures you never miss critical documents while maintaining privacy and convenience."
    },
    {
        q: "Is a virtual office in Trichy suitable for startups and small businesses?",
        a: "Virtual offices are exceptionally well-suited for startups and small businesses, providing immediate credibility, especially when attracting potential clients. They offer regulatory compliance and professional infrastructure at a fraction of traditional office costs. The scalability and flexibility align perfectly with startup growth patterns—allowing you to establish presence quickly, operate lean, and expand workspace usage as your team and revenue grow."
    },
    {
        q: "What is the process to switch my business address to a virtual office in Trichy?",
        a: "Switching is straightforward: select your virtual office package, complete documentation, update your business registration with the new address (we provide support letters), inform clients and partners, and update online listings (Google Business Profile, website, etc.). The entire process typically completes within one week. Universe Coworks assists with documentation and ensures smooth transition with minimal disruption."
    },
    {
        q: "Are there any compliance issues when using a virtual office for business in Trichy?",
        a: "Virtual offices are fully compliant for business registration, GST, and statutory requirements when properly structured. Universe Coworks ensures all necessary documentation, owner consents, and address proofs meet regulatory standards. It's essential to maintain transparent operations and keep your actual work location separate from your registered address. Our compliance team stays current with regulations to protect your business interests."
    }
];

export default function VirtualOfficePageContent() {
    const { openPopup } = usePopup();

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
                                "name": "What is a virtual office in Trichy and how does it work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A virtual office provides your business with a professional physical address in Trichy for registration, correspondence, and credibility without renting or occupying physical office space. It includes mail handling, GST compliance support, and optional access to meeting rooms or workspaces when needed. It separates your business address from your work location while maintaining professional infrastructure."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I use a virtual office in Trichy for GST registration?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Virtual office addresses are acceptable for GST registration. Universe Coworks provides address proof, owner consent, and documentation support. The process is the same as using a traditional office address but is faster and more cost-effective."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the benefits of choosing a virtual office in Trichy for company registration?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Benefits include 60–80% cost savings compared to traditional offices, instant credibility with a professional address, compliance readiness, scalability, and the flexibility to work remotely while maintaining a local business presence. It is ideal for startups, freelancers, and businesses entering new markets."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What documents are needed to set up a virtual office in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Required documents usually include Aadhaar, PAN, business registration documents or incorporation intent, address proof, and passport-size photographs. Requirements vary based on business structure. Universe Coworks provides a detailed checklist and onboarding assistance."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does a virtual office in Trichy typically cost per month?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pricing typically ranges from ₹2,000 to ₹8,000 per month depending on location, package features, and services. Basic plans include business address and mail handling, while premium plans add receptionist support, meeting room credits, and workspace access."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which locations in Trichy offer the best virtual office services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Prime business districts in Trichy provide the best balance of accessibility, prestige, and infrastructure. Universe Coworks operates in leading commercial locations and helps businesses choose the right address based on branding, client access, and connectivity needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I receive mail and packages at a virtual office address in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Mail and package handling is a core service. Universe Coworks receives your correspondence, notifies you, and offers forwarding, in-person pickup, or digital scanning options for convenience and security."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is a virtual office in Trichy suitable for startups and small businesses?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Virtual offices are ideal for startups and small businesses as they provide professional credibility, compliance support, and significant cost savings while allowing scalability and remote operations."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the process to switch my business address to a virtual office in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The process includes choosing a package, completing documentation, updating business registrations with the new address, notifying clients and partners, and updating online listings. The transition usually completes within one week with support from Universe Coworks."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there any compliance issues when using a virtual office for business in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Virtual offices are fully compliant for GST, company registration, and statutory needs when structured properly. Universe Coworks ensures valid documentation, address proofs, and owner consents to meet regulatory requirements and maintain business compliance."
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
                        "name": "Virtual office",
                        "item": "https://universecoworks.com/virtual-office-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
                        alt="Remote professionals collaborating with laptops, representing an outcome-focused virtual office in Trichy."
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-2/3">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#273a96]/20 border border-[#273a96]/30 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
                                Prestigious & Professional
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Elevate Your Business with a <span className="text-blue-500">Virtual Office</span> in Trichy
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light">
                                Establish a prestigious business address, manage compliance seamlessly, and scale your operations—all without the cost of physical office space.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={openPopup} className="px-10 py-5 bg-[#273a96] text-white rounded-full font-bold text-lg hover:bg-[#1e2a78] transition-all shadow-xl hover:-translate-y-1">
                                    Get Your Virtual Office Today
                                </button>
                                <Link href="#pricing" className="px-10 py-5 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                    Explore Pricing & Packages
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/3 hidden lg:block">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl skew-x-1">
                                <h3 className="text-xl font-bold text-white mb-6">The Universe Coworks Advantage</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light">
                                    Universe Coworks provides premium virtual office solutions in Trichy designed for startups, freelancers, remote teams, and growing enterprises. Gain a credible business address, GST registration support, and mail handling—empowering you to work smarter, not harder.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                        <span className="text-xs text-white font-bold tracking-wide uppercase">Credible Address</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                        <span className="text-xs text-white font-bold tracking-wide uppercase">GST Compliance</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                        <span className="text-xs text-white font-bold tracking-wide uppercase">Mail Notification</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Transform Your Business Operations with a Virtual Office in Trichy</h2>
                            <div className="prose prose-lg text-gray-600 font-light leading-relaxed space-y-6">
                                <p>
                                    In today's hybrid work era, businesses demand flexibility, scalability, and a professional environment that conveys credibility without the burden of traditional office leases. Whether you're a startup founder, freelancer, remote team, or established enterprise exploring cost-effective expansion, a virtual office in Trichy offers the perfect solution.
                                </p>
                                <p>
                                    At Universe Coworks, we've designed our virtual office services to meet the evolving needs of modern businesses. Our offerings combine a prestigious business address in prime Trichy locations alongside Trichy Coworks with comprehensive administrative support, compliance assistance, and seamless integration with coworking and hybrid work models.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center">
                                    <Globe className="h-10 w-10 text-[#273a96] mb-4" />
                                    <span className="font-bold text-gray-900 leading-tight">Work From Anywhere</span>
                                </div>
                                <div className="bg-[#273a96] p-8 rounded-[2rem] text-white flex flex-col items-center text-center">
                                    <TrendingUp className="h-10 w-10 text-blue-300 mb-4" />
                                    <span className="font-bold leading-tight uppercase tracking-widest text-xs">70% Overhead Reduction</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-64 w-full rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" alt="Trichy Skyline" fill className="object-cover" />
                                </div>
                                <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col items-center text-center">
                                    <ShieldCheck className="h-10 w-10 text-[#00a896] mb-4" />
                                    <span className="font-bold text-gray-900 leading-tight">Authorized Compliance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Why Choose a Virtual Office?</h2>
                        <p className="text-xl text-gray-500 font-light ">
                            Empowering you to maintain professionalism, enhance productivity, and focus on growth—while we handle the operational details.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 lg:pr-12">
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Traditional office spaces come with significant overhead: rent, utilities, maintenance, and long-term commitments. A virtual office eliminates these expenses while providing essential business communications infrastructure. You receive a professional mailing address suitable for company registration, GST compliance, and client correspondence, plus access to meeting rooms and workspaces when needed.
                            </p>
                            <div className="flex items-start gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                                <div className="h-14 w-14 bg-blue-50 text-[#273a96] rounded-2xl flex items-center justify-center shrink-0">
                                    <Zap className="h-8 w-8" />
                                </div>
                                <p className="text-sm font-bold text-gray-700 leading-relaxed ">
                                    "This model perfectly aligns with the principles of AI-driven efficiency and outcome-focused collaboration. Businesses optimize resource allocation and gain the agility to scale based on actual demand."
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" alt="Professionals working together in a shared workspace, showcasing 70% cost savings with a virtual office in Trichy." fill className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-gray-900 to-transparent text-white">
                                <h4 className="text-4xl font-black mb-2 text-white">Outcome-Focused</h4>
                                <p className="text-sm uppercase tracking-widest font-bold opacity-60">Efficient Handling of Business Mail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold font-headings">Services Tailored for Trichy Businesses</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Professional Business Address",
                                desc: "Establish your presence at a recognized Trichy location without investing in physical real estate. Ideal for business registration, opening bank accounts, and building client trust. Enhances brand perception and stability."
                            },
                            {
                                icon: FileCheck,
                                title: "GST Registration Support",
                                desc: "Navigate the GST registration process effortlessly. We provide documentation and support to meet all regulatory requirements. Straightforward process for startups and small businesses to operate legally."
                            },
                            {
                                icon: Mail,
                                title: "Mail & Package Handling",
                                desc: "Never miss important documentation like your GST number. We receive, sort, and notify you promptly. Options for forwarding, scheduled pickup, or digital scanning based on your workflow."
                            },
                            {
                                icon: Layout,
                                title: "On-Demand Workspace Access",
                                desc: "Retain flexibility to access professional workspaces, including private offices, cabins, or hot desks when face-to-face collaboration is essential. Blending virtual convenience with physical benefits."
                            },
                            {
                                icon: Headset,
                                title: "Receptionist & Call Handling",
                                desc: "Project professionalism with dedicated receptionist support answering in your business name. Managing appointments and ensuring interactions reflect your brand standards while you focus on growth."
                            },
                            {
                                icon: Lock,
                                title: "Compliance & Security",
                                desc: "We ensure all necessary documentation, owner consents, and address proofs meet regulatory standards. Our compliance team stays current with regulations to protect your business interests."
                            }
                        ].map((service, i) => (
                            <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-[#273a96] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00a896] transition-colors shadow-sm">
                                    <service.icon className="h-8 w-8 text-[#273a96] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-all">{service.title}</h3>
                                <p className="text-gray-500 group-hover:text-blue-100 font-medium leading-relaxed transition-all text-md">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Advantage */}
            <section className="py-24 bg-[#0a0f1a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-5xl font-bold font-headings leading-tight text-white">The Strategic Advantage for Startups and Growing Businesses</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="h-12 w-12 bg-[#273a96] rounded-xl flex items-center justify-center shrink-0">
                                        <Briefcase className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Redirected Capital</h4>
                                        <p className="text-sm font-light text-gray-400">Reduce overhead by 70% and redirect savings toward product development, marketing, talent acquisition, or technology infrastructure.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="h-12 w-12 bg-teal-900/50 text-[#00a896] rounded-xl flex items-center justify-center shrink-0">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Unified Remote Talent</h4>
                                        <p className="text-sm font-light text-gray-400">Hire the best people regardless of location while maintaining a unified business identity. This distributed model is the standard for innovative companies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="h-12 w-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                                        <Maximize2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Absolute Scalability</h4>
                                        <p className="text-sm font-light text-gray-400">As your team expands or contracts, your address remains stable while your workspace usage flexes to match actual needs. Invaluable in uncertain economic conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl skew-x-1">
                                <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200" alt="Entrepreneur Growth" fill className="object-cover" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 text-center">
                                <p className="text-6xl font-black mb-2">70%</p>
                                <p className="text-xs font-bold uppercase tracking-[0.3em]">Cost Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Setup Process */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold font-headings">Seamless Setup Process</h2>
                        <p className="text-xl text-gray-600 font-light mt-6">Getting started is straightforward. Most setups complete within 24-48 hours.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { s: "Step 01", t: "Select Package", d: "Choose your virtual office package and preferred prime Trichy location." },
                            { s: "Step 02", t: "Submit Docs", d: "Provide identity proof, business details, and address verification (NOCs)." },
                            { s: "Step 03", t: "Agreement", d: "Complete a simple agreement outlining services and fair usage terms." },
                            { s: "Step 04", t: "Launch", d: "Receive your address and begin updating your website and GST registration." }
                        ].map((step, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between h-72 group hover:bg-[#00a896] transition-colors duration-500">
                                <span className="text-4xl font-black opacity-10 group-hover:text-white transition-colors">{step.s}</span>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{step.t}</h4>
                                    <p className="text-[14px] text-gray-500 font-medium group-hover:text-teal-50 transition-colors uppercase tracking-widest leading-tight">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Investment and Pricing Transparency</h2>
                        <p className="text-xl text-gray-500 font-light">Flexible plans designed for different stages. Pay only for what you need.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter */}
                        <div className="p-12 bg-white rounded-[3.5rem] border border-gray-200 shadow-sm space-y-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">Starter Plan</h3>
                                <p className="text-sm text-gray-500 font-medium mt-2">Essential business presence.</p>
                                <div className="mt-8 space-y-4">
                                    {["Business Address", "Mail Handling", "GST Support"].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896]" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={openPopup} className="block w-full py-4 bg-gray-900 text-white rounded-2xl text-center font-bold font-headings hover:bg-black transition-colors">Start Starter</button>
                        </div>

                        {/* Professional */}
                        <div className="p-12 bg-white rounded-[3.5rem] border-2 border-[#273a96] shadow-xl space-y-8 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 py-2 px-8 bg-[#273a96] text-white text-[10px] font-black uppercase tracking-widest rounded-bl-3xl">MOST POPULAR</div>
                            <div>
                                <h3 className="text-2xl font-black text-[#273a96]">Professional Plan</h3>
                                <p className="text-sm text-[#273a96] font-black mt-2">White-glove service.</p>
                                <div className="mt-8 space-y-4">
                                    {["Business Address", "Mail Handling", "GST Support", "Receptionist Services", "Meeting Room Access"].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#273a96]">
                                            <CheckCircle2 className="h-5 w-5" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={openPopup} className="block w-full py-4 bg-[#273a96] text-white rounded-2xl text-center font-bold font-headings hover:bg-[#1e2a78] transition-colors">Go Professional</button>
                        </div>

                        {/* Enterprise */}
                        <div className="p-12 bg-gray-900 border border-gray-800 rounded-[3.5rem] text-white space-y-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black text-white">Enterprise Plan</h3>
                                <p className="text-sm text-gray-400 font-medium mt-2">Comprehensive solutions.</p>
                                <div className="mt-8 space-y-4">
                                    {["All Professional Perks", "Dedicated Support", "Extended Workspace Hours", "Priority Facilities"].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896]" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={openPopup} className="block w-full py-4 bg-[#00a896] text-white rounded-2xl text-center font-bold font-headings hover:bg-[#00897b] transition-colors">Enquire Now</button>
                        </div>
                    </div>
                    <p className="text-center mt-12 text-sm text-gray-400 font-medium">Transparent pricing with no hidden fees. All-inclusive costs with insights on the cost of a virtual office provided.</p>
                </div>
            </section>

            {/* Switch Support */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings">Switch Your Business Address</h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Switching is straightforward: update your business registration with our support letters, inform clients, and update online listings (Google Business Profile, website, etc.). The entire process typically completes within one week.
                            </p>
                            <div className="p-8 bg-[#00a896]/5 border-l-4 border-[#00a896] rounded-r-3xl">
                                <p className="font-bold text-[#00897b] leading-relaxed">
                                    Universe Coworks assists with documentation and ensures smooth transition with minimal disruption.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="h-48 bg-gray-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                                <Smartphone className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="text-sm font-bold text-gray-900 leading-tight">Update Google Business Profile</p>
                            </div>
                            <div className="h-48 bg-gray-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                                <Building2 className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="text-sm font-bold text-gray-900 leading-tight">Official Registration Letters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Frequently Asked Questions: Virtual Office in Trichy</h2>
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

            {/* Contact CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-[#0f172a] opacity-90"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                                Ready to Establish Your Professional Presence?
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
                                Join hundreds of successful businesses leveraging virtual offices for growth, efficiency, and competitive advantage. Universe Coworks delivers the infrastructure, support, and flexibility you need to thrive.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button onClick={openPopup} className="px-12 py-5 bg-[#00a896] text-white rounded-full font-black text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 group flex items-center">
                                    Get Started Today <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button onClick={openPopup} className="px-12 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-xl hover:bg-white/20 transition-all">
                                    Schedule a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
