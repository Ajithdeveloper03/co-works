'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white pt-12 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-16 mb-8">

          {/* Column 1: About */}
          <div className="space-y-8">
            <Link href="/" className="inline-block relative h-12 w-48">
              <Image src="/logo.png" alt="Universe Coworks" fill className="object-contain" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Universe Coworks is Trichy's global coworking brand, redefining professional environments for startups and enterprises since 2023.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-[#00a896]">
                <ShieldCheck className="h-4 w-4" />
                <span>Google Top Rated Hub</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-[#273a96]">
                <ShieldCheck className="h-4 w-4" />
                <span>Startup India Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/40">Ecosystem</h4>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              {[
                { name: 'About Universe', href: '/about' },
                { name: 'Workspace Hubs', href: '/locations' },
                { name: 'Startup Community', href: '/community' },
                { name: 'Virtual Presence', href: '/virtual-office' },
                { name: 'Pricing Plans', href: '/pricing' },
                // { name: 'FAQ', href: '/frequently-asked-questions' },
                { name: 'Connect', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-[#00a896] mr-0 group-hover:mr-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Connect */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/40">Global Connect</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00a896] mr-4 mt-0.5 shrink-0" />
                <span className="text-sm font-medium">74A, Salai Rd, 2 floor nd
                  opp. Vaishali Hospital,
                  Thillai Nagar East,
                  Tiruchirappalli, Tamil Nadu
                  620018</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#273a96] mr-4 shrink-0" />
                <a href="mailto:info@universecoworks.com" className="text-sm font-bold hover:text-white transition-colors">info@universecoworks.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#00a896] mr-4 shrink-0" />
                <a href="tel:+9186755-56079" className="text-sm font-bold hover:text-white transition-colors">+91 86755-56079 <br /> +91 97899-13368</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hub Operations */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/40">Hub Operations</h4>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-[#00a896]">09:00 - 6:00</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-600 italic">By Appointment</span>
              </div>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/universe-coworks/' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: 'https://www.instagram.com/universe_coworks/' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585951603848' }
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-gray-500 hover:text-[#00a896] transition-all">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-[#273a96] hover:bg-[#1e2a78] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl">
                Book Workspace
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2026 Universe Coworks. Global Standards Hub.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
