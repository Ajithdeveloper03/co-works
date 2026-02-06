import { Network, Users, Handshake } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Networking - Universe Coworks Community',
  description: 'Connect with fellow founders, investors, and ecosystem partners at Universe Coworks. Build meaningful relationships that support growth and scale.',
  alternates: {
    canonical: 'https://universecoworks.com/community/networking',
  },
  openGraph: {
    url: 'https://universecoworks.com/community/networking',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Networking',
      },
    ],
  },
};

export default function NetworkingPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Startup Networking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Strong networks build strong startups
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Startup Networking"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Meaningful Connections
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Connect with fellow founders, investors, and ecosystem partners. Build meaningful relationships that support growth and scale. Because strong networks build strong startups.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Connect with like-minded entrepreneurs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Access to investors and mentors</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Collaboration opportunities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Business partnership potential</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center">
              <div className="bg-[#1a9ba8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Founder Community
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of startup founders and entrepreneurs
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center">
              <div className="bg-[#1a9ba8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partner Network
              </h3>
              <p className="text-gray-600">
                Access ecosystem partners, service providers, and collaborators
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center">
              <div className="bg-[#1a9ba8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Connections
              </h3>
              <p className="text-gray-600">
                Network with international startups and global companies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Grow Your Network
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Universe Coworks and connect with the startup ecosystem
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a9ba8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Our Community
          </Link>
        </div>
      </section>
    </div>
  );
}
