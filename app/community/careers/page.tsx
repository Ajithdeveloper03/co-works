import { Briefcase, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Hiring Support - Universe Coworks Community',
  description: 'Access local talent and hiring support for growing teams. Connecting startups with skilled professionals from Trichy and Tamil Nadu.',
  alternates: {
    canonical: 'https://universecoworks.com/community/careers',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/careers',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Careers',
      },
    ],
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Careers & Hiring Support
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building teams and creating opportunities
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hire Top Talent
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Access local talent and hiring support for growing teams. We connect startups with skilled professionals from the region. Helping businesses grow while creating employment in Trichy.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Access to qualified candidates</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Job posting assistance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Interview space availability</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Campus recruitment support</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Careers and Hiring"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Talent Pool Access
              </h3>
              <div className="w-24 h-1 bg-[#1a9ba8] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-[#1a9ba8]" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Engineering Talent
                </h4>
                <p className="text-gray-600">
                  Access graduates from top engineering colleges
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-[#1a9ba8]" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Business Professionals
                </h4>
                <p className="text-gray-600">
                  Management and business school graduates
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Briefcase className="h-8 w-8 text-[#1a9ba8]" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Experienced Professionals
                </h4>
                <p className="text-gray-600">
                  Connect with experienced talent in various domains
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              For Job Seekers
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for exciting opportunities with startups and growing companies? Connect with employers at Universe Coworks and find your next career move.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a9ba8] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#158995] transition-all transform hover:scale-105 shadow-lg"
            >
              Connect with Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us help you find the right talent for your growing business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a9ba8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Hiring Support
          </Link>
        </div>
      </section>
    </div>
  );
}
