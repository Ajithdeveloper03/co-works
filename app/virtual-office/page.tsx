'use client';

import Image from 'next/image';
import {
  MapPin,
  Mail,
  Briefcase,
  FileText,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Globe,
  Phone,
  Calendar,
  Building2,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function VirtualOfficePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            alt="Trichy Business District"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/50 via-[#0f172a]/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl animate-fade-in-up md:pt-6">
            <div className="inline-block px-4 py-2 bg-[#00a896]/20 border border-[#00a896] text-[#00a896] rounded-full font-bold text-sm mb-6 font-headings tracking-wider uppercase">
              Virtual Office Solutions
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight font-headings">
              Establish Your Professional <br />
              Business Presence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#273a96]">Trichy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-10 font-light">
              Build credibility, meet compliance requirements, and maintain a strategic Trichy presence without the office overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#plans" className="px-8 py-4 bg-[#00a896] text-white rounded-full font-bold hover:bg-[#00897b] transition-all shadow-lg hover:shadow-[#00a896]/50 text-center">
                View Plans
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all text-center">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Service 1: Business Address */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00a896] to-[#273a96] rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                  alt="Premium Business Address"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="bg-white/90 backdrop-blur text-[#0f172a] px-6 py-3 rounded-xl font-bold flex items-center shadow-lg">
                    <MapPin className="mr-2 h-5 w-5 text-[#273a96]" /> Thillai Nagar & Cantonment
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-bold text-[#00a896] uppercase tracking-wider mb-2">Virtual Business Address</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 font-headings leading-tight">Premium Trichy Address That Builds Instant Credibility</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                First impressions matter. Use our prime locations as your official business address on company registration documents, GST certificates, websites, and business cards.
              </p>
              <ul className="space-y-4">
                {[
                  "Registration for GST & Company Incorporation",
                  "Prime locations in Thillai Nagar & Cantonment",
                  "Perfect for Remote Teams & Global Companies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#00a896] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2: Registration Support (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#273a96] to-purple-600 rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/6929017/pexels-photo-6929017.jpeg"
                  alt="Registration and compliance"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
               
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-bold text-[#273a96] uppercase tracking-wider mb-2">Company Registration Support</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 font-headings leading-tight">End-to-End Assistance for Registering Your Business</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Starting a company involves complex documentation. We simplify this with expert guidance for Private Limited, LLP, and Partnership registration, ensuring you navigate Indian business laws seamlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "PVT LTD, LLP, OPC Registration Support",
                  "GST Registration & Startup India Recognition",
                  "Foreign Company Subsidiary Setup Guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#273a96] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 3: Mail Handling */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-600 rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/6169025/pexels-photo-6169025.jpeg"
                  alt="Professional Mail Handling"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="bg-white/90 backdrop-blur text-[#0f172a] px-6 py-3 rounded-xl font-bold flex items-center shadow-lg">
                    <Mail className="mr-2 h-5 w-5 text-orange-500" /> Secure Handling
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Mail Handling & Forwarding</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 font-headings leading-tight">Professional Management of Business Correspondence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Never miss crucial documents. Our reception team logs and securely stores your mail. We can scan and email it to you instantly or forward packages to your location.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <Clock className="h-6 w-6 text-orange-500 mb-2" />
                  <h4 className="font-bold text-gray-900">Instant Alerts</h4>
                  <p className="text-xs text-gray-500">Email/WhatsApp notifications</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <ShieldCheck className="h-6 w-6 text-orange-500 mb-2" />
                  <h4 className="font-bold text-gray-900">Secure Storage</h4>
                  <p className="text-xs text-gray-500">Confidentiality guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: On-Demand Workspace (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#00a896] to-blue-500 rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Using one of the existing office interior images from another generation or a placeholder for now - fallback to hero image re-used to avoid broken link if no specific workspace image gen yet */}
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop"
                  alt="On Demand Workspace"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="bg-white/90 backdrop-blur text-[#0f172a] px-6 py-3 rounded-xl font-bold flex items-center shadow-lg">
                    <Briefcase className="mr-2 h-5 w-5 text-[#00a896]" /> Flexible Access
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-bold text-[#00a896] uppercase tracking-wider mb-2">On-Demand Workspace Access</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 font-headings leading-tight">Professional Workspace Whenever You Need It</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Virtual doesn't mean zero physical presence. Book meeting rooms for client pitches or hot desks for focused work sessions. Pay only for what you use.
              </p>
              <ul className="space-y-4">
                {[
                  "Hourly Meeting Room Bookings",
                  "Conference Facilities (4-12 people)",
                  "Day Passes for Collaborative Work"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#00a896] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-gray-900 relative">
        {/* Background elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headings">Virtual Office Plans</h2>
            <p className="text-xl text-gray-400">Flexible packages for every business stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-headings">Basic</h3>
                <p className="text-gray-400 text-sm">Essential presence for solopreneurs.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Prestigious Business Address</li>
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Mail Handling & Notifications</li>
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" />  Lobby Listing</li>
              </ul>
              <Link href="/contact" className="block w-full py-4 text-center border border-white/30 text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-colors">
                Enquire Now
              </Link>
            </div>

            {/* Professional Plan: Highlighted */}
            <div className="bg-[#273a96] p-8 rounded-3xl shadow-2xl relative transform md:-translate-y-6 flex flex-col border border-[#273a96]">
              <div className="absolute top-0 right-0 bg-[#00a896] text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 font-headings">Professional</h3>
                <p className="text-blue-100 text-sm">For growing businesses needing support.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                <li className="flex items-start text-white"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Everything in Basic</li>
                <li className="flex items-start text-white"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Company Registration Support</li>
                <li className="flex items-start text-white"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> 2 Meeting Room Credits/Mo</li>
                <li className="flex items-start text-white"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> GST Registration Documents</li>
              </ul>
              <Link href="/contact" className="block w-full py-4 text-center bg-[#00a896] text-white rounded-xl font-bold hover:bg-[#00897b] transition-colors shadow-lg relative z-10">
                Enquire Now
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-headings">Enterprise</h3>
                <p className="text-gray-400 text-sm">Comprehensive solution for established firms.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Everything in Professional</li>
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Dedicated Phone Line Service</li>
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> GST Filing Support</li>
                <li className="flex items-start text-gray-300"><CheckCircle className="h-5 w-5 text-[#00a896] mr-3 flex-shrink-0" /> Priority Receptionist Service</li>
              </ul>
              <Link href="/contact" className="block w-full py-4 text-center border border-white/30 text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-colors">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 font-headings">Why Choose Universe Coworks</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, t: "Strategic Location", d: "Prime addresses in Trichy's most prestigious commercial zones." },
              { icon: ShieldCheck, t: "Compliance Ready", d: "All docs meeting statutory requirements for Indian business operations." },
              { icon: Clock, t: "Instant Setup", d: "Operational within 24-48 hours. No waiting, no complications." },
              { icon: Building2, t: "Growth Path", d: "Seamless upgrade to physical office as your team expands." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-[#273a96]">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#273a96] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headings">Start Your Trichy Business Presence Today</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <div className="relative">
              <div className="text-6xl font-bold text-white/20 mb-2">1</div>
              <h4 className="font-bold text-xl">Choose Plan</h4>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-white/20 mb-2">2</div>
              <h4 className="font-bold text-xl">Submit Docs</h4>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-white/20 mb-2">3</div>
              <h4 className="font-bold text-xl">Go Live</h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-[#00a896] text-white rounded-full font-bold hover:bg-[#00897b] transition-all shadow-lg hover:shadow-[#00a896]/50">
              Get Started Now
            </Link>
            <Link href="/contact" className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#273a96] transition-all">
              Speak to Advisor
            </Link>
          </div>
          <p className="mt-8 text-blue-200">
            Questions? Call us at <span className="font-bold text-white">+91 97866 55005</span> or WhatsApp
          </p>
        </div>
      </section>
    </div>
  );
}
