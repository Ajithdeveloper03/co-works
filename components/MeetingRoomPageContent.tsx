'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    MapPin,
    Wifi,
    MessageSquare,
    Coffee,
    Clock,
    Maximize2,
    ArrowRight,
    UserCheck,
    Building2,
    Lock,
    Layout,
    Briefcase,
    Monitor,
    CheckCircle2,
    Printer,
    ChevronRight,
    Search,
    CheckSquare,
    Users,
    Presentation,
    Laptop,
    Smartphone,
    Zap,
    Hotel,
    CalendarCheck,
    Star
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePopup } from '@/context/PopupContext';

const faqs = [
    {
        q: "1. What are the best meeting rooms available in Trichy for small business gatherings?",
        a: "Meeting rooms in commercial areas like Thillai Nagar, Junction, and Cantonment cater specifically to small businesses, offering boardrooms for 6–15 people and workshop spaces for 15–30 attendees. Coworking-affiliated meeting rooms provide professional environments with modern amenities and flexible booking, ideal for client presentations, team meetings, and strategic planning sessions."
    },
    {
        q: "2. What are the average rental rates for meeting rooms in Trichy?",
        a: "Rental rates vary based on location, capacity, amenities, and booking duration. Hourly bookings typically start around ₹600–₹800 for basic rooms and range up to ₹1,500+ for premium equipped spaces. Half-day and full-day packages offer better per-hour value. Premium locations near city center command higher rates than suburban venues."
    },
    {
        q: "3. Which meeting spaces in Trichy offer modern amenities like Wi-Fi and projectors?",
        a: "Most professional meeting spaces in Trichy now include high-speed Wi-Fi (100+ Mbps), HD projectors or LED displays, video conferencing capabilities, whiteboards, and charging facilities as standard amenities. Coworking-based meeting rooms and dedicated business centers typically provide the most comprehensive technology packages with backup systems and technical support."
    },
    {
        q: "4. Are there coworking spaces in Trichy with hourly meeting room options?",
        a: "Yes, several coworking spaces across Trichy offer hourly meeting room bookings, eliminating the need for long-term commitments. These venues provide flexible scheduling through online platforms, same-day availability for urgent meetings, and member discount programs. Hourly options suit businesses with variable meeting frequencies or those testing professional venues before committing to regular usage."
    },
    {
        q: "5. Where can I find conference halls in Trichy suitable for corporate events?",
        a: "Conference halls accommodating 50–200 people are available through dedicated convention centers like Grand Gardenia Convention Centre, hotel event facilities, and larger coworking spaces offering scalable meeting solutions. These venues provide event coordination support, stage setups, professional audio-visual systems, and catering services for product launches, training programs, and annual corporate gatherings."
    },
    {
        q: "6. Do hotels in Trichy offer meeting and event facilities for rent?",
        a: "Yes, several hotels in Trichy provide meeting and event facilities including Femina Hotel, Grand Gardenia Hotel, Hotel Sangam, and properties near the airport. These venues offer integrated advantages: on-site accommodation for traveling attendees, catering services, concierge support, and parking facilities. Hotel meeting spaces suit multi-day workshops, client visits requiring overnight stays, and events needing comprehensive hospitality services."
    },
    {
        q: "7. What is the booking process for meeting halls in Trichy?",
        a: "The standard booking process involves: (1) defining your requirements (attendee count, date, duration, amenities), (2) searching venues through online platforms or direct contact, (3) reviewing availability and comparing options, (4) submitting booking requests with company details, (5) confirming reservation with advance payment (typically 25–50% deposit), and (6) receiving confirmation with access instructions. Most venues provide digital booking systems for streamlined reservations."
    },
    {
        q: "8. Can you provide a list of meeting rooms in Trichy with seating capacities for 10 to 30 people?",
        a: "Meeting rooms accommodating 10–30 people are widely available: boardrooms in Thillai Nagar and Cantonment (10–15 capacity), workshop rooms along Srirangam Road (15–20 capacity), and training halls near Junction (20–30 capacity). Coworking spaces, dedicated business centers, and hotel conference facilities offer various configurations within this capacity range, with specific venue names available through online booking platforms and local business directories."
    },
    {
        q: "9. Are there meeting rooms near Tiruchirappalli Airport for travelers?",
        a: "Yes, several meeting venues operate within 5–10 kilometers of Tiruchirappalli Airport, particularly along Airport Road. These locations serve traveling executives managing tight schedules, businesses hosting clients arriving from other cities, and quick turnaround meetings between flight connections. Airport-proximate venues often provide express booking options and understand time-sensitive business requirements."
    },
    {
        q: "10. What platforms help book meeting spaces in Trichy online?",
        a: "Digital platforms facilitating Trichy meeting space bookings include myHQ (aggregated listings with reviews), Qdesq (advanced filtering by amenities and capacity), Gofloaters (mobile-first booking with flexible cancellation), and direct venue websites (often offering best rates and customization). These platforms provide real-time availability, transparent pricing, user reviews, and instant confirmation systems, simplifying the search and reservation process."
    }
];

