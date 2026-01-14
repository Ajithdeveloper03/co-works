import { Calendar, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Events & Meetups - Universe Coworks Community',
  description: 'Join our regular events and meetups that bring founders, professionals, and innovators together at Universe Coworks.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events & Meetups
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Where conversations turn into collaborations
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                alt="Community Events"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Regular Community Events
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Regular events that bring founders, professionals, and innovators together. Share ideas, build connections, and grow your network organically. Where conversations turn into collaborations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Monthly founder meetups and networking sessions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Industry-specific knowledge sharing events</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Guest speaker sessions with successful entrepreneurs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Pitch nights and demo days for startups</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Social gatherings and team-building activities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Event Categories
              </h3>
              <div className="w-24 h-1 bg-[#1a9ba8] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Networking Events
                </h4>
                <p className="text-gray-600">
                  Connect with fellow entrepreneurs and professionals
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Knowledge Sessions
                </h4>
                <p className="text-gray-600">
                  Learn from industry experts and thought leaders
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Social Gatherings
                </h4>
                <p className="text-gray-600">
                  Casual meetups to build lasting relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Become a member and get exclusive access to all our events and meetups
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a9ba8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
