import { Metadata } from 'next';
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
    GraduationCap,
    CalendarDays,
    Utensils,
    Laptop,
    Zap,
    Smartphone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Affordable Training Room in Trichy: Reserve Today | Universe Coworks',
    description: 'Looking for the perfect training room in Trichy? Discover top venues equipped for your needs. Check out our blog for the best options available!',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-training-room-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-training-room-in-trichy',
    }
};

const faqs = [
    {
        q: "What distinguishes a training room from a standard meeting room?",
        a: "Training rooms are purpose-designed for educational delivery with classroom or theater seating (not boardroom style), enhanced audio-visual systems for multimedia instruction, superior acoustics preventing echo and external noise, flexible furniture supporting group activities, extended comfort features for multi-hour sessions, larger capacities, and more writing surfaces. Training rooms prioritize learning effectiveness while meeting rooms focus on discussion and collaboration."
    },
    {
        q: "How early should I book a training room in Trichy?",
        a: "For standard corporate training (20–40 participants, 1–2 days), reserve 2–3 weeks in advance. Large-capacity facilities (50+ people) or training during peak months (January–March, September–November) require 3–5 weeks notice. Multi-day certification programs, especially those requiring consecutive dates, should be booked 6–8 weeks ahead to ensure availability and proper preparation time."
    },
    {
        q: "Can training room seating be customized for different training styles?",
        a: "Absolutely. Professional training venues offer multiple configurations: classroom style (individual desks facing front) for lecture-based learning, U-shape arrangement (horseshoe seating) for facilitated discussions, cluster or pod setup (groups of 4–6) for collaborative exercises, theater style (rows without desks) for presentation-heavy sessions, and boardroom configuration (rectangular table) for small leadership development, making them perfect for professional gatherings. Specify your preferred layout during booking."
    },
    {
        q: "What technology comes standard in Trichy training rooms?",
        a: "Typical technology includes high-speed Wi-Fi (100+ Mbps), HD projectors or 65\"+ LED displays, wireless presentation systems (Miracast, AirPlay, Chromecast), audio systems with wireless microphones, multiple whiteboards or flip charts, power outlets at participant stations, HDMI and USB-C connectivity, and video conferencing infrastructure. Premium facilities may offer interactive touchscreens, recording systems, dual displays, and backup equipment. Always verify specific technology during booking."
    },
    {
        q: "Are training rooms suitable for certification exams and assessments?",
        a: "Yes, many training facilities accommodate certification testing and formal assessments. Features supporting examination delivery include individual desk spacing meeting testing standards (preventing collaboration), stable internet for online assessments, quiet environments minimizing disturbances, clear supervision sightlines for proctoring, secure access control, adequate lighting, and distraction-free atmospheres. Inform venues of certification requirements to ensure compliance with examining body standards."
    },
    {
        q: "Do venues provide catering for full-day training sessions?",
        a: "Most professional training rooms offer catering coordination through in-house services or vetted catering partners. Standard options include coffee/tea service, mid-morning and afternoon snacks, buffet or plated lunches, refreshments throughout the day, and special dietary accommodations (vegetarian, vegan, gluten-free). Arrange catering during booking, specifying meal timing, dietary restrictions, and participant count. Some venues permit external caterers with advance approval and coordination fees."
    },
    {
        q: "Can I conduct hybrid training with remote and in-person participants?",
        a: "Modern training rooms increasingly support hybrid delivery with professional video conferencing systems, multiple cameras capturing trainer and screen content, quality microphones ensuring remote audio clarity, high-bandwidth internet (150+ Mbps), confidence monitors showing remote participants, and technical support for platform setup (Zoom, Teams, Webex). Book hybrid-ready rooms explicitly and conduct technology tests 1–2 days before your session to troubleshoot any connectivity issues."
    },
    {
        q: "Which Trichy locations offer the best training room accessibility?",
        a: "Thillai Nagar provides optimal central accessibility with strong transport connections and nearby accommodations. Junction area serves participants arriving by train from other Tamil Nadu cities. Cantonment offers quieter environments for intensive, distraction-sensitive training. Airport Road suits regional programs with participants flying into Trichy. Choose locations based on participant origin points—central areas work best for local corporate training; airport-proximate venues suit multi-city programs."
    },
    {
        q: "Are there training facilities near Tiruchirappalli Airport for traveling participants?",
        a: "Yes, several training venues operate within 6–10 kilometers of Tiruchirappalli International Airport along Airport Road corridor. These facilities serve organizations conducting vendor training, client education, or programs involving participants from Bangalore, Chennai, Mumbai, or international locations. Airport-area venues understand travel constraints and offer flexible scheduling for early morning or late afternoon sessions accommodating flight times."
    },
    {
        q: "What should trainers bring on training day?",
        a: "Bring presentation materials (loaded on laptop with backup USB drive), printed or digital handouts, trainer guides and facilitator notes, participant rosters for attendance, any specialized training aids or props, and backup digital content. Venues provide standard equipment (projector, microphone, whiteboards, markers), but confirm availability of specialty items (flip chart paper, extension cords, laser pointers, timers) beforehand. Arriving 45–60 minutes early allows technology testing and room arrangement verification."
    }
];

