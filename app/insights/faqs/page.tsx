'use client';

import { useState } from 'react';
import { ChevronDown, Search, MapPin, CreditCard, Coffee, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  {
    category: "Location & Accessibility",
    icon: MapPin,
    questions: [
      {
        q: "Where is Universe Coworks located in Trichy?",
        a: "We operate premium coworking spaces in Trichy at multiple strategic locations: Thillai Nagar (Commercial Hub, 5 mins from Chathiram Bus Stand) and Cantonment (Premium Business Zone, 7 mins from Trichy Junction). All locations offer high-speed internet, meeting rooms, and 24/7 access."
      },
      {
        q: "Is Universe Coworks easily accessible from Trichy Junction?",
        a: "Yes. Our Cantonment location is just 7 minutes (2.5 km) from Trichy Junction Railway Station, making it extremely convenient for professionals commuting from Srirangam, Lalgudi, Ariyamangalam, or other Trichy suburbs. Our Thillai Nagar location is 10 minutes from Trichy Junction."
      }
    ]
  },
  {
    category: "Membership & Plans",
    icon: CreditCard,
    questions: [
      {
        q: "Do you offer day passes for coworking in Trichy?",
        a: "Yes. Our Trichy day pass starts at ₹499, giving you full access to hot desk seating, high-speed internet, unlimited tea/coffee, and professional workspace for an entire day. Perfect for freelancers, travelers, and students."
      },
      {
        q: "Are there any long-term contracts?",
        a: "No long-term commitments required. All Universe Coworks memberships in Trichy operate on a flexible month-to-month basis. You can upgrade, downgrade, or cancel with notice (7-30 days depending on plan). This flexibility is designed for Trichy's dynamic ecosystem."
      }
    ]
  },
  {
    category: "Amenities & Access",
    icon: Coffee,
    questions: [
      {
        q: "Do you have meeting rooms?",
        a: "Yes. All our locations feature professionally equipped meeting rooms (4-6 people) with whiteboards, projectors, and video conferencing setups. Rates start at ₹199/hour for members."
      },
      {
        q: "Is there 24/7 access?",
        a: "Yes. All dedicated desk and private office members get 24/7 access through secure biometric keycards. Reception and support are available Mon-Sat, 9 AM - 7 PM."
      }
    ]
  },
  {
    category: "Booking & Process",
    icon: Calendar,
    questions: [
      {
        q: "How do I book a coworking space?",
        a: "Booking is simple: 1. Visit our Booking Page online. 2. Select your location (Thillai Nagar or Cantonment). 3. Choose your plan. 4. Pay online. Alternatively, you can Schedule a Free Tour to see the space first."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 font-sans">
      {/* Visual Header */}
      <section className="bg-[#273a96] text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
            alt="Support Center"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#273a96]/90"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-200 mb-8">Everything you need to know about Universe Coworks.</p>

          <div className="relative max-w-xl mx-auto shadow-2xl">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:ring-2 focus:ring-[#00a896] outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left: Questions */}
          <div className="lg:col-span-2 space-y-12">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-10 text-gray-500">No questions found matching your search.</div>
            ) : (
              filteredFaqs.map((category, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-gray-100">
                    <div className="p-2 bg-blue-50 text-[#273a96] rounded-lg">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0f172a] font-headings">{category.category}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((item, qIdx) => (
                      <details key={qIdx} className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-start justify-between gap-1.5 text-gray-900 font-bold text-lg select-none hover:text-[#00a896] transition-colors p-4 rounded-xl hover:bg-gray-50">
                          <span>{item.q}</span>
                          <span className="relative size-5 shrink-0 mt-1">
                            <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
                          </span>
                        </summary>
                        <div className="mt-2 ml-4 pl-4 border-l-2 border-[#00a896] text-gray-600 leading-relaxed pb-4 animate-fade-in">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Support Widget */}
          <div className="lg:col-span-1">
            <div className="bg-[#0f172a] rounded-[2rem] overflow-hidden sticky top-24 shadow-2xl">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer Support"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-bold text-white font-headings">Need Personal Help?</h3>
                  <p className="text-gray-400 text-sm">Our support team is online.</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone className="h-5 w-5 text-[#00a896]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Call us directly</p>
                    <p className="font-bold text-white">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Coffee className="h-5 w-5 text-[#00a896]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Visit us</p>
                    <p className="font-bold text-white">Thillai Nagar, Trichy</p>
                  </div>
                </div>

                <Link href="/contact" className="block w-full py-4 bg-[#00a896] text-white text-center font-bold rounded-xl hover:bg-[#00897b] transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
