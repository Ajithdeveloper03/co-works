'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "From 2-Person Team to 15 Employees in Trichy",
    text: "When we started our AI-based EdTech startup in Trichy, we couldn't afford a traditional office but needed professional infrastructure for video calls with investors and clients. Universe Coworks gave us exactly what we needed—a private cabin in Thillai Nagar coworking space with high-speed internet and meeting rooms. The flexibility was crucial during our growth phase. We scaled from 2 to 15 people without changing locations. The Trichy startup community here also connected us with our first angel investor.",
    name: "Karthik Raman",
    role: "Co-Founder & CTO",
    company: "LearnAI Technologies",
    plan: "Private Suite (15-person)",
    rating: 5,
    joined: "Jan 2023"
  },
  {
    id: 2,
    quote: "Finally, a Professional Workspace I Can Afford in Trichy",
    text: "As a freelance graphic designer in Trichy, working from home was killing my productivity and client perception. I needed a professional setup but couldn't justify ₹15,000/month for a traditional office. Universe Coworks' hot desk plan at ₹2,999/month was perfect. I get high-speed internet, professional ambiance for client video calls, and access to meeting rooms when needed. Plus, the coworking space near Trichy Junction makes my commute from Srirangam super easy.",
    name: "Priya Sundaram",
    role: "Freelance Graphic Designer",
    company: "Freelance",
    plan: "Hot Desk Monthly",
    rating: 5,
    joined: "June 2024"
  },
  {
    id: 3,
    quote: "Our Trichy Regional Hub Without the Overhead Nightmare",
    text: "Our Bangalore-based software company needed a regional office in Trichy to serve Central Tamil Nadu clients and tap into NIT Trichy talent. Setting up a traditional office would have taken 6 months and ₹10+ lakhs. We found Universe Coworks and had a fully-operational 8-person private office space in Trichy within 48 hours. Everything was included... Our team productivity actually increased compared to our Bangalore office because of the focused environment.",
    name: "Anjali Mehta",
    role: "Regional Operations Manager",
    company: "CloudScale Solutions",
    plan: "Enterprise Suite",
    rating: 5,
    joined: "Aug 2023"
  },
  {
    id: 4,
    quote: "Found My First Three Clients Through the Trichy Coworking Community",
    text: "I quit my corporate job to start a digital marketing consultancy in Trichy. Honestly, I was terrified about finding clients in a smaller city. Within my first month at Universe Coworks, I met two startup founders and one established business owner—all three became paying clients. The monthly networking events and casual coffee conversations at this coworking space in Trichy have been worth 10X my membership fee.",
    name: "Rajesh Kumar",
    role: "Founder",
    company: "GrowthPath Marketing",
    plan: "Dedicated Desk",
    rating: 5,
    joined: "March 2024"
  },
  {
    id: 5,
    quote: "Escaped Home Distractions, Tripled My Productivity",
    text: "I work remotely for a US-based company from Trichy. Working from home with family around was a disaster—constant interruptions, poor internet. The day pass option at Universe Coworks let me test it first. After one week, I saw my productivity triple and immediately signed up for a dedicated desk. The 24/7 access means I can take late-night calls with my US team in privacy. This is hands-down the best coworking space in Trichy for remote workers.",
    name: "Deepa Venkatesh",
    role: "Senior Software Engineer",
    company: "TechCorp Inc. (Remote)",
    plan: "Dedicated Desk + 24/7",
    rating: 5,
    joined: "May 2024"
  },
  {
    id: 6,
    quote: "Professional Client Meeting Space in Trichy's Business District",
    text: "As a practicing Chartered Accountant in Trichy, client perception matters tremendously. Meeting clients at home wasn't professional, and renting a traditional office was financially inefficient. Universe Coworks' private cabin in Trichy Thillai Nagar gave us the perfect solution—a professional address, meeting room access, and the flexibility to use space only when needed. Our clients are impressed with the location and ambiance.",
    name: "CA Suresh Natarajan",
    role: "Practicing Chartered Accountant",
    company: "Natarajan & Associates",
    plan: "Private Cabin",
    rating: 5,
    joined: "Nov 2023"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">What Trichy Professionals Say</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Trichy's entrepreneurs, freelancers, and business teams say about their experience.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Card Container */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 relative min-h-[400px] flex flex-col justify-center text-center transition-all duration-500">
            {/* Giant Quote Icon */}
            <div className="absolute top-8 left-8 text-[#00a896] opacity-10">
              <Quote className="h-24 w-24 transform rotate-180" />
            </div>

            {/* Dynamic Content */}
            <div className="relative z-10 animate-fade-in space-y-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#273a96] ">
                "{testimonials[current].quote}"
              </h3>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                "{testimonials[current].text}"
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-bold text-[#0f172a]">{testimonials[current].name}</h4>
                <p className="text-[#00a896] font-medium">{testimonials[current].role}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                  {testimonials[current].company} | Member since {testimonials[current].joined}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-4 bg-white rounded-full shadow-lg border border-gray-100 text-[#0f172a] hover:bg-[#273a96] hover:text-white transition-all z-20 group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-4 bg-white rounded-full shadow-lg border border-gray-100 text-[#0f172a] hover:bg-[#273a96] hover:text-white transition-all z-20 group"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-[#00a896]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
