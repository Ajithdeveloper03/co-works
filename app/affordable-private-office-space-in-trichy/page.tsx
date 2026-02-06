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
    Laptop,
    CheckCircle2,
    Printer,
    ChevronRight,
    Search,
    CheckSquare
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Affordable Private Office Space in Trichy for Professionals | Universe Coworks',
    description: 'Looking for private office space in Trichy? Explore flexible options that enhance productivity and comfort. Read our blog to learn more!',
    alternates: {
        canonical: 'https://universecoworks.com/affordable-private-office-space-in-trichy',
    },
    openGraph: {
        url: 'https://universecoworks.com/affordable-private-office-space-in-trichy',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Private Office Space in Trichy',
            },
        ],
    }
};

const faqs = [
    {
        q: "What are the best private office space options available for rent in Trichy?",
        a: "Premium options include Morais Global Hub and Morais International Biz Park (located near Trichy International Airport), which offer plug-and-play furnished offices with modern amenities Morais Tech HiveMoraiscity Blog. Trichy Coworks operates across 4 prime locations with over 85,000 sq. ft. of workspace, serving 450+ clients including startups, SMEs, and Fortune 500 companies Trichy Coworks."
    },
    {
        q: "How can I find fully furnished private office spaces in Trichy?",
        a: "Morais Global Hub provides fully furnished offices with ergonomic furniture, private cabins, meeting rooms, and a plug-and-play model requiring minimal setup time Moraiscity Blog. Trichy Coworks offers furnished office spaces with ergonomic furniture, high-speed internet, air-conditioning, power backup, and receptionist services Trichy Coworks."
    },
    {
        q: "What is the average rent for a private office space in Trichy?",
        a: "Rental prices vary by size and location:\n●	Small offices (500-750 sq.ft.): ₹8,800-₹20,000/month QuikrHomesReal Estate India\n●	Medium offices (1,000-1,200 sq.ft.): ₹35,000-₹90,000/month QuikrHomes\n●	Larger spaces (1,600-1,800 sq.ft.): ₹60,000-₹1,45,000/month Real Estate India \n●	Premium locations like Thillai Nagar: ₹1,00,000/month for 2,000 sq.ft. 99acres"
    },
    {
        q: "Which areas in Trichy are ideal for renting private office space?",
        a: "Popular commercial areas include Thillai Nagar, Trichy City, and Subramaniyapuram OLX. Other prime locations include KK Nagar, No 1 Tollgate, Tennur, Cantonment, and Somarasempettai Real Estate India. Areas near Trichy International Airport, particularly Morais City, offer strategic connectivity Moraiscity Blog."
    },
    {
        q: "Are there private office spaces in Trichy suitable for small businesses and startups?",
        a: "Yes! Trichy Coworks offers single seater workstations and small private offices ideal for freelancers, startups, and SMEs Trichy Coworks. Morais Global Hub provides flexible rental terms with no long lock-in periods, making it suitable for startups Moraiscity Blog. Affordable options help startups allocate more funds to product development rather than overheads Morais Tech Hive."
    },
    {
        q: "What amenities are typically included in private office spaces for rent in Trichy?",
        a: "Common amenities include high-speed internet, air-conditioning, power backup, cleaning and maintenance, receptionist services, facility manager support, parking, and CCTV surveillance Trichy Coworks. Premium spaces offer enterprise-grade amenities like secure WiFi, access cards, intercom facilities, and meeting rooms Moraiscity Blog."
    },
    {
        q: "How do private office spaces in Trichy compare with shared coworking spaces?",
        a: "Private offices offer greater privacy, branding opportunities, and operational control compared to coworking spaces Moraiscity Blog. However, coworking spaces foster collaborative ecosystems and offer 24/7 access with flexible terms Trichy Coworks. Private offices are better for teams needing dedicated space, while coworking suits individuals and small teams seeking flexibility."
    },
    {
        q: "Are short-term rental options available for private office spaces in Trichy?",
        a: "Workspace plans are highly flexible to meet both short-term and long-term needs, with some spaces available for daily rental Trichy Coworks. Morais Global Hub offers flexible rental terms without long lock-in periods Moraiscity Blog."
    },
    {
        q: "What is the process to lease a private office space in Trichy?",
        a: "The typical process involves:\n1.	Identifying your space requirements and budget\n2.	Visiting properties or contacting providers\n3.	Reviewing lease terms, including rent, deposit (typically 2-10 months), and lock-in periods (commonly 60 months for long-term leases) 99acres\n4.	Verifying legal documentation and property credentials\n5.	Signing the lease agreement"
    },
    {
        q: "Are there private office spaces in Trichy suitable for small businesses and startups?",
        a: "Yes! Trichy Coworks offers single seater workstations and small private offices ideal for freelancers, startups, and SMEs Trichy Coworks. Morais Global Hub provides flexible rental terms with no long lock-in periods, making it suitable for startups Moraiscity Blog. Affordable options help startups allocate more funds to product development rather than overheads Morais Tech Hive."
    },
];

