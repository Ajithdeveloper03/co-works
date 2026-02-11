'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight, Globe, Sparkles, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPageContent() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
            } else {
                console.error('Submission failed');
                setFormStatus('idle'); // simple error handling
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('idle');
        }
    };

    return (
        <div className="min-h-screen bg-[#fafbfc] font-sans selection:bg-[#273a96] selection:text-white">
            {/* Hero Section - The Open Invitation */}
            <section className="relative h-[65vh] min-h-[550px] bg-[#0a0f1a] text-white flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop"
                        alt="Connect with Universe"
                        fill
                        className="object-cover opacity-40 scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafbfc] to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent z-0"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-20 w-full pt-20">
                    <div className="max-w-4xl space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#00a896] text-sm font-bold border border-white/10">
                            <Sparkles className="h-4 w-4" />
                            <span className="uppercase tracking-[0.3em]">We're Always Online</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-headings tracking-tight">
                            Let's build your <br />
                            <span className="text-[#00a896]">Future Network.</span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-2xl leading-relaxed font-light">
                            From single desks to custom offshore headquarters, our team is ready to design your perfect ecosystem in Trichy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section - Bento Style Layout */}
            <section className="relative z-30 -mt-16 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* Contact Form Area */}
                        <div className="lg:col-span-8 bg-white rounded-[3rem] shadow-[0_32px_128px_-32px_rgba(0,0,0,0.12)] p-10 md:p-16 border border-gray-100 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a896]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            {formStatus === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-10 border-2 border-green-100 shadow-xl">
                                        <Send className="h-10 w-10 text-green-600 animate-bounce" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-[#0f172a] mb-6 font-headings">Inquiry Received!</h3>
                                    <p className="text-gray-500 max-w-sm mb-10 text-lg">Thank you for reaching out. A Universe growth advisor will connect with you within the next 2 hours.</p>
                                    <button onClick={() => setFormStatus('idle')} className="px-8 py-3 bg-[#273a96] text-white rounded-xl font-bold hover:bg-[#1e2a78] transition-all">Send New Application</button>
                                </div>
                            ) : (
                                <div className="relative z-10">
                                    <div className="mb-14">
                                        <h2 className="text-4xl font-black text-[#0f172a] font-headings mb-4">Start your journey.</h2>
                                        <p className="text-gray-400 font-medium max-w-md">Complete the form below and we'll prepare a custom proposal for your business needs.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-10 group">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Full Name</label>
                                                <input name="name" type="text" required className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#273a96] focus:bg-white focus:shadow-xl outline-none transition-all placeholder:text-gray-300 font-bold text-gray-900" placeholder="e.g. Anand Kumar" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Work Email</label>
                                                <input name="email" type="email" required className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#273a96] focus:bg-white focus:shadow-xl outline-none transition-all placeholder:text-gray-300 font-bold text-gray-900" placeholder="anand@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Phone Number</label>
                                                <input name="phone" type="tel" required className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#273a96] focus:bg-white focus:shadow-xl outline-none transition-all placeholder:text-gray-300 font-bold text-gray-900" placeholder="+91 97866 XXXX" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Proposed Solution</label>
                                                <div className="relative">
                                                    <select name="interest" className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#273a96] focus:bg-white focus:shadow-xl outline-none transition-all text-gray-700 font-bold appearance-none cursor-pointer">
                                                        <option>Select Workspace Type</option>
                                                        <option>Private Office (2-50 Pax)</option>
                                                        <option>Dedicated Desk</option>
                                                        <option>Enterprise Build-to-Suit</option>
                                                        <option>Virtual Office / GST</option>
                                                        <option>Meeting / Event Space</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Your Requirements</label>
                                            <textarea name="message" rows={4} className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#273a96] focus:bg-white focus:shadow-xl outline-none transition-all placeholder:text-gray-300 font-bold text-gray-900" placeholder="Tell us about your team size, budget, or move-in timeline..."></textarea>
                                        </div>

                                        <button type="submit" disabled={formStatus === 'submitting'} className="group w-full py-6 bg-gray-900 text-white rounded-[1.5rem] font-black text-2xl hover:bg-[#273a96] transition-all shadow-xl hover:-translate-y-1 disabled:opacity-70 flex items-center justify-center">
                                            {formStatus === 'submitting' ? (
                                                <span className="flex items-center"><span className="animate-spin mr-3">◌</span> Processing Your Hub...</span>
                                            ) : (
                                                <span className="flex items-center">Apply for Membership <ChevronRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" /></span>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Support Info Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-[#273a96] text-white rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a896] rounded-full blur-3xl -mr-16 -mt-16 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-10 font-headings text-white">Office Locations</h3>
                                <div className="space-y-10 relative z-10">
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 text-[#00a896] font-black text-xs uppercase tracking-widest">
                                            <MapPin className="h-4 w-4" />
                                            <span>Thillai Nagar East</span>
                                        </div>
                                        <p className="text-white font-bold leading-relaxed">74A, Salai Rd, 2nd floor
                                            opp. Vaishali Hospital, Thillai
                                            Nagar East, Tiruchirappalli,
                                            Tamil Nadu 620018</p>
                                    </div>
                                    <div className="space-y-3 pt-6 border-t border-white/10">
                                        <div className="flex items-center space-x-3 text-blue-400 font-black text-xs uppercase tracking-widest">
                                            <MapPin className="h-4 w-4" />
                                            <span>Chatiram Bus Stand</span>
                                        </div>
                                        <p className="text-white font-bold leading-relaxed">Door No. 2, Ground Floor, 34,
                                            1st Cross Rd, V N Nagar,
                                            Chatram
                                            Tiruchirappalli, Tamil Nadu
                                            620002
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white rounded-[3rem] p-12 shadow-xl border border-gray-800">
                                <div className="space-y-8">
                                    <div className="flex items-center group cursor-pointer">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#00a896] group-hover:bg-[#00a896] group-hover:text-white transition-all">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div className="ml-6">
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-none mb-2">Speak to Growth Team</p>
                                            <p className="text-lg font-black">+91 86755-56079</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center group cursor-pointer pt-6 border-t border-white/5">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#273a96] group-hover:bg-[#273a96] group-hover:text-white transition-all">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div className="ml-6">
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-none mb-2">Write to Member Ops</p>
                                            <p className="text-lg font-black italic underline decoration-[#273a96]">sales@universecoworks.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/frequently-asked-questions" className="block bg-[#00a896] rounded-[2.5rem] p-8 text-white group hover:shadow-2xl transition-all overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:scale-125 transition-transform">
                                    <Globe className="h-24 w-24 -mt-4 -mr-4" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Common Questions?</h4>
                                <p className="text-white/80 text-sm font-medium mb-4">Fast answers about pricing, GST, and setup cycles.</p>
                                <div className="flex items-center text-xs font-black uppercase tracking-[0.2em] pt-4 border-t border-white/10">
                                    Explore FAQs <ChevronRight className="ml-2 h-4 w-4" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instant Action CTA */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-headings text-gray-900 tracking-tight">Prefer a direct chat?</h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        Skip the form and join our waiting list instantly via WhatsApp or a direct call during business hours.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button className="w-full sm:w-auto px-12 py-5 bg-[#00a896] text-white rounded-2xl font-black text-xl hover:bg-[#00897b] transition-all shadow-xl">
                            Message on WhatsApp
                        </button>
                        <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#273a96] border-2 border-[#273a96] rounded-2xl font-black text-xl hover:bg-[#273a96] hover:text-white transition-all shadow-lg">
                            Call Advisor
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
