'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowRight, Share2, Navigation, CheckCircle, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section - The City Pulse */}
      <section className="relative h-[70vh] flex items-center bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8266735/pexels-photo-8266735.jpeg"
            alt="Trichy City Pulse"
            fill
            className="object-cover opacity-40 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center space-x-3 bg-[#00a896]/10 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#00a896] text-sm font-bold border border-[#00a896]/20 animate-fade-in">
              <MapPin className="h-4 w-4" />
              <span className="uppercase tracking-[0.3em]">Our Strategic Network</span>
            </div>

            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight font-headings tracking-tight animate-fade-in-up">
              Strategic Spaces. <br />
              <span className="text-[#00a896]">Connected Success.</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 max-w-2xl leading-relaxed font-light animate-fade-in-up delay-200">
              Situated in the commercial heart of Trichy, Universe Coworks provides seamless access to the city's key transit and talent hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Introduction */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Location Strategy</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0f172a] font-headings tracking-tight leading-tight">Where Commerce Meets <span className="text-[#273a96]">Convenience.</span></h3>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              We don't just pick buildings; we select strategic nodes that eliminate commute stress and maximize business visibility. Our Thillai Nagar and Cantonment hubs represent the pinnacle of Trichy's commercial real estate.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-black text-[#00a896]">02</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Primary<br />Hubs</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-black text-[#273a96]">100%</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Accessibility<br />Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Location Cards - Dynamic Layout */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Location 1: Thillai Nagar */}
          <div className="grid lg:grid-cols-12 gap-0 bg-[#0f172a] rounded-[4rem] overflow-hidden shadow-2xl relative group">
            <div className="lg:col-span-12 absolute top-0 right-0 p-12 z-20 pointer-events-none">
              <span className="px-6 py-2 bg-[#00a896] text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg">Headquarters</span>
            </div>

            <div className="lg:col-span-7 relative h-[500px] lg:h-auto overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.817837258244!2d78.68789247480578!3d10.833302389318956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf500746a0ec1%3A0xe6d1f52e232d74a3!2sUniverse%20Co-works!5e1!3m2!1sen!2sin!4v1768369438182!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
              ></iframe>
            </div>

            <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center space-y-10 text-white relative z-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold font-headings tracking-tight">Thillai Nagar Hub</h2>
                <p className="text-[#00a896] font-black uppercase text-sm tracking-[0.3em]">The Commercial Heart</p>
              </div>

              <p className="text-blue-100/70 text-lg leading-relaxed font-light">
                Located in the premium 11th Cross, Thillai Nagar Hub is surrounded by Trichy's elite financial institutions, healthcare giants, and retail destinations. A workspace that commands respect and ensures client accessibility.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#00a896] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">4th Floor, Kannan Towers</p>
                    <p className="text-sm text-gray-400">11th Cross East, Thillai Nagar, Trichy - 620018</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#00a896] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">9 AM – 9 PM</p>
                    <p className="text-sm text-gray-400">Monday - Saturday (Full Services)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="https://maps.google.com" target="_blank" className="flex items-center justify-center px-8 py-4 bg-white text-[#0f172a] rounded-2xl font-black text-lg hover:bg-gray-100 transition-colors shadow-xl">
                  <Navigation className="h-5 w-5 mr-3" /> Get Directions
                </a>
                <Link href="/contact" className="flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-colors">
                  Book a Free Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Location 2: Cantonment - Swapped Layout */}
          <div className="grid lg:grid-cols-12 gap-0 bg-gray-50 rounded-[4rem] overflow-hidden shadow-xl border border-gray-100 relative group">
            <div className="lg:col-span-12 absolute top-0 left-0 p-12 z-20 pointer-events-none">
              <span className="px-6 py-2 bg-[#273a96] text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg">Transit Hub</span>
            </div>

            <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center space-y-10 text-[#0f172a] relative z-10 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold font-headings tracking-tight">Cantonment Suite</h2>
                <p className="text-[#273a96] font-black uppercase text-sm tracking-[0.3em]">Connectivity King</p>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Strategic node for organizations with commuting teams. Just 5 minutes from Central Bus Stand and Railway Station, ensuring your team spends more time building and less time traveling.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#273a96] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">2nd Floor, Bharath Plaza</p>
                    <p className="text-sm text-gray-400">Promenade Road, Cantonment, Trichy - 620001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-[#273a96] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Support: +91 97866 55005</p>
                    <p className="text-sm text-gray-400">Dedicated Facility Management Desk</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="https://maps.google.com" target="_blank" className="flex items-center justify-center px-8 py-4 bg-[#273a96] text-white rounded-2xl font-black text-lg hover:bg-[#1e2a78] transition-colors shadow-xl">
                  <Navigation className="h-5 w-5 mr-3" /> Get Directions
                </a>
                <Link href="/contact" className="flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-black text-lg hover:border-[#273a96] hover:text-[#273a96] transition-colors">
                  Book Tour
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[500px] lg:h-auto overflow-hidden order-1 lg:order-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.817837258244!2d78.68789247480578!3d10.833302389318956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf500746a0ec1%3A0xe6d1f52e232d74a3!2sUniverse%20Co-works!5e1!3m2!1sen!2sin!4v1768369438182!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Network Benefits - Bento Grid */}
      <section className="py-32 bg-[#0f172a] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-sm font-bold text-[#00a896] uppercase tracking-[0.5em]">Network Perks</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-headings tracking-tight">Seamless Movement</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] group hover:bg-white/10 transition-all">
              <Globe className="h-12 w-12 text-[#00a896] mb-8" />
              <h4 className="text-3xl font-bold mb-6 font-headings italic">One Membership. Multiple Access.</h4>
              <p className="text-blue-100/60 text-lg leading-relaxed max-w-xl">
                A Universe Coworks membership isn't just for a desk; it's a passport to our entire local network. Need to meet a client in Thillai Nagar but your base is Cantonment? No problem.
              </p>
            </div>
            <div className="bg-[#00a896] p-12 rounded-[3.5rem] flex flex-col justify-between shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
              <div>
                <h4 className="text-2xl font-bold mb-4 font-headings">Standard Experience</h4>
                <p className="text-white/80 text-sm leading-relaxed font-bold">Identical infrastructure, security, and coffee standards at every hub.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] bg-gray-900 p-12 md:p-24 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop" alt="Experience" fill className="object-cover" />
            </div>
            <div className="relative z-10 space-y-12">
              <h3 className="text-3xl md:text-5xl font-bold font-headings tracking-tight">Experience Our Spaces Today.</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                The best way to evaluate a workspace is to feel its energy. We offer no-obligation tours at both Thillai Nagar and Cantonment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-12 py-5 bg-[#00a896] text-white rounded-2xl font-black text-xl hover:bg-[#00897b] transition-all shadow-2xl">
                  Schedule Tour
                </Link>
                <Link href="/pricing" className="px-12 py-5 bg-white text-gray-900 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">
                  View Membership Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