export default function PrivateOfficePage() {
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
                                "name": "What's included in private office pricing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our all-inclusive pricing covers furnished and unfurnished private office options, high-speed internet, utilities, housekeeping, reception services, meeting room access, and pantry facilities. Pricing options range from ₹1,000 to ₹27 crores depending on office size, location, and customization requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer virtual office services in Teppakulam, Vayalur, and Trichy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide virtual office services across Teppakulam, Vayalur, and Trichy. These include a professional business address, mail handling, and call forwarding for businesses that require a local presence without maintaining a physical office space."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there a community aspect in private offices?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. While private offices offer complete privacy and seclusion, you remain part of the Universe Coworks community. Members benefit from networking events, knowledge-sharing sessions, and collaboration opportunities with other professionals and businesses."
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
                        "name": "Private office",
                        "item": "https://universecoworks.com/affordable-private-office-space-in-trichy"
                    }]
                })
            }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Modern glass-walled private office cabin with soundproof enclosure, showcasing a premium private office in Trichy."
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/80 to-[#0f172a]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#273a96]/20 border border-[#273a96]/30 text-[#60a5fa] text-sm font-bold uppercase tracking-wider mb-6">
                            Premium Corporate Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Best Private Office Space in <span className="text-blue-400">Trichy</span> for Professionals
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
                            Finding the right private office space with a smart layout in Puthur, Trichy can transform how your business operates. At Universe Coworks, we provide fully-equipped, professional private offices designed for businesses that value privacy, productivity, and flexibility.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="px-10 py-5 bg-[#273a96] text-white rounded-full font-bold text-lg hover:bg-[#1e2a78] transition-all shadow-xl hover:shadow-[#273a96]/40 hover:-translate-y-1">
                                Schedule a Tour Today
                            </Link>
                            <a href="tel:+918675556079" className="px-10 py-5 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-headings">Why Choose Private Office Space in Trichy?</h2>
                        <div className="h-1.5 w-24 bg-[#00a896] mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium  ">
                            Whether you're a startup scaling operations, an established company expanding to Trichy, or a remote team of remote workers needing a dedicated workspace, an office size in a private office offers the perfect solution. Unlike shared coworking spaces, private offices give you complete control over your environment while maintaining the flexibility and amenities of a modern workspace.
                        </p>
                    </div>
                </div>
            </section>

            {/* Affordability Section */}
            <section className="py-24 bg-blue-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#00a896]"></div>
                        <div className="max-w-5xl">
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What is the cost of living in Trichy, Tamil Nadu?</h3>
                            <div className="prose prose-lg text-gray-600 font-medium space-y-6 max-w-none">
                                <p>
                                    The cost of living in Trichy, Tamil Nadu, is relatively affordable compared to major cities. Monthly expenses for a single person typically range between ₹15,000 to ₹25,000, covering essentials like housing, food, and transportation. This affordability, especially in popular commercial locations in Trichy, makes Trichy an attractive option for professionals seeking private office space.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 pt-8">
                                    <div className="p-8 bg-blue-50 rounded-[2rem]">
                                        <h4 className="font-bold text-gray-900 mb-4  text-lg">What is the best rental area in Trichy?</h4>
                                        <p className="text-md">The best rental area for private office space in Trichy is the city center, known for its accessibility and vibrant business environment. Locations near major transport hubs not only enhance connectivity but also attract potential clients, making them ideal choices for professionals seeking dynamic workspaces.</p>
                                    </div>
                                    <div className="p-8 bg-[#00a896]/10 rounded-[2rem]">
                                        <h4 className="font-bold text-lg text-gray-900 mb-4 text-[#00a896]">Average Rent Facts</h4>
                                        <p className="text-md">The average rent for a private office space in Trichy varies based on size and amenities, but at Universe Coworks, prices typically start from around ₹8,000 to ₹15,000 per month for standard private offices. This makes it an affordable and flexible option for businesses of all sizes, including those similar to medical shops.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-headings leading-tight">Benefits of Private Offices at Universe Coworks</h2>
                            <p className="text-lg text-gray-500 font-medium leading-relaxed">Experience a workspace that balances individual focus with corporate status. Designed to meet every business stage.</p>
                            <div className="flex flex-col gap-4 pt-8">
                                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckSquare className="h-6 w-6 text-[#00a896]" />
                                    <span className="font-bold text-gray-700">GST Registration Ready</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckSquare className="h-6 w-6 text-[#00a896]" />
                                    <span className="font-bold text-gray-700">Company Identity Setup</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: Lock,
                                    title: "Complete Privacy & Security in Thillainagar",
                                    desc: "Your team works in a dedicated, lockable space with 24/7 secure access.",
                                    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
                                    alt: "Team meeting in a modern private cabin office space in Trichy, highlighting a professional and collaborative workspace."
                                },
                                {
                                    icon: Layout,
                                    title: "Fully Furnished & Ready to Use",
                                    desc: "Walk into a professionally designed office with ergonomic furniture, high-speed internet, and modern interiors.",
                                    img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=600",
                                    alt: "Comfortable and stylish private cabin interior at universecoworks, featuring high-speed internet and premium furniture."
                                },
                                {
                                    icon: Maximize2,
                                    title: "Scalable Solutions for Growing Teams",
                                    desc: "Whether you need space for 2 people or 20, our private offices grow with your business.",
                                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600",
                                    alt: "Private office cabin with a view, showcasing a modern and productive workspace in Trichy."
                                },
                                {
                                    icon: MapPin,
                                    title: "Professional Business Address",
                                    desc: "Establish credibility with a prestigious Trichy business address for your company registration, GST, and correspondence.",
                                    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
                                    alt: "Quiet and professional private cabin setup at universecoworks, ideal for focused work and important meetings."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-[#273a96] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                                        <Image src={item.img} alt={item.alt} fill className="object-cover" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00a896] transition-colors shadow-sm">
                                            <item.icon className="h-8 w-8 text-[#273a96] group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors leading-snug">{item.title}</h3>
                                        <p className="text-gray-500 group-hover:text-blue-100 font-medium leading-relaxed transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Choice Section */}
            <section className="py-24 bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headings text-white">What Makes Universe Coworks the Best Choice for Private Office Space in Trichy?</h2>
                        <p className="text-xl text-blue-300 font-medium">Combining location, amenities, and flexibility for your success.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-[#00a896]">
                                    <MapPin className="h-8 w-8" /> Premium Location & Accessibility
                                </h3>
                                <p className="text-gray-300 leading-relaxed font-medium text-lg">
                                    Located in Trichy's central business district, KK Nagar, Universe Coworks offers easy access from all parts of the city, including palakarai. With ample parking, proximity to transportation hubs, and nearby amenities including restaurants and banks, your team and clients can reach us effortlessly.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "High-Speed Internet (950 sqft area)",
                                    "Meeting & Conference Rooms",
                                    "Pantry & Refreshments",
                                    "Professional Reception Services",
                                    "24/7 Access",
                                    "Housekeeping & Maintenance",
                                    "Print & Scan Facilities",
                                    "Breakout Zones"
                                ].map((amenity, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                                        <span className="text-gray-200 font-medium">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[3rem] p-12 text-gray-900 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#273a96]/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                <Clock className="h-8 w-8 text-[#273a96]" /> Flexible Lease Terms
                            </h3>
                            <div className="space-y-6 text-gray-600 font-medium text-lg">
                                <p>Traditional office leases lock you into long-term commitments with rigid terms, including duration. At Universe Coworks, we offer flexible monthly, quarterly, and annual plans that adapt to your business needs.</p>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                                    <Search className="h-6 w-6 text-[#273a96] shrink-0 mt-1" />
                                    <p className="text-sm font-medium">Before securing a lease, it is advisable to check the landlord credentials to ensure a trustworthy agreement. Scale up during growth phases or downsize without penalties—business agility without the burden.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits List Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-20 font-headings">Who Benefits from Private Office Space?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Startups & Small Business Shops", desc: "Establish a professional presence without massive capital investment. Focus your resources on growth while we handle the infrastructure." },
                            { title: "Remote & Hybrid Teams", desc: "Give your distributed team a central hub for collaboration, team building, and client meetings when working from home isn't enough." },
                            { title: "Established Companies", desc: "Launch a satellite office in Trichy without the complexities of setting up a traditional branch. Test new markets with minimal risk." },
                            { title: "Professional Services", desc: "Lawyers, accountants, consultants, and creative agencies need private spaces for confidential client work and focused service delivery." },
                            { title: "Tech & IT Companies", desc: "Secure environments for software development, data handling, and technical operations with reliable infrastructure." }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-[#273a96]">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Difference Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl skew-y-3">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                    alt="Universe Coworks Experience"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -top-10 -left-10 bg-[#00a896] p-12 rounded-[2.5rem] text-white shadow-2xl hidden lg:block -skew-y-3">
                                <div className="text-3xl font-bold">Years of</div>
                                <div className="text-5xl font-black">Experience</div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold font-headings leading-tight">Experience the Universe Coworks Difference</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                At Universe Coworks, we understand that your workspace directly impacts your productivity, team morale, and business success. That's why we've created private office solutions that combine the professionalism of traditional offices with the flexibility and collaborative environment of coworking spaces.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                Our team brings years of experience in workspace management, having helped dozens of businesses establish and grow their presence in Trichy. We've designed every aspect of our private offices, complete with security personnel, based on real feedback from professionals like you—people who need spaces that work as hard as they do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-blue-900 text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Transparent Pricing, No Hidden Costs</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <p className="text-xl md:text-2xl text-blue-200 font-medium leading-relaxed">
                            When you partner with Universe Coworks for your private office space with a carpet area in Trichy, you get all-inclusive pricing. Your monthly fee covers rent, utilities, internet, maintenance, amenities, and services. No surprise bills, no hidden charges—just straightforward pricing that helps you budget accurately.
                        </p>
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                            <h3 className="text-4xl font-black mb-4 text-[#00a896]">Starting from ₹8,000</h3>
                            <p className="text-blue-100 font-medium uppercase tracking-[0.2em]">All-Inclusive Private Office Suites</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 font-headings">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-[#273a96] mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border-none rounded-2xl px-8 shadow-sm overflow-hidden">
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

            {/* CTA Footer */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-12 md:p-32 bg-[#273a96] rounded-[4rem] overflow-hidden shadow-3xl text-center">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Ready to Elevate Your Workspace?
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
                                Stop compromising on workspace quality. Whether you need flexible seating options like a private office for 2 or 20, Universe Coworks has the perfect solution for your business in Trichy.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <Link href="/contact" className="px-12 py-5 bg-[#00a896] text-white rounded-full font-bold text-xl hover:bg-[#00897b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group">
                                    Schedule a Tour <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a href="tel:+918675556079" className="px-12 py-5 bg-white text-[#273a96] rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center">
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
