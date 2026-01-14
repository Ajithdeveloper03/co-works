'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Rocket,
  Building2,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Briefcase,
  Layout,
  Server,
  Settings,
  FileCheck,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<'startup' | 'custom'>('startup');

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#273a96] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            alt="Workspace Solutions"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#273a96]/50 to-[#1e2a78]/55"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-8 font-headings leading-tight">
            Workspace Solutions Designed for <br className="hidden md:block" />
            <span className="text-[#00a896]  px-4 py-1 rounded-lg inline-block mt-2">Your Business Stage and Ambitions</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Whether you're a solo founder validating your first idea or an enterprise establishing Trichy operations,
            Universe Coworks delivers workspace infrastructure that adapts to your unique requirements—without the complexity, commitment, or cost of traditional offices.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20 shadow-2xl">
            <button
              onClick={() => setActiveTab('startup')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold transition-all duration-300 ${activeTab === 'startup'
                ? 'bg-[#00a896] text-white shadow-lg transform scale-105'
                : 'text-blue-200 hover:text-white hover:bg-white/5'
                }`}
            >
              <Rocket className="h-5 w-5" />
              <span>Startup Solutions</span>
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold transition-all duration-300 ${activeTab === 'custom'
                ? 'bg-[#00a896] text-white shadow-lg transform scale-105'
                : 'text-blue-200 hover:text-white hover:bg-white/5'
                }`}
            >
              <Building2 className="h-5 w-5" />
              <span>Custom Solutions</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content Switching Section */}
      <section className="py-20 relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 min-h-[800px]">

          {/* ==================== STARTUP SOLUTIONS TAB ==================== */}
          <div className={`transition-opacity duration-500 ease-in-out ${activeTab === 'startup' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>

            {/* Startup Visual Header */}
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Startup Ecosystem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="inline-block bg-[#00a896] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Startup Solutions</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headings max-w-4xl">
                  End-to-End Support for Building and <br /> Scaling Your Startup from Trichy
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-16">
              {/* Intro Text */}
              <div className="mb-16 border-l-4 border-[#00a896] pl-8">
                <h3 className="text-2xl font-bold text-[#273a96] mb-4">Build, Launch, and Scale Confidently</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                  Early-stage founders face overwhelming complexity—product development, customer acquisition, team building, fundraising—while managing limited resources. Universe Coworks provides complete startup ecosystem support designed to remove friction between your vision and execution.
                </p>
              </div>

              {/* Startup Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: Zap,
                    title: "Flexible Workspace Infrastructure",
                    desc: "Start small and scale seamlessly. Hot desks for solo founders, dedicated desks for traction, private cabins for teams. Move in same day with zero setup."
                  },
                  {
                    icon: Shield,
                    title: "Business Setup & Compliance",
                    desc: "Navigate legal requirements with support. Connect with trusted CAs for registration, GST compliance, Startup India recognition, and professional mail handling."
                  },
                  {
                    icon: Users,
                    title: "Mentorship & Strategic Support",
                    desc: "Access experienced entrepreneurs through monthly sessions and office hours. Get strategic introductions to investors and partners to accelerate growth."
                  },
                  {
                    icon: Rocket,
                    title: "Funding & Growth Acceleration",
                    desc: "Pitch sessions with angels and VCs interested in TN startups. Expert feedback on decks, demo days, and corporate network leverage for pilots."
                  },
                  {
                    icon: Briefcase,
                    title: "Talent & Hiring Assistance",
                    desc: "Hire from NIT, BITS, and local colleges. Post to our talent board, access alumni networks, and use interview spaces. Resume screening included."
                  },
                  {
                    icon: Globe,
                    title: "Vibrant Community & Networking",
                    desc: "Join 500+ founders and innovators. Monthly startup mixers, workshops, and organic collaborations that turn conversations into partnerships."
                  }
                ].map((item, i) => (
                  <div key={i} className="group bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="bg-white group-hover:bg-[#273a96] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-[#273a96] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#273a96] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why Startups Choose Us Box */}
              <div className="bg-[#273a96] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 opacity-100">
                  <Rocket className="w-64 h-64 -mr-16 -mt-16" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <CheckCircle className="h-8 w-8 text-[#00a896] mr-3" />
                    Why Startups Choose Us
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <p className="font-medium text-lg mb-2 text-[#00a896]">Value</p>
                      <p className="text-blue-100">Operate at 40-60% lower cost than metros while accessing the same quality infrastructure.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <p className="font-medium text-lg mb-2 text-[#00a896]">Scalability</p>
                      <p className="text-blue-100">Grow from 1 to 50 people without relocation hassles.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <p className="font-medium text-lg mb-2 text-[#00a896]">Access</p>
                      <p className="text-blue-100">Connect instantly to mentors, investors, and ecosystem partners.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ==================== CUSTOM SOLUTIONS TAB ==================== */}
          <div className={`transition-opacity duration-500 ease-in-out ${activeTab === 'custom' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>

            {/* Enterprise Visual Header */}
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Enterprise Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="inline-block bg-[#273a96] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Enterprise Solutions</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headings max-w-4xl">
                  Tailor-Made Office Solutions for Enterprises <br /> and Fast-Growing Companies
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-16">

              {/* Intro Text */}
              <div className="mb-16 border-l-4 border-[#273a96] pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Brand, Your Space, Your Way</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                  Established businesses, offshore teams, and scaling companies need workspace reflecting their brand identity while accommodating specific operational requirements. Universe Coworks delivers fully customized office environments operational within weeks, not months.
                </p>
              </div>

              {/* Enterprise Features List */}
              <div className="space-y-12">
                {[
                  {
                    icon: Layout,
                    title: "Tailored Design & Branding",
                    content: "Custom floor plans designed around your team structure. Your logo, colors, and brand identity integrated. Flexible layouts with open zones, private cabins, and premium furniture options."
                  },
                  {
                    icon: Server,
                    title: "Enterprise-Grade Infrastructure",
                    content: "Dedicated internet lines with SLA commitments. Private networks, enterprise security protocols, CCTV access, and server rooms for on-premise infrastructure."
                  },
                  {
                    icon: Settings,
                    title: "Operational Customization",
                    content: "Dedicated reception staff, reserved conference facilities, custom pantry configurations, and complete branded signage from building entrance to workstations."
                  },
                  {
                    icon: FileCheck,
                    title: "Compliance & Corporate Standards",
                    content: "Professional business address, formal lease documentation, audit-ready infrastructure, and compliance with IT Act and industry-specific regulations."
                  },
                  {
                    icon: CreditCard,
                    title: "Flexible Commercial Terms",
                    content: "Medium to long-term agreements, transparent all-inclusive pricing, scalability clauses, and corporate billing aligned with your finance operations."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 md:items-start group">
                    <div className="shrink-0 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#273a96]">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00a896] transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="my-16 border-gray-100" />

              {/* Summary Boxes */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900 text-white rounded-3xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-[#00a896]">Ideal For</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start"><ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5" /> Offshore development centers</li>
                    <li className="flex items-start"><ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5" /> Regional headquarters</li>
                    <li className="flex items-start"><ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5" /> Enterprise project teams</li>
                    <li className="flex items-start"><ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5" /> Funded startups (15-50+ employees)</li>
                  </ul>
                </div>
                <div className="bg-[#00a896]/10 border border-[#00a896]/20 rounded-3xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-[#00a896]">Rapid Deployment</h4>
                  <p className="text-gray-700 mb-6">Most custom spaces operational within <span className="font-bold">4-6 weeks</span> from approval, with dedicated account management and ongoing support.</p>
                  <div className="flex items-center space-x-2 text-sm font-bold text-[#00a896]">
                    <CheckCircle className="h-5 w-5" />
                    <span>Audit-Ready Infrastructure</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer Call to Action (Contextual) */}
      <section className="bg-white py-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-8 font-headings">
            Your Next Workspace Awaits in Trichy
          </h2>

          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-inner">
            {activeTab === 'startup' ? (
              <div className="space-y-6">
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">Ready to accelerate your startup content? Join the community that's building the future of Trichy.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="w-full md:w-auto px-8 py-4 bg-[#273a96] text-white rounded-full font-bold hover:bg-[#1e2a78] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Book Free Tour
                  </Link>
                  <Link href="/pricing" className="w-full md:w-auto px-8 py-4 bg-white text-[#273a96] border border-[#273a96] rounded-full font-bold hover:bg-gray-50 transition-all">
                    View Plans
                  </Link>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  Or speak with an advisor: <a href="tel:+919876543210" className="text-[#00a896] font-bold hover:underline">+91 97866 55005</a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">Get a workspace that works as hard as your team. Let's design your custom office today.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="w-full md:w-auto px-8 py-4 bg-[#00a896] text-white rounded-full font-bold hover:bg-[#00897b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Request Quote
                  </Link>
                  <Link href="/contact" className="w-full md:w-auto px-8 py-4 bg-white text-[#00a896] border border-[#00a896] rounded-full font-bold hover:bg-gray-50 transition-all">
                    Schedule Consultation
                  </Link>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  Enterprise Support: <a href="mailto:solutions@universecoworks.com" className="text-[#273a96] font-bold hover:underline">solutions@universecoworks.com</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
