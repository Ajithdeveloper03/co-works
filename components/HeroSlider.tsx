'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Users, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Premium Coworking Space in Trichy for Professionals & Teams',
    subtitle: "Universe Coworks offers fully-equipped, flexible workspace solutions in Tiruchirappalli with high-speed internet, private cabins, and 24/7 access. Join Trichy's fastest-growing professional community.",
    ctaPrimary: 'Book a Free Tour',
    linkPrimary: '/contact',
    ctaSecondary: '',
    linkSecondary: '',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'From Hot Desks to Private Suites: Your Perfect Workspace in Trichy',
    subtitle: 'Whether you\'re a freelancer, startup, or established business in Tiruchirappalli, Universe Coworks offers scalable workspace solutions near Trichy Junction, Thillai Nagar, and Cantonment with professional amenities and zero long-term commitments.',
    ctaPrimary: 'Explore Trichy Locations',
    linkPrimary: '/locations',
    ctaSecondary: 'Compare Membership Plans',
    linkSecondary: '/pricing',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Trichy\'s Most Trusted Coworking Space – Rated 4.9/5',
    subtitle: 'Join 500+ professionals, startups, and remote teams who chose Universe Coworks as their workspace solution in Trichy. Experience enterprise-grade infrastructure at startup-friendly pricing.',
    ctaPrimary: 'Start Your Free Day Pass',
    linkPrimary: '/contact',
    ctaSecondary: 'Read Trichy Member Reviews',
    linkSecondary: '/#testimonials',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#273a96]/30"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
              <div className="max-w-3xl space-y-3 animate-fade-in-up">

                {/* Trust Badges - Slide 3 Specific or General */}
                {(index === 0 || index === 1 || index === 2) && (
                  <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4 animate-scale-in">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">4.9/5 (200+ Reviews)</span>
                  </div>
                )}

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-headings">
                  {slide.title}
                </h1>

                <p className="text-lg text-justify text-gray-200 leading-relaxed max-w-2xl font-medium">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {slide.ctaPrimary && (
                    <Link
                      href={slide.linkPrimary}
                      className="bg-[#00a896] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00897b] hover:scale-105 transition-all shadow-lg flex items-center justify-center sm:justify-start"
                    >
                      {slide.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  )}
                  {slide.ctaSecondary && (
                    <Link
                      href={slide.linkSecondary}
                      className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#273a96] transition-all flex items-center justify-center sm:justify-start"
                    >
                      {slide.ctaSecondary}
                    </Link>
                  )}
                </div>

                {/* Global Trust Signals */}
                <div className="flex items-center space-x-8 pt-8 border-t border-white/10 mt-8">
                  <div>
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-sm text-gray-400">Members in Trichy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">4.9/5</p>
                    <p className="text-sm text-gray-400">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-[#00a896] backdrop-blur-md text-white border border-white/30 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-[#00a896] backdrop-blur-md text-white border border-white/30 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-10 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-[#00a896]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
