import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    HelpCircle,
    FileText,
    Shield,
    Users,
    CreditCard,
    Zap,
    Calendar,
    ArrowRight,
    CheckCircle2,
    Mail,
    Phone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Explore Our FAQ - Frequently Asked Questions | Universe Coworks',
    description: 'Explore our FAQ to learn about Universe Coworks services, pricing, facilities, and membership policies in Trichy.',
    alternates: {
        canonical: 'https://universecoworks.com/frequently-asked-questions',
    }
};

const faqCategories = [
    {
        title: "General",
        icon: HelpCircle,
        questions: [
            {
                q: "What is a coworking space and how does it work?",
                a: "A coworking space is a shared professional work environment where remote workers and individuals from different companies and industries work alongside each other in a collaborative setting. Members pay for access to desks, offices, and shared amenities like meeting rooms, high-speed internet, and common areas. It operates on a flexible membership model, allowing you to choose from options like hot desks (first-come seating), dedicated desks, or private offices based on your needs."
            },
            {
                q: "What are the benefits of using a coworking space for startups or small companies?",
                a: "Coworking spaces offer cost-effective alternatives to traditional office leases without long-term commitments or large upfront investments. They provide networking opportunities with like-minded professionals, access to premium amenities, and a productive atmosphere that separates work from home life. The built-in community and regular events can lead to collaborations, client referrals, and professional growth opportunities."
            },
            {
                q: "What services does your company provide?",
                a: "We offer flexible coworking spaces, private offices, meeting rooms, and virtual office solutions designed for entrepreneurs, freelancers, and growing teams. Our facilities include high-speed internet, modern amenities, and a hassle-free collaborative community environment. We also host regular networking events and workshops to help professionals connect and grow their businesses."
            }
        ]
    },
    {
        title: "Membership & Pricing",
        icon: CreditCard,
        questions: [
            {
                q: "How much does it typically cost to use a coworking space or business center?",
                a: "Pricing varies based on the type of workspace and access level you choose. Day passes generally range from budget-friendly options for occasional use, while monthly hot desk memberships offer unlimited access at mid-range rates. Dedicated desks and private offices are priced higher but include additional perks like mail handling and 24/7 access. We offer flexible plans to match different budgets and business requirements."
            },
            {
                q: "Do I need to sign a long-term contract for a coworking space?",
                a: "No long-term commitment is required for most of our membership options, catering even to small teams. We offer month-to-month plans that give you the flexibility to adjust or cancel with just 30 days' notice. For those seeking cost savings, we also provide discounted rates on quarterly or annual agreements. Private offices typically require a minimum three-month commitment."
            },
            {
                q: "What's included in the membership fee?",
                a: "All memberships include high-speed Wi-Fi, printing services, complimentary beverages, access to common areas, and invitations to community events. Dedicated desk and private office members also receive mail handling services and 24/7 building access, including a multi-function printer/copier/scanner. Meeting room credits and additional services can be added to any plan."
            }
        ]
    },
    {
        title: "Facilities & Services",
        icon: Zap,
        questions: [
            {
                q: "What amenities and tech services are usually included in coworking spaces?",
                a: "Our flexible workspace model spaces come equipped with enterprise-grade Wi-Fi, ergonomic furniture, professional printing and scanning equipment, and modern conference technology. Tech amenities include phone booths for private calls, video conferencing capabilities, and secure cloud storage options. Additional perks include a fully stocked kitchen, comfortable lounge areas, shower facilities, and bike storage for a complete work-life experience."
            },
            {
                q: "Can I access meeting rooms or private offices in a coworking space?",
                a: "Yes, all members can book meeting rooms through our online platform or mobile app based on availability. Meeting rooms come in various sizes and are equipped with presentation screens, whiteboards, and video conferencing tools. Private offices, along with communal canteens, are available as dedicated spaces for individuals or teams who need consistent privacy and can be customized to suit your branding and workflow needs."
            },
            {
                q: "Are coworking spaces available 24/7 or have fixed working hours?",
                a: "Access hours depend on your membership level. Full access members with dedicated desks or private offices enjoy 24/7 shared office space work building access for maximum flexibility. Hot desk and day pass users have access during standard business hours, typically Monday through Friday, 8 AM to 6 PM. Extended hours can be arranged for special projects or events."
            },
            {
                q: "How does internet and tech support work in coworking spaces?",
                a: "We provide high-speed fiber internet with redundant connections to ensure reliable connectivity throughout the workspace and our fully equipped workstations. Our on-site community team offers technical support during business hours for any connectivity issues, printing problems, or equipment questions. For after-hours technical concerns, members can reach our support team via email or the member portal with response times typically within one business hour."
            }
        ]
    },
    {
        title: "Events & Community",
        icon: Users,
        questions: [
            {
                q: "Is it possible to use coworking spaces for hosting events or workshops?",
                a: "Absolutely! Our meeting rooms and event spaces, including various layouts, are available for workshops, training sessions, product launches, and networking events. Members receive discounted rates for event hosting and can access AV equipment, catering arrangements, and setup assistance. We also welcome proposals for community events that benefit our members and can help with promotion through our channels."
            },
            {
                q: "Do you host networking events?",
                a: "We organize regular community events including various types of networking mixers, skill-sharing workshops, lunch-and-learns, and social gatherings. Most events are complimentary for members and help foster collaboration within our community. Check our events calendar or subscribe to our newsletter to stay updated on upcoming activities."
            }
        ]
    },
    {
        title: "Getting Started",
        icon: Calendar,
        questions: [
            {
                q: "What is the process to get started or sign up at a coworking space?",
                a: "Getting started is simple—first, schedule a tour to visit our facility and see which workspace option suits you best, considering the different types of coworking spaces available. Once you've chosen your membership plan, complete the online registration form and submit required identification documents. After payment processing, you'll receive your access credentials, welcome package, and orientation details, typically within 24 hours. You can start using the space immediately after your orientation session."
            }
        ]
    }
];

