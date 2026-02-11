'use client';

import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false });
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: false });
import { MapPin, ChevronDown, CheckCircle, Users, TrendingUp, Zap, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePopup } from '@/context/PopupContext';

export default function HomeContent() {
    const { openPopup } = usePopup();
    return (
        <div className="min-h-screen bg-white font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://universecoworks.com/"
                        }
                    ]
                })
            }} />
            <HeroSlider />

            {/* About Us Section - Split Layout with Image */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#273a96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase font-headings">
                                <MapPin className="h-4 w-4" />
                                <span>Trichy's Premier Coworking</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight font-headings tracking-tight">
                                About Universe Coworks: <span className="text-[#273a96]">Trichy's Premier</span> Hub.
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Universe Coworks is Trichy's leading coworking space in Tiruchirappalli, providing professionals, entrepreneurs, and businesses with premium flexible workspace solutions. Located strategically across Trichy's key business districts, we've empowered over 500 professionals and 100+ companies.
                                </p>
                                <p>
                                    <strong>Why We Built in Trichy:</strong> As Tamil Nadu's educational hub and emerging IT destination, Trichy needed modern workspace infrastructure. We bridge the gap between metro-quality facilities and Tier-2 accessibility.
                                </p>
                            </div>

                            <div className="pt-4 grid sm:grid-cols-2 gap-4">
                                {[
                                    "Salai Road & Shastri Road Junction zone",
                                    "Near  Chatram  Bus Stand"

                                ].map((item, i) => (
                                    <div key={i} className="flex items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                                        <CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" />
                                        <span className="text-gray-700 font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <Link href="/about" className="text-[#273a96] font-bold text-lg hover:underline inline-flex items-center group">
                                    Read Our Story <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Image Composition */}
                        <div className="relative group lg:pl-10">
                            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=75&w=1200&auto=format&fit=crop"
                                    alt="Trichy Coworking Interior"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-18 right-8  sm:opacity-0 md:opacity-100 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-[#00a896] rounded-xl shadow-lg">
                                            <Users className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold font-headings">500+</p>
                                            <p className="text-sm text-gray-200 uppercase tracking-wider">Active Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Floating Image */}
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl block">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=400&auto=format&fit=crop"
                                    alt="Team Collaboration"
                                    fill
                                    sizes="200px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Bento Grid with Images */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 font-headings tracking-tight">Why Choose Universe in Trichy?</h2>
                        <p className="text-lg text-gray-500 font-medium">
                            Finding the right coworking space in Trichy means balancing location, amenities, and cost. We deliver all three.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Card 1: Strategic Location (Image Background) */}
                        <div className="md:col-span-2 relative h-[400px] rounded-[2.5rem] overflow-hidden group shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop"
                                alt="Trichy Location"
                                fill
                                sizes="(max-width: 1280px) 100vw, 66vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/40 p-10 flex flex-col justify-center">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white">
                                    <MapPin className="h-7 w-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 font-headings">Prime Locations</h3>
                                <p className="text-gray-200 mb-6 leading-relaxed max-w-md">
                                    Reach our workspace within 10 minutes from Trichy Junction. Walking distance to banks and restaurants in Thillai Nagar.
                                </p>
                                <Link href="/locations" className="inline-flex items-center text-[#00a896] font-bold hover:text-white transition-colors">
                                    View Locations <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Enterprise Amenities (Blue Brand Color) */}
                        <div className="bg-[#273a96] text-white p-10 rounded-[2.5rem] relative overflow-hidden group shadow-lg flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="h-7 w-7 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-headings text-white">Enterprise Grade</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    High-speed fiber internet, 100% power backup, and ergonomic furniture designed for productivity.
                                </p>
                            </div>

                            <div className="mt-8 relative h-32 w-full rounded-xl overflow-hidden border border-white/20">
                                <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=75&w=800&auto=format&fit=crop" alt="Office Amenities" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                            </div>
                        </div>

                        {/* Card 3: Community (Teal Brand Color) */}
                        <div className="bg-[#00a896] text-white p-10 rounded-[2.5rem] relative overflow-hidden group shadow-lg flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-headings">Vibrant Community</h3>
                                <p className="text-teal-50 leading-relaxed">
                                    Join 500+ Trichy professionals. Networking events, workshops, and startup mixers.
                                </p>
                            </div>
                            <div className="mt-8 relative h-32 w-full rounded-xl overflow-hidden border border-white/20">
                                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=75&w=800&auto=format&fit=crop" alt="Community Event" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                            </div>
                        </div>

                        {/* Card 4: Cost Effective (Split Image/Text) */}
                        <div className="md:col-span-2 xl:col-span-2 bg-white rounded-[2.5rem] overflow-hidden group shadow-lg border border-gray-100">
                            <div className="grid md:grid-cols-2 h-full">
                                <div className="p-10 flex flex-col justify-center">
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                                        <TrendingUp className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-headings">Cost-Effective Growth</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Save 40% compared to traditional offices. No deposits, no maintenance bills, just plug and play.
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-auto">
                                    <Image
                                        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=75&w=800&auto=format&fit=crop"
                                        alt="Financial Growth"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSlider />

            {/* FAQ Section with Side Image */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
                        <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl block">
                            <Image
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=75&w=1200&auto=format&fit=crop"
                                alt="Support Team"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#273a96]/90 to-transparent flex flex-col justify-end p-10">
                                <h3 className="text-3xl font-bold text-white mb-2 font-headings">Still have questions?</h3>
                                <p className="text-blue-100 mb-6">Our Trichy team is here to help you find the perfect plan.</p>
                                <button onClick={openPopup} className="bg-white text-[#273a96] px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition-colors">
                                    Generate Enquiry
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 font-headings tracking-tight">Frequently Asked Questions</h2>
                                <p className="text-gray-500 text-lg font-medium">Everything you need to know about Trichy's premier workspace.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { q: "Where is Universe Coworks located in Trichy?", a: "Our premium co-working spaces are strategically located at two key areas in Trichy: • East Thillai Nagar Salai Road • Chatram Bus Stand" },
                                    { q: "Is Universe Coworks accessible from Trichy Junction?", a: "20 mins to reach our location From trichy Junction, 5-10 mins from Chatram bus stand" },
                                    { q: "Do you offer day passes for coworking?", a: "Yes. Our day pass starts at ₹499/day. It includes high-speed internet, unlimited coffee, and access to hot desks. Perfect for travelers and freelancers." },
                                    { q: "Are there long-term contracts?", a: "No. All memberships operate on a flexible month-to-month basis. You can upgrade, downgrade, or cancel with notice. Zero lock-in for hot desks." },
                                    { q: "How do I book a space?", a: "You can book online instantly or schedule a free tour. We offer immediate move-in availability." }
                                ].map((item, idx) => (
                                    <details key={idx} className="group bg-gray-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-white open:shadow-lg open:border-[#00a896]/20 border border-transparent">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#0f172a] font-bold text-lg select-none">
                                            {item.q}
                                            <span className="relative size-5 shrink-0">
                                                <ChevronDown className="h-5 w-5 text-[#00a896] group-open:rotate-180 transition-transform" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-600 animate-fade-in pl-4 border-l-2 border-[#00a896]">
                                            {item.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#273a96] py-24 px-4 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=75&w=1600&auto=format&fit=crop"
                        alt="Office Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[#273a96]/60"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-headings tracking-tight text-white">Ready to Upgrade Your Workspace?</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Join Trichy's fastest-growing professional community today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button onClick={openPopup} className="bg-[#00a896] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00897b] transition-transform hover:scale-105 shadow-xl shadow-teal-900/20">
                            Book a Free Tour
                        </button>
                        <Link href="/pricing" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#273a96] transition-colors">
                            View Plans
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
