import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Zap,
  Award,
  Briefcase,
  Star,
  Quote,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Redefining Where Innovation Happens | Universe Coworks About Page',
  description: 'Learn about Universe Coworks\' mission to build world-class infrastructure in Trichy, empowering startups and offshore enterprises with global-standard facilities.',
  alternates: {
    canonical: 'https://universecoworks.com/about',
  },
  openGraph: {
    url: 'https://universecoworks.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 600,
        alt: 'Universe Coworks About',
      },
    ],
  }
};

export default function AboutPage() {
  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-[#00a896] selection:text-white">
      {/* Hero Section - Refined & Professional */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1600&auto=format&fit=crop"
            alt="Universe Coworks Hub"
            fill
            className="object-cover opacity-30 "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-[#0a0f1a]/40 to-black  "></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 ">
          <div className="max-w-3xl space-y-6 md:pt-20">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-[#00a896] text-sm font-bold border border-white/10 uppercase tracking-widest animate-fade-in ">
              <span>Established 2023 • Global Standards Hub</span>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight font-headings tracking-tight animate-fade-in-up">
              Redefining Where <br />
              <span className="text-[#00a896]">Innovation</span> Happens.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-medium animate-fade-in-up delay-200">
              Building the world-class infrastructure required for India's next wave of global startups and offshore enterprises.
            </p>

            <div className="flex gap-4 pt-6 animate-fade-in-up delay-400">
              <Link href="/contact" className="px-8 py-4 bg-[#00a896] text-white rounded-xl font-bold text-sm transition-all hover:bg-[#00897b] shadow-xl flex items-center group">
                Join Our Ecosystem <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Clean split layout */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#00a896] font-black text-sm uppercase tracking-[0.3em]">Our Philosophy</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] font-headings leading-tight">Geography should not dictate potential.</h2>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-[#00a896] rounded-r-2xl">
                <p className="text-gray-600 font-medium   text-lg leading-relaxed">
                  "We recognized an untapped opportunity: Trichy, Tamil Nadu — a strategic growth hub offering world-class talent and economics."
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed font-medium text-lg">
                <p>
                  Universe Coworks was founded on a simple premise: innovation belongs to the ambitious, regardless of postcode. While metros suffer from over-saturation, we looked towards Trichy as the alternative.
                </p>
                <p className="text-[#0f172a] font-bold">
                  We are not a real estate company. We are ecosystem architects.
                </p>
                <p>
                  Our mission is to prove that innovation thrives when founders access the right environment—one that balances sustainability with standard-setting infrastructure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/19996231/pexels-photo-19996231.jpeg"
                  alt="Ecosystem Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#273a96] p-8 rounded-3xl text-white shadow-2xl max-w-xs animate-float">
                <Quote className="h-8 w-8 text-[#00a896] mb-4" />
                <p className="text-sm font-medium leading-relaxed">
                  Serving as the India headquarters for global companies from USA, UK, UAE, and Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Subtle Grid */}
      <section className="py-24 bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[#00a896] font-black text-sm uppercase tracking-[0.3em]">The Strategic Roadmap</span>
              <h2 className="text-3xl md:text-5xl text-white font-bold font-headings">Our Four Pillars</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed">
              Establishing the foundation for sustainable growth and regional excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Global Gateway", icon: Globe, desc: "Positioning Trichy as the credible alternative for offshore operations." },
              { title: "Founder Fuel", icon: Target, desc: "Eliminating capital barriers that force founders to sacrifice runway." },
              { title: "Talent Retention", icon: Users, desc: "Connecting local talent with global opportunities to reduce migration." },
              { title: "Support Loop", icon: TrendingUp, desc: "Building networks, mentorship, and legal frameworks for regional growth." }
            ].map((pillar, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-[#00a896]/20 rounded-xl flex items-center justify-center text-[#00a896] mb-8 group-hover:bg-[#00a896] group-hover:text-white transition-colors">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold  text-white mb-4 font-headings">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Hub - Modern Feature Split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/29267511/pexels-photo-29267511.jpeg"
                  alt="Industrial Hub"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-[#273a96] font-headings">40-60%</div>
                <p className="text-sm font-black text-[#00a896] uppercase tracking-widest">OpEx Advantage</p>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-[#273a96] font-black text-sm uppercase tracking-[0.3em]">Why Trichy?</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] font-headings leading-tight">Strategic Hub for <span className="text-[#00a896]">Global Visionaries</span></h2>
              </div>
              <p className="text-lg text-gray-500 font-medium">
                Trichy offers significantly lower overheads and elite academic talent without sacrificing world-class standards.
              </p>

              <div className="space-y-6">
                {[
                  { t: "International Connectivity", d: "Direct flight links to Singapore and the Middle East.", icon: Globe },
                  { t: "Elite Academic Core", d: "Home to NIT Trichy, IIM, and top engineering hubs.", icon: Award },
                  { t: "Superior Retention", d: "30-40% higher employee loyalty compared to Tier-1 metros.", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#00a896] group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-[#0f172a] mb-1">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Infrastructure - Dark Clean Grid */}
      <section className="py-24 bg-[#0a0f1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#00a896] font-black text-sm uppercase tracking-[0.3em]">Standard-Setting</span>
            <h2 className="text-3xl md:text-5xl text-white font-bold font-headings">Infrastructure Without Compromise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Establishing India entry points for companies requiring ISO-grade specifications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {[
              { t: "99.9% Uptime", icon: Zap, label: "Dedicated Fiber" },
              { t: "Biometric Ops", icon: ShieldCheck, label: "24/7 Monitoring" },
              { t: "ISO Grade", icon: Award, label: "Global Specs" },
              { t: "AV Suites", icon: Users, label: "Soundproof Space" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 bg-[#273a96]/50 rounded-2xl flex items-center justify-center text-[#00a896] mx-auto mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-headings">{stat.t}</h4>
                <p className="text-sm font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics Table - Simplified & Functional */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#273a96] font-black text-sm uppercase tracking-[0.3em]">Cost Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] font-headings">Economic Viability</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2.5rem] p-4 md:p-12 border border-gray-100 shadow-sm overflow-hidden text-center">
            <div className="mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2 lg:hidden">
              <ArrowRight className="h-3 w-3 animate-pulse" />
              Scroll horizontally to compare
              <ArrowRight className="h-3 w-3 animate-pulse" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="text-gray-400 font-black text-[10px] uppercase tracking-widest border-b border-gray-200">
                    <th className="pb-6 px-4">Location</th>
                    <th className="pb-6">Workspace Cost</th>
                    <th className="pb-6">Salary Range</th>
                    <th className="pb-6 text-right px-4">Total Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group">
                    <td className="py-8 px-4 font-bold text-gray-400">Bangalore (Tier-1)</td>
                    <td className="py-8 text-gray-500">₹12k - 18k</td>
                    <td className="py-8 text-gray-500">₹50k - 80k</td>
                    <td className="py-8 text-right px-4 font-black text-red-400">₹62k - 98k</td>
                  </tr>
                  <tr className="group bg-[#00a896]/5 rounded-xl">
                    <td className="py-8 px-4 font-black text-[#273a96]">Trichy (Universe Hub)</td>
                    <td className="py-8 font-black text-[#0f172a]">₹5k - 8k</td>
                    <td className="py-8 font-black text-[#0f172a]">₹30k - 50k</td>
                    <td className="py-8 text-right px-4 font-black text-[#00a896] text-xl">₹35k - 58k</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Talent & Support - Bento Style Clean */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0a0f1a] rounded-[2.5rem] p-12 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[#00a896] font-black text-sm uppercase tracking-[0.3em]">Elite Access</span>
                <h3 className="text-3xl font-bold font-headings  text-white leading-tight">Access to India's Premier Talent.</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Tap into graduates from NIT Trichy and IIM. Employees in Tier-2 cities demonstrate significantly higher loyalty due to family proximity and reduced living stress.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-[#00a896]">40%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Higher Retention</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-white">50K+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Annual Talent Pool</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm flex items-start gap-8">
                <div className="w-16 h-16 bg-[#273a96]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Briefcase className="h-8 w-8 text-[#273a96]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-headings">Legal & HR Support</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">End-to-end assistance with GST, trademarks, and hiring high-caliber local talent.</p>
                </div>
              </div>
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm flex items-start gap-8">
                <div className="w-16 h-16 bg-[#00a896]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp className="h-8 w-8 text-[#00a896]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-headings">Investor Connect</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Direct introductions to angel networks looking for emerging city traction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Refined */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "Moving our offshore team to Universe Coworks reduced operating costs by 50% while maintaining NIT-grade quality.",
                author: "SaaS Founder",
                desc: "USA Marketplace"
              },
              {
                quote: "Universe Coworks gave us the professional credibility needed to close enterprise deals with metro-standard infrastructure.",
                author: "B2B Tech Lead",
                desc: "Chennai HQ"
              }
            ].map((t, i) => (
              <div key={i} className="p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 relative">
                <Quote className="h-10 w-10 text-[#00a896] opacity-20 mb-6" />
                <p className="text-xl font-bold text-[#0f172a] font-headings   leading-relaxed mb-8">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  {/* <div className="w-12 h-12 bg-gray-200 rounded-full"></div> */}
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                    <p className="text-[#00a896] font-black text-[10px] uppercase tracking-widest">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action - Professional & Impactful */}
      <section className="py-24 px-4 bg-[#0a0f1a] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#00a896] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold font-headings tracking-tight">Build the Future from Trichy.</h2>
              <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Ready to establish your India operations or launch your next innovation? Let's design your growth trajectory together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link href="/contact" className="px-10 py-5 bg-[#0a0f1a] text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                  Book a Consultation
                </Link>
                <Link href="/contact" className="px-10 py-5 bg-white text-[#00a896] rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Request Pricing Hub
                </Link>
              </div>
              <div className="pt-16 grid grid-cols-2 md:grid-cols-2 gap-8 text-center border-t border-white/20">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-2">Inquiries</p>
                  <p className="text-sm font-bold">contact@universecoworks.com</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-2">Speak to Us</p>
                  <p className="text-sm font-bold">+91 9789913368</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