export default function MeetingRoomPageContent() {
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
                                "name": "What are the best meeting rooms available in Trichy for small business gatherings?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Meeting rooms in areas like Thillai Nagar, Junction, and Cantonment cater to small businesses with boardrooms for 6–15 people and workshop spaces for 15–30 attendees. Coworking-affiliated meeting rooms offer professional environments, modern amenities, and flexible booking, making them ideal for client presentations, team meetings, and planning sessions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the average rental rates for meeting rooms in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Rental rates depend on location, capacity, amenities, and booking duration. Hourly prices usually start at ₹600–₹800 for basic rooms and can go up to ₹1,500+ for premium spaces. Half-day and full-day packages provide better value, while city-center locations are typically priced higher than suburban venues."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which meeting spaces in Trichy offer modern amenities like Wi-Fi and projectors?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most professional meeting spaces in Trichy include high-speed Wi-Fi (100+ Mbps), HD projectors or LED displays, video conferencing systems, whiteboards, and charging facilities. Coworking-based rooms and business centers usually provide the most comprehensive technology support and backup systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there coworking spaces in Trichy with hourly meeting room options?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, many coworking spaces in Trichy offer hourly meeting room bookings without long-term commitments. They provide flexible scheduling, same-day availability, and member discounts, making them suitable for businesses with variable meeting needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where can I find conference halls in Trichy suitable for corporate events?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Conference halls for 50–200 people are available at convention centers like Grand Gardenia Convention Centre, hotels, and larger coworking spaces. These venues provide event coordination, professional AV systems, stage setups, and catering services for corporate events and training programs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do hotels in Trichy offer meeting and event facilities for rent?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, hotels such as Femina Hotel, Grand Gardenia Hotel, Hotel Sangam, and properties near the airport offer meeting and event spaces. They provide catering, parking, concierge support, and accommodation for multi-day workshops or visiting clients."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the booking process for meeting halls in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The booking process usually involves defining requirements, searching venues online or directly, comparing availability and pricing, submitting a booking request, confirming with an advance payment (typically 25–50%), and receiving confirmation with access details. Many venues support digital booking systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you provide a list of meeting rooms in Trichy with seating capacities for 10 to 30 people?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Meeting rooms for 10–30 people include boardrooms in Thillai Nagar and Cantonment (10–15 seats), workshop rooms along Srirangam Road (15–20 seats), and training halls near Junction (20–30 seats). Coworking spaces, business centers, and hotels offer multiple configurations within this range."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there meeting rooms near Tiruchirappalli Airport for travelers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, several meeting venues operate within 5–10 km of Tiruchirappalli Airport, especially along Airport Road. These spaces are suitable for traveling executives, quick meetings, and time-sensitive business discussions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What platforms help book meeting spaces in Trichy online?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Popular platforms include myHQ, Qdesq, Gofloaters, and direct venue websites. They provide real-time availability, transparent pricing, user reviews, and instant booking confirmations, simplifying the reservation process."
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
                        "name": "Meeting room",
                        "item": "https://universecoworks.com/meeting-room-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2000&auto=format&fit=crop"
                        alt="Modern conference table with multiple ergonomic chairs in a brightly lit professional meeting room in Trichy."
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#273a96]/20 border border-[#273a96]/30 text-blue-400 text-sm font-bold   tracking-wider mb-6">
                            Collaborate & Succeed
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Meeting Room in <span className="text-blue-500">Trichy</span>: Key to Your Success
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-medium">
                            Finding the right meeting space in Trichy can transform how your business collaborates, presents, and grows. Whether you're hosting client presentations, team workshops, or corporate training sessions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={openPopup}
                                className="px-10 py-5 bg-[#273a96] text-white rounded-full font-bold text-lg hover:bg-[#1e2a78] transition-all shadow-xl hover:-translate-y-1 group flex items-center"
                            >
                                Book Your Perfect Space <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-12  ">
                            Tiruchirappalli offers a diverse range of professional venues designed for modern business needs. This comprehensive guide helps you navigate Trichy's meeting room landscape, compare options, understand pricing, and book the perfect space for your next business gathering.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                            <Image src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200" alt="Team of professionals collaborating around a large boardroom table, showcasing a premium meeting room in Trichy." fill className="object-cover" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-headings leading-tight">Best Meeting Rooms in Trichy for Small Business Gatherings (10–30 People)</h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Small and medium-sized businesses in Trichy increasingly choose dedicated meeting rooms over traditional office settings for their professional flexibility and cost-effectiveness.
                            </p>
                            <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-50">
                                <h3 className="text-xl font-bold text-[#273a96] mb-4">Top-Tier Options:</h3>
                                <p className="text-gray-700 font-medium">
                                    Universe Coworks Meeting Rooms stand out for their business-ready infrastructure, offering fully-equipped spaces accommodating 10–30 participants with flexible configurations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features & Why section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                <Layout className="h-8 w-8 text-[#00a896]" /> Key Features to Expect:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Boardroom-style setups for 10–15 people",
                                    "Classroom configurations for training sessions (15–25 attendees)",
                                    "U-shape arrangements for collaborative workshops (12–20 people)",
                                    "Theater-style seating for presentations (up to 30 participants)"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-600 font-medium">
                                        <div className="h-6 w-6 bg-[#00a896]/10 text-[#00a896] rounded-full flex items-center justify-center shrink-0 mt-0.5">•</div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                <Users className="h-8 w-8 text-[#273a96]" /> Why Small Businesses Prefer These Spaces:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Professional credibility when meeting clients",
                                    "No maintenance or utility overhead",
                                    "Access to premium amenities on-demand",
                                    "Scalable capacity matching business growth",
                                    "Central locations reducing travel time for teams and clients"
                                ].map((reason, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-600 font-medium">
                                        <CheckCircle2 className="h-6 w-6 text-[#273a11] shrink-0 mt-0.5" />
                                        {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Average Rental Rates for Meeting Rooms in Trichy</h2>
                            <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white">
                                <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-3">
                                    <Briefcase className="h-6 w-6" /> Pricing Factors:
                                </h3>
                                <p className="text-gray-300 font-medium leading-relaxed">
                                    Location proximity to business districts, included technology amenities, catering services, seating capacity, and booking duration all influence final costs. Premium venues near Junction and Thillai Nagar command higher rates, while emerging business areas offer competitive value.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-[#273a96] mb-3">Cost-Saving Tips:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                                        <li>• Book recurring slots (15–25% savings)</li>
                                        <li>• Choose off-peak hours</li>
                                        <li>• Bundle multiple services</li>
                                        <li>• Consider coworking-based rooms</li>
                                    </ul>
                                </div>
                                <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=600" alt="High-quality office interior with modern seating and presentation tools, representing a cost-effective meeting room in Trichy." fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-[#f8fafc] p-12 rounded-[4rem] border border-gray-100 text-center space-y-8 relative z-10">
                                <div className="inline-block p-4 bg-white rounded-2xl shadow-xl mb-4 group-hover:rotate-6 transition-transform">
                                    <Zap className="h-10 w-10 text-yellow-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Hourly Structure</h3>
                                <div className="space-y-4 max-w-sm mx-auto">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <span className="font-bold text-gray-500">Non-Members</span>
                                        <span className="font-black text-[#273a96]">Capacity Based</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <span className="font-bold text-gray-500">Coworking Members</span>
                                        <span className="font-black text-[#00a896]">Priority Booking</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="font-bold text-gray-500">Monthly Packages</span>
                                        <span className="font-black text-orange-600">Bundled Discount</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Amenities */}
            <section className="py-24 bg-gray-900 text-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#273a96] opacity-10 blur-[150px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings text-white">Modern Meeting Spaces in Trichy</h2>
                        <p className="text-xl text-blue-300 font-medium">Integrating enterprise-grade technology with hospitality-focused services.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold flex items-center text-white gap-4"><Monitor className="h-8 w-8 text-[#00a896]" /> Essential Technology</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "High-speed Wi-Fi (100–200 Mbps) with backup",
                                    "HD projectors or 4K LED displays with wireless casting",
                                    "Video conferencing systems (Zoom, Teams, etc)",
                                    "Professional microphone and speaker setups",
                                    "Multiple HDMI ports and USB charging stations",
                                    "Interactive whiteboards or presentation boards"
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                        <Wifi className="h-5 w-5 text-blue-400" />
                                        <span className="font-medium text-gray-200">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold flex items-center text-white gap-4"><Coffee className="h-8 w-8 text-orange-400" /> Comfort and Convenience</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Individual climate temperature controls",
                                    "Ergonomic seating for extended sessions",
                                    "Natural lighting with blackout options",
                                    "Complimentary tea, coffee, and water",
                                    "Dedicated reception and visitor management",
                                    "Secure elevators and accessible facilities"
                                ].map((comfort, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                        <ShieldCheck className="h-5 w-5 text-teal-400" />
                                        <span className="font-medium text-gray-200">{comfort}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hourly Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[25rem] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl skew-x-0 lg:skew-x-1">
                                <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200" alt="Sleek and professional meeting room setup with a minimalist design, available on an hourly basis in Trichy." fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden lg:block">
                                <p className="text-4xl font-black text-[#273a96]">1 Hr</p>
                                <p className="font-bold text-gray-500   tracking-widest  text-sm">Minimum Booking</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight   tracking-tight">Coworking Spaces Offering Meeting Rooms on Hourly Basis</h2>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                Coworking spaces revolutionize meeting room access in Trichy by eliminating long-term commitments while maintaining professional standards.
                            </p>
                            <div className="space-y-6 pt-6">
                                <h3 className="text-2xl font-bold text-[#00a896]">Universe Coworks Solutions:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Flexible hourly booking", "Same-day availability", "Mobile app booking",
                                        "Member-exclusive discounts", "No setup or hidden fees"
                                    ].map((sol, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CalendarCheck className="h-5 w-5 text-[#273a96]" />
                                            <span className="font-bold text-gray-700">{sol}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[#273a96]/5 p-6 rounded-2xl border border-[#273a96]/10 text-sm font-medium   text-[#1e2a78]">
                                    Booking Advantages: Immediate online reservation, instant confirmation emails, calendar integration, automated reminders, and flexible rescheduling policies make hourly meeting rooms ideal for dynamic business schedules.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Halls */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Conference Halls for Corporate Events in Trichy</h2>
                        <p className="text-lg text-gray-600 font-medium">Larger corporate gatherings require specialized conference infrastructure.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-8">
                                <h3 className="text-2xl font-bold border-b border-gray-100 pb-4">Capacity Ranges:</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="h-12 w-12 bg-blue-50 text-[#273a96] rounded-xl flex items-center justify-center shrink-0">30</div>
                                        <div>
                                            <h4 className="font-bold">Small Corporate Events (30–60 People)</h4>
                                            <p className="text-sm text-gray-500 mt-1">Team offsites, departmental meetings.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="h-12 w-12 bg-teal-50 text-[#00a896] rounded-xl flex items-center justify-center shrink-0">60</div>
                                        <div>
                                            <h4 className="font-bold">Mid-Size Functions (60–100 People)</h4>
                                            <p className="text-sm text-gray-500 mt-1">Product launches, training programs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">100</div>
                                        <div>
                                            <h4 className="font-bold">Large Conferences (100–200 People)</h4>
                                            <p className="text-sm text-gray-500 mt-1">Annual meetings, industry seminars.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#273a96] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
                            <h3 className="text-2xl font-bold mb-8">Event-Ready Features:</h3>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Professional stage setups", "AV technician support", "Breakout room availability",
                                    "Registration welcome areas", "Customizable seating", "Event coordination support"
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-3 text-sm">
                                        <div className="h-4 w-4 rounded-full border border-blue-400 mt-1 flex items-center justify-center font-black text-[8px] tracking-tighter shrink-0">+</div>
                                        <span className="font-medium text-blue-100">{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-sm   opacity-60">Universe Coworks partners with premium conference venues in Trichy, providing seamless booking coordination for larger capacities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotels Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Hotels in Trichy with Meeting and Event Facilities</h2>
                            <p className="text-xl text-gray-600 font-medium   leading-relaxed">Hotel-based facilities offer integrated advantages for traveling teams and multi-day workshops.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { name: "Femina Hotel", detail: "Business centers for 15–50 capacity, bundled accommodation." },
                                    { name: "Grand Gardenia", detail: "Conference halls with catering and guest room coordination." },
                                    { name: "Hotel Sangam", detail: "Corporate meeting packages combining F&B and lodging." },
                                    { name: "Airport Hotels", detail: "Quick-access meeting rooms for traveling executives." }
                                ].map((hotel, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="h-10 w-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#273a96] group-hover:text-white transition-colors">
                                            <Hotel className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#273a96] transition-colors">{hotel.name}</h4>
                                            <p className=" text-sm text-gray-500 mt-1 leading-relaxed">{hotel.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[25rem] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200" alt="Large conference hall with tiered seating and professional AV equipment, ideal for corporate events in Trichy." fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-blue-900 p-12 rounded-[2.5rem] text-white shadow-2xl hidden lg:block">
                                <p className="font-bold text-[#c4b5fd]   tracking-widest  text-sm mb-4">When to Choose Hotels:</p>
                                <ul className=" text-sm space-y-2 opacity-80">
                                    <li>• Hosting out-of-city clients</li>
                                    <li>• Multi-day training needing lodging</li>
                                    <li>• Extensive hospitality requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacity Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold font-headings mb-20 text-center">Curated Capacity-Based Selection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                t: "10–15 People (Boardrooms)",
                                use: "Executive meetings, client presentations, interviews.",
                                setup: "Rectangular table with executive chairs.",
                                loc: "Thillai Nagar and Cantonment",
                                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600"
                            },
                            {
                                t: "15–20 People (Workshop Rooms)",
                                use: "Team workshops, strategy sessions, focus groups.",
                                setup: "U-shape or hollow square arrangements.",
                                loc: "Srirangam Road Center",
                                img: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=600"
                            },
                            {
                                t: "20–30 People (Training Halls)",
                                use: "Corporate training, seminars, product demos.",
                                setup: "Classroom or theater style configurations.",
                                loc: "Junction Area Hub",
                                img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600"
                            }
                        ].map((tier, i) => (
                            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100">
                                <div className="relative h-48 w-full group-hover:scale-110 transition-transform duration-700">
                                    <Image src={tier.img} alt="Close-up of a modern presentation screen and speaker setup in a fully-equipped meeting room in Trichy." fill className="object-cover" />
                                </div>
                                <div className="p-10 space-y-6">
                                    <h3 className="font-bold text-xl text-gray-900 leading-tight">{tier.t}</h3>
                                    <div className="space-y-4 text-sm font-medium">
                                        <div className="flex gap-3 text-gray-500">
                                            <Star className="h-4 w-4 text-orange-400 shrink-0" />
                                            <span>Ideal for: {tier.use}</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500">
                                            <Clock className="h-4 w-4 text-blue-400 shrink-0" />
                                            <span>Configuration: {tier.setup}</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500">
                                            <MapPin className="h-4 w-4 text-[#00a896] shrink-0" />
                                            <span>Location: {tier.loc}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport Section */}
            <section className="py-24 bg-[#0a0f1a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight text-white">Meeting Rooms Near Tiruchirappalli Airport</h2>
                            <p className="text-xl text-blue-300 font-medium font- ">Convenience matters for traveling professionals managing tight schedules.</p>
                            <div className="space-y-4">
                                {[
                                    "Universe Coworks Airport Road Center (6 km)",
                                    "Skyway Executive Spaces (7 km)",
                                    "Hotel Kannappa Conference Rooms (5 km)",
                                    "Airport Gateway Business Hub (4 km)"
                                ].map((air, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 group hover:bg-[#00a896]/10 transition-colors">
                                        <div className="h-10 w-10 bg-[#00a896] rounded-full flex items-center justify-center shrink-0 group-hover:rotate-[360deg] transition-transform duration-700">
                                            <div className="text-[10px] font-black tracking-tighter">KM</div>
                                        </div>
                                        <span className="font-bold text-gray-200">{air}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl space-y-8">
                            <h3 className="text-2xl font-bold border-b border-white/10 pb-4 text-white">Traveler Benefits:</h3>
                            <div className="space-y-4">
                                {[
                                    "Minimal transit time between flights and meetings",
                                    "Easy accessibility for clients arriving from metro cities",
                                    "Quick turnaround for same-day business trips",
                                    "Proximity to hotels for overnight delegations"
                                ].map((ben, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                                        <span className="text-gray-300 font-medium">{ben}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Platforms */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold font-headings text-center mb-20   tracking-widest">Platforms to Book Meeting Spaces Online</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-xl space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-4 translate-x-4">
                                <Smartphone className="h-40 w-40" />
                            </div>
                            <h3 className="text-3xl font-black text-[#273a96]">Universe Coworks Platform:</h3>
                            <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                                <p>• Direct booking through website and mobile app</p>
                                <p>• Real-time availability and instant confirmation</p>
                                <p>• Transparent pricing with no hidden fees</p>
                                <p>• Integrated calendar sync and automated reminders</p>
                                <p>• 24/7 customer support and easy modification policies</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                <h4 className="text-xl font-bold mb-6 text-gray-900">Multi-Venue Platforms:</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { n: "myHQ", d: "Aggregated listings" },
                                        { n: "Qdesq", n2: "Advanced filters" },
                                        { n: "Gofloaters", n3: "Mobile-first" }
                                    ].map((plat, i) => (
                                        <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 text-center hover:bg-[#00a896] hover:text-white transition-all">
                                            <p className="font-black mb-1">{plat.n}</p>
                                            <p className="text-[10px]   opacity-60 tracking-widest">{plat.d || plat.n2 || plat.n3}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#00a896] p-10 rounded-[3rem] text-white">
                                <h4 className="font-bold text-xl mb-6">How to Use Platforms Effectively:</h4>
                                <div className="grid grid-cols-1 gap-3  text-sm font-bold leading-relaxed">
                                    <p>1. Filter by location, capacity, and date/time requirements</p>
                                    <p>2. Compare amenity inclusions and pricing structures</p>
                                    <p>3. Read verified customer reviews and ratings</p>
                                    <p>4. Check cancellation policies before confirming</p>
                                    <p>5. Book directly through platform for protection and support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-4 max-w-4xl mx-auto">
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

            {/* CTA Footer Section */}
            <section className="py-14 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] to-[#273a96] opacity-95"></div>
                        <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200" alt="CTA BG" fill className="object-cover opacity-10" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Book Your Professional Meeting Space Today
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Choosing the right meeting space in Trichy elevates your business presence, enhances productivity, and delivers memorable client experiences. Universe Coworks provides the perfect blend of professional infrastructure and strategic locations.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <button
                                    onClick={openPopup}
                                    className="px-12 py-5 bg-[#00a896] text-white rounded-full font-black text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group   tracking-widest text-sm"
                                >
                                    BROWSE AVAILABLE ROOMS <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-16 bg-gray-50 rounded-[4rem] border border-gray-100 flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
                        <div className="shrink-0">
                            <div className="h-20 w-20 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center">
                                <MessageSquare className="h-10 w-10 text-[#00a896]" />
                            </div>
                        </div>
                        <div className="space-y-4 flex-1">
                            <h4 className="text-2xl font-bold text-gray-900 leading-tight">Your ideal meeting room in Trichy is waiting.</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Visit our website, call our booking team, or download our mobile app to reserve your professional meeting space within minutes. Contact Universe Coworks today for site tours and exclusive benefits.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="tel:+918675556079" className="p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm font-bold text-gray-700">Call Team</a>
                            <Link href="/" className="p-4 bg-[#273a96] text-white rounded-2xl hover:bg-[#1e2a78] transition-colors shadow-sm font-bold">Visit Site</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
