'use client';

import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { usePopup } from '@/context/PopupContext';
import Link from 'next/link';

export default function SmartFinancialChoice() {
    const { openPopup } = usePopup();

    return (
        <section className="py-24 bg-gray-50/50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 font-headings">
                        The Smart Financial Choice
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                        Compare the true cost of your current setup
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* WFH */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[60px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-10 text-center font-headings">Working From Home</h3>
                        <div className="space-y-8 relative z-10">
                            <ComparisonItem icon={<X className="w-5 h-5 text-red-500" />} label="Price:" value="₹5,999+/month (hidden costs)" />
                            <ComparisonItem icon={<X className="w-5 h-5 text-red-500" />} label="Productivity:" value="Distractions kill 2–3 hours daily" />
                            <ComparisonItem icon={<X className="w-5 h-5 text-red-500" />} label="Professional Image:" value="Low client confidence" />
                            <ComparisonItem icon={<X className="w-5 h-5 text-red-500" />} label="Networking:" value="Zero growth opportunities" />
                            <ComparisonItem icon={<X className="w-5 h-5 text-red-500" />} label="Flexibility:" value="Stuck at home" />
                        </div>
                    </div>

                    {/* Traditional */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-[60px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-10 text-center font-headings">Traditional Office</h3>
                        <div className="space-y-8 relative z-10">
                            <ComparisonItem icon={<AlertTriangle className="w-5 h-5 text-orange-500" />} label="Price:" value="₹15,000–30,000/month" />
                            <ComparisonItem icon={<AlertTriangle className="w-5 h-5 text-orange-500" />} label="Setup Cost:" value="₹50,000+ upfront" />
                            <ComparisonItem icon={<AlertTriangle className="w-5 h-5 text-orange-500" />} label="Contract:" value="11-month lock-in minimum" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Professional Image:" value="Yes" />
                            <ComparisonItem icon={<AlertTriangle className="w-5 h-5 text-orange-500" />} label="Flexibility:" value="Very low" />
                        </div>
                    </div>

                    {/* Universe Coworks */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-[#00a896] shadow-xl relative overflow-hidden group">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-[#00a896] text-white rounded-full text-xs font-bold shadow-lg z-20">
                            BEST VALUE
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-10 text-center font-headings">Universe Coworks</h3>
                        <div className="space-y-8">
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Price:" value="₹4,999/month" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Setup Cost:" value="₹0 — Move in today" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Contract:" value="No commitment - Cancel anytime" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Professional Image:" value="Premium workspace + address" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Flexibility:" value="Day/Week/Month options" />
                            <ComparisonItem icon={<CheckCircle2 className="w-5 h-5 text-[#00a896]" />} label="Community:" value="500+ professionals" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/pricing"
                        className="px-10 py-4 bg-[#00a896] text-white rounded-full font-bold text-xl shadow-xl hover:bg-teal-700 transition-all inline-block shadow-teal-700/10"
                    >
                        View Full Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ComparisonItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="shrink-0 mt-1">{icon}</div>
            <div>
                <span className="block font-bold text-[#0f172a] text-lg mb-0.5 font-headings">{label}</span>
                <span className="text-gray-500 font-medium text-base md:text-lg leading-snug">{value}</span>
            </div>
        </div>
    );
}