export default function TrainingRoomPage() {
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
                                "name": "What distinguishes a training room from a standard meeting room?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Training rooms are designed specifically for learning with classroom or theater-style seating, enhanced audio-visual systems, better acoustics, flexible furniture for activities, extended comfort for long sessions, larger capacities, and more writing surfaces. They focus on effective instruction, while meeting rooms are optimized for discussions and collaboration."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How early should I book a training room in Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For standard corporate training with 20–40 participants, book 2–3 weeks in advance. Large-capacity rooms (50+ people) or peak months like January–March and September–November require 3–5 weeks. Multi-day certification programs should be booked 6–8 weeks ahead."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can training room seating be customized for different training styles?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Training rooms support classroom style, U-shape, cluster or pod seating, theater style, and boardroom layouts. You can choose the configuration based on your training format and specify your preference during booking."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What technology comes standard in Trichy training rooms?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Standard technology includes high-speed Wi-Fi (100+ Mbps), HD projectors or large LED displays, wireless presentation systems, audio systems with microphones, whiteboards or flip charts, power outlets, HDMI and USB-C connectivity, and video conferencing facilities. Premium venues may also provide interactive touchscreens, recording systems, and backup equipment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are training rooms suitable for certification exams and assessments?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Many training rooms support certification exams with features like individual desk spacing, stable internet, quiet environments, clear supervision sightlines, secure access control, proper lighting, and compliance with testing standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do venues provide catering for full-day training sessions?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most venues offer catering coordination with options such as coffee and tea service, snacks, buffet or plated lunches, and special dietary accommodations. Catering requirements should be finalized during booking."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I conduct hybrid training with remote and in-person participants?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Many modern training rooms support hybrid sessions with professional video conferencing systems, multiple cameras, high-quality microphones, high-bandwidth internet, confidence monitors, and technical support. A test run 1–2 days before the session is recommended."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which Trichy locations offer the best training room accessibility?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Thillai Nagar offers central accessibility, Junction is ideal for participants arriving by train, Cantonment provides quieter environments, and Airport Road is suitable for regional or multi-city programs. Location choice should depend on participant travel patterns."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there training facilities near Tiruchirappalli Airport for traveling participants?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Several training venues are located within 6–10 km of Tiruchirappalli International Airport along Airport Road. These are convenient for participants traveling from other cities or countries and offer flexible scheduling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What should trainers bring on training day?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Trainers should bring presentation materials on a laptop with backup USB, printed or digital handouts, participant rosters, trainer guides, specialized training aids, and backup content. Arriving 45–60 minutes early is recommended for setup and technology testing."
                                }
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0f1a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop"
                        alt="Spacious training room in Trichy with modern seating and presentation equipment, ideal for workshops and corporate training."
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a896]/10 border border-[#00a896]/20 text-[#00a896] text-sm font-bold uppercase tracking-wider mb-6">
                            Empower Your Team
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Reserve Your Ideal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Training Room</span> in Trichy Today!
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12 font-medium">
                            Discovering the perfect training room in Trichy is essential for organizations committed to developing talent, enhancing skills, and driving business growth through effective learning programs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-10 py-5 bg-[#00a896] text-white rounded-full font-bold text-lg hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1">
                                Book Training Space
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-headings leading-tight">State-of-the-Art Training Facilities</h2>
                            <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
                                <p>Whether you're a corporate HR professional, independent trainer, or educational institution, Tiruchirappalli offers state-of-the-art training facilities equipped with modern technology, comfortable seating, and professional environments that maximize participant engagement and knowledge retention.</p>
                                <p>This comprehensive guide helps you navigate Trichy's premium training room options, understand facility features, and book the ideal space for your next workshop, certification program, or team development session.</p>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex items-center justify-between gap-8 group hover:bg-[#273a96] hover:text-white transition-all duration-500">
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Hourly Rates Starting From</p>
                                    <p className="text-4xl font-black">₹800 - ₹2,500</p>
                                </div>
                                <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <Presentation className="h-8 w-8" />
                                </div>
                            </div>
                            <p className=" text-sm text-gray-400  ">Daily rates may be available for longer events or workshops, with discounts offered for recurring bookings and larger groups.</p>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/159806/meeting-modern-room-conference-159806.jpeg"
                                    alt="Professionals engaged in a training session in a modern training room in Trichy, showcasing a collaborative and productive environment."
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-[#00a896] p-10 rounded-[3rem] text-white shadow-2xl hidden md:block">
                                <p className="font-black text-5xl">100%</p>
                                <p className="text-sm font-bold uppercase tracking-widest mt-1 opacity-80">Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Professional Room */}
            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl mt-12">
                                    <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600" alt="Fully-equipped training room interior at universecoworks, featuring high-speed internet and premium furniture." fill className="object-cover" />
                                </div>
                                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl">
                                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" alt="Engagement" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="mt-8 p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex items-center gap-6">
                                <div className="h-16 w-16 bg-blue-50 text-[#273a96] rounded-2xl flex items-center justify-center">
                                    <GraduationCap className="h-8 w-8" />
                                </div>
                                <p className="font-bold text-gray-700 leading-tight"> investasi in proper training environments enhances knowledge transfer.</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="text-4xl font-bold font-headings leading-tight">Why Your Organization Needs a Professional Training Room in Trichy</h2>
                            <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                                <p>The quality of your training environment directly impacts learning outcomes. A dedicated training room in Trichy, which includes a conference hall, provides purpose-built infrastructure that traditional office spaces cannot match.</p>
                                <p>Specialized acoustics for clear instruction, ergonomic seating for extended sessions, advanced presentation technology, flexible layouts supporting diverse training methodologies, and professional atmospheres that signal organizational commitment to employee development.</p>
                                <div className="bg-white border-l-4 border-[#00a896] p-8 rounded-r-2xl shadow-sm text-sm">
                                    <p className="font-bold text-gray-900 mb-2">Recommended Venues:</p>
                                    <p className="text-gray-500 font-medium">Hotel Breeze Residency, Sangam Hotel, and Trichy Business Center offer modern amenities and flexible packages.</p>
                                </div>
                                <p>Renting a training room in Trichy typically ranges from ₹1,000 to ₹4,000 per hour. Daily rates often fall between ₹7,000 and ₹15,000.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacity Options */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Comprehensive Training Room Capacity Options</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-24">
                        {/* Option 1 */}
                        <div className="flex flex-col lg:flex-row gap-16 items-center group">
                            <div className="lg:w-1/2 relative">
                                <div className="relative h-[22rem] lg:h-[450px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                    <Image src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200" alt="Small Training Room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <p className="text-5xl font-black">10–20</p>
                                        <p className="font-bold uppercase tracking-widest opacity-80">Participants</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h3 className="text-3xl font-bold font-headings text-[#273a96]">Intimate Training Spaces</h3>
                                <p className="text-lg text-gray-600 font-medium">Perfect for specialized skill development, technical certifications, and intensive workshops requiring close trainer-participant interaction.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Classroom-Style Seating", "High-Definition Displays", "Quality Audio Systems",
                                        "Multiple whiteboards", "Individual Power Access", "Central Climate Control"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-gray-50 p-4 rounded-xl">
                                            <CheckSquare className="h-5 w-5 text-[#00a896]" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Option 2 */}
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center group">
                            <div className="lg:w-1/2 relative">
                                <div className="relative h-[22rem] lg:h-[450px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                    <Image src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200" alt="Mid Sized Training Hall" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <p className="text-5xl font-black">20–40</p>
                                        <p className="font-bold uppercase tracking-widest opacity-80">Participants</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h3 className="text-3xl font-bold font-headings text-[#00a896]">Mid-Sized Training Halls</h3>
                                <p className="text-lg text-gray-600 font-medium">Ideal for department-wide programs, compliance training, and professional development workshops.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Flexible Furniture Layouts", "Dual Projection Systems", "Wireless Microphones",
                                        "Breakout Space Options", "Hybrid Training Ready", "Refreshment Areas"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-gray-50 p-4 rounded-xl">
                                            <CheckSquare className="h-5 w-5 text-[#273a96]" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Option 3 */}
                        <div className="flex flex-col lg:flex-row gap-16 items-center group">
                            <div className="lg:w-1/2 relative">
                                <div className="relative h-[22rem] lg:h-[450px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                    <Image src="https://images.unsplash.com/photo-1505373777841-8d25f7d46678?q=80&w=1200" alt="Large Training Facility" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <p className="text-5xl font-black">40–100</p>
                                        <p className="font-bold uppercase tracking-widest opacity-80">Participants</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h3 className="text-3xl font-bold font-headings text-gray-900">Large Training Facilities</h3>
                                <p className="text-lg text-gray-600 font-medium">Designed for company-wide initiatives, industry seminars, and multi-day certification programs.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Auditorium-Style Seating", "Professional AV Systems", "Elevated Stage Platforms",
                                        "Session Recording Systems", "Registration Entry Area", "Catering Serving Areas"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-gray-50 p-4 rounded-xl">
                                            <CheckSquare className="h-5 w-5 text-gray-900" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Essential Tech section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-6 font-headings text-white">Essential Technology and Learning Support</h2>
                        <p className="text-xl text-blue-200 font-medium  ">Every professional training room includes mission-critical learning technologies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Wifi, t: "Fiber-optic Wi-Fi", d: "150–200 Mbps supporting simultaneous device connections." },
                            { icon: Monitor, t: "Interactive Displays", d: "Interactive whiteboards and digital annotation tools." },
                            { icon: Laptop, t: "Connectivity", d: "HDMI, USB-C, and premium wireless casting options." },
                            { icon: Zap, t: "Power Backup", d: "Reliable systems ensuring zero session disruptions." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all text-center">
                                <div className="h-16 w-16 bg-[#00a896] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00a896]/20">
                                    <item.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl text-white font-bold mb-4">{item.t}</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Locations */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Strategic Training Room Locations Across Trichy</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Thillai Nagar",
                                tagline: "Central Business Hub",
                                desc: "The premier choice due to unmatched accessibility. Near restaurants, cafes, and hotels for out-of-city participants.",
                                img: "https://imagecdn.99acres.com/media1/33902/17/678057609M-1766183798664.webp"
                            },
                            {
                                title: "Junction Area",
                                tagline: "Connectivity Hub",
                                desc: "Serves geographically dispersed teams. Conveninent access for participants arriving via train from Chennai and Madurai.",
                                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tiruchirapalli_junction.JPG/760px-Mapcarta.jpg"
                            },
                            {
                                title: "Cantonment",
                                tagline: "Quiet Environment",
                                desc: "Residential area offering distraction-free training. spacious parking without commercial district congestion.",
                                img: "https://360hoardings.com/images_backup/TMK-08.jpg"
                            },
                            {
                                title: "Srirangam Corridor",
                                tagline: "Emerging Zone",
                                desc: "Balancing accessibility with modern infrastructure. Affordable venue options for budget-conscious organizations.",
                                img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Aerial_view_of_Sri_Rangam_temple_near_Tiruchirapalli_1.jpg"
                            },
                            {
                                title: "Airport Road",
                                tagline: "Regional Hub",
                                desc: "For inter-city or international programs. 6–10 km from the international airport. Suitable for tight schedules.",
                                img: "https://english.cdn.zeenews.com/sites/default/files/2022/05/02/1038135-trichy.jpg?im=Resize=(1200,900)"
                            }
                        ].map((loc, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-[3rem] shadow-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[450px]">
                                <Image src={loc.img} alt={loc.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#273a96] via-[#273a96]/40 to-transparent"></div>
                                <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2 block">{loc.tagline}</span>
                                    <h4 className="text-3xl font-bold mb-4 text-white font-headings">{loc.title}</h4>
                                    <p className="text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-20">{loc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online Booking Process */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-20 font-headings text-center">Streamlined Online Booking Process</h2>

                    <div className="relative">
                        {/* Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#00a896]/10 -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                { step: "01", t: "Define", d: "Confirm headcount and essential tech needs." },
                                { step: "02", t: "Search", d: "Filter results by location and capacity." },
                                { step: "03", t: "Verify", d: "Check real-time calendars for availability." },
                                { step: "04", t: "Complete", d: "Fill form with arrangement preferences." },
                                { step: "05", t: "Confirm", d: "Obtain confirmation and schedule visit." },
                                { step: "06", t: "Execution", d: "Test all equipment 45m before session." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center flex flex-col items-center">
                                    <span className=" text-sm font-black text-[#00a896] mb-4 group-hover:scale-110 transition-transform">{item.step}</span>
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.t}</h4>
                                    <p className="text-[14px] text-gray-500 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-14 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>

                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-5">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 border-none rounded-2xl px-10 shadow-sm overflow-hidden">
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

            {/* Final CTA */}
            <section className="py-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] to-[#273a96] opacity-90"></div>
                        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" alt="CTA BG" fill className="object-cover opacity-10" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Reserve Your Professional Training Room in Trichy Today
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Transform your corporate learning initiatives with purpose-built training environments designed to maximize engagement, retention, and skill development.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <Link href="/contact" className="px-12 py-5 bg-[#00a896] text-white rounded-full font-bold text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group uppercase tracking-widest text-sm">
                                    BOOK YOUR SPACE NOW <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
