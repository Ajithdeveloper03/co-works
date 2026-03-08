'use client';

import { User, Leaf, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BuiltForHowYouWork() {
    const plans = [
        {
            title: "For Freelancers & Solopreneurs",
            description: "Dedicated desks, high-speed internet, meeting rooms, and a community of growth-minded professionals like you.",
            price: "₹4,999/month",
            link: "/pricing",
            linkText: "Explore Freelancer Plans",
            icon: <User className="w-8 h-8 text-[#00a896]" />,
            badge: "Most Popular",
            borderColor: "border-[#00a896]"
        },
        {
            title: "For Startup Teams (2–6 people)",
            description: "Private cabins, team collaboration zones, scalable space as you grow. Zero deposit hassle.",
            price: "₹14,999/month",
            link: "/pricing",
            linkText: "View Team Options",
            icon: <Leaf className="w-8 h-8 text-[#00a896]" />,
            borderColor: "border-gray-100"
        },
        {
            title: "For Branch Offices & Teams",
            description: "Fully managed, professional workspace in a prime location — ideal for training sessions, recruitment drives, and satellite office setups.",
            price: "₹15,999/month",
            link: "/contact",
            linkText: "Contact Us",
            icon: <Building2 className="w-8 h-8 text-[#00a896]" />,
            borderColor: "border-gray-100"
        }
    ];

    return (
        <section className="py-24 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 font-headings">
                        Built for How You Work
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
                        Whether you're a solo freelancer, growing startup, or enterprise team — we have the perfect setup.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-[2rem] border-2 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${plan.borderColor}`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#00a896] text-white rounded-full text-xs font-bold shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="w-16 h-16 bg-[#e6f6f4] rounded-2xl flex items-center justify-center mb-8">
                                {plan.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-4 leading-tight font-headings">
                                {plan.title}
                            </h3>

                            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-medium min-h-[80px]">
                                {plan.description}
                            </p>

                            <div className="mb-8">
                                <span className="text-2xl md:text-3xl font-bold text-[#00a896]">{plan.price}</span>
                            </div>

                            <Link
                                href={plan.link}
                                className="inline-flex items-center text-[#00a896] font-bold text-lg hover:underline group decoration-2 underline-offset-8"
                            >
                                {plan.linkText} <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