const policies = [
    {
        title: "Privacy & Data Security",
        content: "We take your privacy seriously and comply with all applicable data protection regulations. Your personal information is securely stored and never shared with third parties without consent. Our network infrastructure includes enterprise-grade security measures to protect your work and data, ensuring you can enjoy the benefits of coworking in a safe environment.",
        icon: Shield
    },
    {
        title: "Refunds & Cancellations",
        content: "Month-to-month memberships can be cancelled with 30 days' notice. Day passes and meeting room bookings can be rescheduled or cancelled up to 24 hours in advance for a full refund. First month's membership fees are non-refundable, but we offer a satisfaction guarantee during your first week.",
        icon: FileText
    },
    {
        title: "Accessibility",
        content: "Our facility is fully accessible with wheelchair-friendly entrances, elevators, and restrooms. We track occupancy to ensure we're committed to providing an inclusive environment for all members. If you have specific accessibility needs, please contact us so we can ensure your experience is comfortable and productive.",
        icon: Users
    },
    {
        title: "Community Guidelines",
        content: "We maintain a professional, respectful environment for all members, ensuring peace of mind for everyone. Please use designated quiet zones for focused work and meeting rooms for phone calls. Keep shared spaces tidy and be mindful of others when using common amenities.",
        icon: CheckCircle2
    }
];

export default function FAQPage() {
    // Generate JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(cat =>
            cat.questions.map(q => ({
                "@type": "Question",
                "name": q.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.a
                }
            }))
        )
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#00a896]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
                        alt="FAQ Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 to-[#0f172a]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold uppercase tracking-wider mb-6">
                        Support Center
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about our coworking services, membership plans, facilities, and community policies.
                    </p>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {faqCategories.map((category, index) => (
                        <div key={index} className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 bg-[#e0fcf8] rounded-xl flex items-center justify-center text-[#00a896]">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                            </div>

                            <Accordion type="single" collapsible className="space-y-4">
                                {category.questions.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${index}-${i}`} className="bg-gray-50 border-none rounded-2xl px-8 shadow-sm overflow-hidden">
                                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:no-underline hover:text-[#00a896] text-left py-6">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </section>

            {/* Policies Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-headings mb-6">Our Policies</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {policies.map((policy, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-blue-50 text-[#273a96] rounded-xl flex items-center justify-center shrink-0">
                                        <policy.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{policy.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {policy.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#273a96] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a896] rounded-full blur-[100px] opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Still have questions?</h2>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                                Can't find the answer you're looking for? Please seek further assistance by chatting with our friendly team.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/contact" className="px-10 py-4 bg-white text-[#273a96] rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                                    <Mail className="h-5 w-5" /> Contact Support
                                </Link>
                                <a href="tel:+919789913368" className="px-10 py-4 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all flex items-center justify-center gap-2 shadow-lg">
                                    <Phone className="h-5 w-5" /> +91 97899 13368
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
