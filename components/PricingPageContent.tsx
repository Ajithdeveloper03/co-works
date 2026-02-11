'use client';

import { CheckCircle, Shield, Rocket, Building2, Calendar, Coffee, Printer, Wifi, Lock, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const pricingPlans = [
    {
        title: 'Day Pass',
        price: '₹499',
        period: '/day',
        desc: 'Perfect for travellers, freelancers, and occasional users.',
        features: ['Full access to coworking amenities', 'High-Speed WiFi', 'Unlimited Coffee/Tea', 'Common Area Access', 'Printing Facilities'],
        cta: 'Book Now',
        highlight: false,
        icon: Calendar
    },
    {
        title: 'Monthly Coworking',
        price: '₹4,999',
        period: '/month',
        desc: 'Flexible monthly plans for individuals and remote professionals.',
        features: ['Unlimited shared workspace access', 'High-Speed Internet', 'Meeting Room Credits', 'Community Events Access', 'Locker Facility Available'],
        cta: 'Join Now',
        highlight: false,
        icon: Coffee
    },
    {
        title: 'Dedicated Desk',
        price: '₹5,499',
        period: '/month',
        desc: 'Your own fixed desk with full coworking benefits.',
        features: ['Fixed Desk with Pedestal', '24/7 Office Access', 'Business Address Usage', 'Meeting Room Credits (5 Hrs)', 'Guest Reception Service'],
        cta: 'Get Started',
        highlight: true,
        icon: Lock
    },
    {
        title: 'Private Office',
        price: '₹11,999',
        period: '/seat/mo',
        desc: 'Fully furnished private offices for startups and teams.',
        features: ['Private Cabins (2-50 Seats)', 'Custom branding on door', 'Unlimited Meeting Room Access', 'Manager Cabin Included', 'Premium Ergonomic Chairs'],
        cta: 'Inquire Now',
        highlight: false,
        icon: Building2
    },
    {
        title: 'Virtual Office',
        price: '₹14,999',
        period: '/year',
        desc: 'Affordable plans for a professional business presence.',
        features: ['Prime Business Address', 'Mail Handling & Forwarding', 'Company Registration Support', 'Lobby Directory Listing', 'GST Compliant Invoices'],
        cta: 'Get Virtual',
        highlight: false,
        icon: Wifi
    },
    {
        title: 'Custom Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Tailor-made workspace solutions for large teams.',
        features: ['Custom Layouts', 'Dedicated Network Security', 'Private Server Room', 'Facility Management', 'Long-term Lease Benefits'],
        cta: 'Contact Sales',
        highlight: false,
        icon: Rocket
    }
];

export default function PricingPageContent() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white pt-32 pb-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=75&w=1200&auto=format&fit=crop"
                        alt="Pricing Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 via-[#0f172a]/50 to-[#0f172a]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-headings">Transparent Pricing for <br /><span className="text-[#00a896]">Every Stage</span></h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Whether you're a freelancer, startup, or enterprise, we have a flexible plan that grows with you. No hidden costs.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-white/10 p-1 rounded-full border border-white/20 relative backdrop-blur-md">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-[#0f172a] shadow-lg' : 'text-gray-300 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative ${billingCycle === 'yearly' ? 'bg-white text-[#0f172a] shadow-lg' : 'text-gray-300 hover:text-white'}`}
                        >
                            Yearly <span className="absolute -top-3 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md animate-pulse">Save 18%</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`group bg-white rounded-[2rem] p-8 shadow-xl border-2 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.highlight ? 'border-[#00a896] relative overflow-hidden ring-4 ring-[#00a896]/10' : 'border-transparent hover:border-blue-100'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-[#00a896] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${plan.highlight ? 'bg-[#00a896]/10 text-[#00a896]' : 'bg-blue-50 text-[#273a96] group-hover:bg-[#273a96] group-hover:text-white'}`}>
                                <plan.icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-headings">{plan.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.desc}</p>

                            <div className="flex items-baseline mb-8">
                                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-[#00a896]' : 'text-[#0f172a]'}`}>
                                    {billingCycle === 'yearly' && plan.price !== 'Custom' && plan.period !== '/day' && plan.period !== '/year'
                                        ? '₹' + (parseInt(plan.price.replace(/[^0-9]/g, '')) * 10).toLocaleString()
                                        : plan.price}
                                </span>
                                <span className="text-gray-500 ml-1 font-medium">
                                    {billingCycle === 'yearly' && plan.period === '/month' ? '/year' : plan.period}
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-8 flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-[#00a896]' : 'text-gray-400 group-hover:text-[#273a96]'}`} />
                                            <span className="text-gray-600 text-sm font-medium">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/contact"
                                className={`block w-full text-center py-4 rounded-xl font-bold transition-all shadow-lg ${plan.highlight ? 'bg-[#00a896] text-white hover:bg-[#00897b] hover:shadow-[#00a896]/30' : 'bg-[#0f172a] text-white hover:bg-[#273a96] hover:shadow-blue-900/30'}`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ / Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 border border-gray-100">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-[#0f172a] mb-4 font-headings">Not sure which plan fits you?</h2>
                            <p className="text-gray-600">Our team can help you analyze your requirements and suggest the most cost-effective solution for your business.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-6">
                                <Phone className="h-10 w-10 text-[#00a896] mx-auto mb-4" />
                                <h4 className="font-bold text-lg mb-2">Call Us</h4>
                                <p className="text-gray-500 mb-4">Immediate assistance</p>
                                <a href="tel:+919786655005" className="text-[#273a96] font-bold hover:underline">+91 86755-56079</a>
                            </div>
                            <div className="p-6 border-x border-gray-200">
                                <Building2 className="h-10 w-10 text-[#00a896] mx-auto mb-4" />
                                <h4 className="font-bold text-lg mb-2">Book a Tour</h4>
                                <p className="text-gray-500 mb-4">See the space yourself</p>
                                <Link href="/contact" className="text-[#273a96] font-bold hover:underline">Schedule Visit</Link>
                            </div>
                            <div className="p-6">
                                <Rocket className="h-10 w-10 text-[#00a896] mx-auto mb-4" />
                                <h4 className="font-bold text-lg mb-2">Enterprise</h4>
                                <p className="text-gray-500 mb-4">Team larger than 20?</p>
                                <Link href="/solutions" className="text-[#273a96] font-bold hover:underline">View Solutions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
